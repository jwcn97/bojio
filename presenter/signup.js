var view;
var backButton;
var submitButton;
var webview;
var _userPhoto;
var _password;

view = Ti.UI.createView({
	width : Measurement.convert(320),
	zIndex : WinOrder.signup
});

(function() {
	var navbar;

	view.add( navbar = Ti.UI.createView({
		top : 0,
		height : '44dp',
		backgroundColor : '#FFC800'
	}));

	navbar.add( backButton = Ti.UI.createLabel({
		left : '0dp',
		width : '100dp',
		text : 'Back',
		font : {
			fontWeight : 'bold',
			fontSize : '20dp'
		},
		color : 'white',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));

	navbar.add(Ti.UI.createLabel({
		left : '100dp',
		right : '100dp',
		text : 'Sign up',
		font : {
			fontSize : '20dp'
		},
		color : 'black',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));

	navbar.add( submitButton = Ti.UI.createLabel({
		right : '0dp',
		width : '100dp',
		text : 'Submit',
		font : {
			fontWeight : 'bold',
			fontSize : '20dp'
		},
		color : 'white',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));
})();

view.add( webview = Ti.UI.createWebView({
	top : '44dp',
	bottom : 0,
	backgroundColor : '#F6F6F6',
	url : '/Html/Signup.html',
	enableZoomControls : false,
	willHandleTouches : false,
	overScrollMode : (Ti.Platform.name === 'android' ? Ti.UI.Android.OVER_SCROLL_NEVER : null)
}));

/*
 * Event
 */
view.addEventListener('back', function() {
	Win.hide(exports, Win.FLY_RIGHT, function() {
		webview.reload();
		_userPhoto = null;
		_password = null;
	});
});

backButton.addEventListener('click', function() {
	view.fireEvent('back');
});

submitButton.addEventListener('click', function() {
	var result = JSON.parse(webview.evalJS('getResult();'));

	/*
	 * Validation
	 */
	if (!_userPhoto) {
		alert('Must choose a profile photo.');
		return;
	} else if (!_password) {
		alert('Must create a password.');
		return;
	} else if (result.name.length < 3) {
		alert('Name is too short');
		return;
	} else if (result.username.length < 3) {
		alert('Username is too short.');
		return;
	}

	var data = {
		profile_photo : _userPhoto,
		password : _password,
		name : result.name,
		username : result.username,
		quote : result.quote
	};

	Network.fetch('sign up', '/guest/signup', data, null, function() {

	});
});

Ti.App.addEventListener('signup_presenter_set_password', function() {
	SignupCreatePasswordPresenter.show(function(password) {
		if (password.length < 8) {
			alert("Password must be at least 8 characters");
		} else {
			SignupCreatePasswordConfirmPresenter.show(function(confirm_password) {
				if (password !== confirm_password) {
					alert("Both password are not same, please retry.");
				} else {
					_password = password;
				}
			});
		}
	});
});

Ti.App.addEventListener('signup_presenter_picture_upload', function() {
	var optionDialog;

	function updatePhoto(media) {
		if (media.height > media.width) {
			_userPhoto = media.imageAsResized(160, media.height / media.width * 160).imageAsCropped({
				width : 160,
				height : 160,
				x : 0,
				y : (media.height / media.width - 1) * 80
			});
		} else {
			_userPhoto = media.imageAsResized(media.width / media.height * 160, 160).imageAsCropped({
				width : 160,
				height : 160,
				x : (media.width / media.height - 1) * 80,
				y : 0
			});
		}

		webview.evalJS('loadPhoto("' + _userPhoto.getMimeType() + '","' + Ti.Utils.base64encode(_userPhoto) + '");');
	}

	optionDialog = Ti.UI.createOptionDialog({
		cancel : 2,
		options : ['Get from camera', 'Get from gallery', 'Cancel'],
		selectedIndex : 0,
		title : 'Choose profile picture'
	});

	optionDialog.addEventListener('click', function(e) {
		switch (e.index) {
		case 0:
			//Camera
			Ti.Media.showCamera({
				error : function(e) {
					alert(e.code + ': ' + e.error);
				},
				mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
				success : function(e) {
					updatePhoto(e.media);
				}
			});
			break;
		case 1:
			//Gallery
			Ti.Media.openPhotoGallery({
				error : function(e) {
					alert(e.code + ': ' + e.error);
				},
				mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
				success : function(e) {
					updatePhoto(e.media);
				}
			});
			break;
		case 2:
			//Cancel
			webview.evalJS('document.getElementById("picture_upload").removeAttribute("disabled");');
			break;
		}
	});

	optionDialog.show();
});

/*
 * Public Properties
 */
exports.view = view;

/*
 * Initialize
 */
Win.addView(exports);
LaunchingLoadProgress.tick();

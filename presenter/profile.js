var view;
var backButton;
var content;
var profilePhoto;
var name;
var gender;
var birthday;
var quote;
var email;
var emailVerified;
var phone;
var phoneVerified;
var facebook;
var username;
var password;
var _userPhoto;

view = Ti.UI.createView({
	backgroundColor : '#F6F6F6',
	width : Measurement.convert(320),
	zIndex : WinOrder.profile
});

(function() {
	var navbar;

	view.add( navbar = Ti.UI.createView({
		top : 0,
		height : '44dp',
		backgroundColor : '#FFC800'
	}));

	navbar.add(Ti.UI.createImageView({
		height : '44dp',
		image : '/images/bojio-navbar-logo.png'
	}));

	navbar.add( backButton = Ti.UI.createImageView({
		left : 0,
		height : '44dp',
		image : '/images/navbar-back.png'
	}));
})();

view.add(Ti.UI.createLabel({
	top : '44dp',
	left : '10dp',
	height : '30dp',
	text : 'Edit Profile',
	font : {
		fontSize : '20dp',
		fontStyle : 'italic'
	},
	color : '#D3D5D6'
}));

view.add( content = Ti.UI.createScrollView({
	top : '74dp',
	bottom : '55dp',
	scrollType : 'vertical',
	layout : 'vertical'
}));

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '140dp'
	}));

	container.add(Ti.UI.createLabel({
		left : '20dp',
		text : 'Profile Photo',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	container.add( profilePhoto = Ti.UI.createImageView({
		right : '20dp',
		height : '100dp',
		borderRadius : '50dp',
		backgroundColor : '#CCCCCC',
		width : '100dp',
		bubbleParent : false
	}));

	container.addEventListener('click', function() {
		profilePhoto.fireEvent('click');
	});

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '60dp'
	}));

	container.add(Ti.UI.createLabel({
		left : '20dp',
		width : '70dp',
		height : Ti.UI.SIZE,
		text : 'Name',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	container.add( name = Ti.UI.createTextField({
		left : '100dp',
		right : '20dp',
		height : Ti.UI.SIZE,
		color : 'black',
		backgroundColor : 'transparent',
		bubbleParent : false,
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	container.addEventListener('click', function() {
		name.focus();
	});

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '60dp'
	}));

	container.add(Ti.UI.createLabel({
		left : '20dp',
		height : Ti.UI.SIZE,
		text : 'Gender',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	container.add( gender = Ti.UI.createLabel({
		right : '20dp',
		height : Ti.UI.SIZE,
		color : 'black',
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	container.addEventListener('click', function() {
		var optionDialog;

		optionDialog = Ti.UI.createOptionDialog({
			cancel : 2,
			options : ['Male', 'Female', 'Cancel'],
			title : 'Gender'
		});

		optionDialog.addEventListener('click', function(e) {
			switch(e.index) {
			case 0:
				gender.text = "Male";
				break;
			case 1:
				gender.text = "Female";
				break;
			}
		});

		optionDialog.show();
	});

	contentDrawLine();
})();

(function() {
	var container;
	var datePicker;
	var pickerView;
	var toolbar;
	var done;
	var picker;

	content.add( container = Ti.UI.createView({
		height : '60dp'
	}));

	container.add(Ti.UI.createLabel({
		left : '20dp',
		height : Ti.UI.SIZE,
		text : 'Birthday',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	container.add( birthday = Ti.UI.createLabel({
		right : '20dp',
		height : Ti.UI.SIZE,
		color : 'black',
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	if (Ti.Platform.name === 'android') {
		container.add( datePicker = Ti.UI.createPicker({
			type : Ti.UI.PICKER_TYPE_DATE,
			visible : false
		}));
	} else {
		(function() {
			view.add( pickerView = Ti.UI.createView({
				bottom : '55dp',
				height : '245dp',
				backgroundColor : 'white',
				visible : false
			}));

			pickerView.add( toolbar = Ti.UI.createView({
				top : 0,
				height : '45dp',
				backgroundColor : '#FFC800'
			}));

			toolbar.add( done = Ti.UI.createLabel({
				center : {
					y : '22.5dp'
				},
				height : '45dp',
				width : '70dp',
				text : 'Done',
				color : 'white',
				font : {
					fontSize : '20dp',
					fontWeight : 'bold'
				},
				right : 0,
				textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
			}));

			pickerView.add( picker = Ti.UI.createPicker({
				type : Ti.UI.PICKER_TYPE_DATE,
				height : '200dp',
				bottom : 0,
				width : Measurement.convert(300)
			}));
		})();
	}

	container.addEventListener('click', function() {
		if (Ti.Platform.name === 'android') {
			datePicker.showDatePickerDialog({
				title : 'Birthday',
				value : birthday.value,
				callback : function(e) {
					if (!e.cancel) {
						birthday.value = e.value;
						birthday.text = formatBirthday(birthday.value);
					}
				}
			});
		} else {
			pickerView.show();
			done.addEventListener('click', function() {
				birthday.value = picker.value;
				birthday.text = formatBirthday(birthday.value);
				pickerView.hide();
			});
		}
	});

	contentDrawLine();
})();

(function() {
	content.add(Ti.UI.createLabel({
		top : '10dp',
		left : '20dp',
		right : '20dp',
		height : Ti.UI.SIZE,
		text : 'Jio me because',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	content.add( quote = Ti.UI.createTextArea({
		top : '10dp',
		left : '20dp',
		right : '20dp',
		height : '100dp',
		font : {
			fontSize : '20dp'
		},
		color : 'black',
		backgroundColor : 'white'
	}));

	content.add(Ti.UI.createView({
		top : '10dp',
		height : 0
	}));

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '60dp'
	}));

	container.add(Ti.UI.createLabel({
		left : '20dp',
		height : Ti.UI.SIZE,
		text : 'Email',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	container.add( email = Ti.UI.createLabel({
		left : '100dp',
		right : '50dp',
		height : Ti.UI.SIZE,
		color : 'black',
		backgroundColor : 'transparent',
		bubbleParent : false,
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	container.add( emailVerified = Ti.UI.createImageView({
		right : '20dp',
		width : '20dp',
		height : '20dp'
	}));

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '60dp'
	}));

	container.add(Ti.UI.createLabel({
		left : '20dp',
		height : Ti.UI.SIZE,
		text : 'Phone',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	container.add( phone = Ti.UI.createLabel({
		left : '100dp',
		right : '50dp',
		height : Ti.UI.SIZE,
		color : 'black',
		backgroundColor : 'transparent',
		bubbleParent : false,
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	container.add( phoneVerified = Ti.UI.createImageView({
		right : '20dp',
		width : '20dp',
		height : '20dp'
	}));

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '60dp'
	}));

	container.add(Ti.UI.createLabel({
		left : '20dp',
		height : Ti.UI.SIZE,
		text : 'Facebook',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	container.add( facebook = Ti.UI.createLabel({
		left : '100dp',
		right : '20dp',
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent',
		bubbleParent : false,
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '60dp'
	}));

	container.add(Ti.UI.createLabel({
		left : '20dp',
		height : Ti.UI.SIZE,
		text : 'Username',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	container.add( username = Ti.UI.createLabel({
		left : '100dp',
		right : '20dp',
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent',
		bubbleParent : false,
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '60dp'
	}));

	container.add(Ti.UI.createLabel({
		left : '20dp',
		height : Ti.UI.SIZE,
		text : 'Password',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	}));

	container.add( password = Ti.UI.createLabel({
		left : '100dp',
		right : '20dp',
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent',
		bubbleParent : false,
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	contentDrawLine();
})();

content.add(Ti.UI.createView({
	top : '45dp',
	height : 0
}));

/*
 * Public Properties
 */
exports.view = view;

/*
 * Private Methods
 */
function contentDrawLine() {
	content.add(Ti.UI.createView({
		height : '1dp',
		backgroundColor : '#D4D4D4'
	}));
};

/*
 * Public Methods
 */
exports.createUsername = function(username, password) {
	Account.user.username = username.value;
	Account.user.password = password.value;
};

exports.changePassword = function(password) {
	Account.user.password = password.value;
};

/*
 * Events
 */
profilePhoto.addEventListener('click', function() {
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

		profilePhoto.image = _userPhoto;
	}

	optionDialog = Ti.UI.createOptionDialog({
		cancel : 2,
		options : ['Get from camera', 'Get from gallery', 'Cancel'],
		selectedIndex : 0,
		title : 'Change profile picture'
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
			break;
		}
	});

	optionDialog.show();
});

view.addEventListener('show', function() {
	profilePhoto.image = Data.url + '/picture/getUserProfile/' + Account.user.id;
	name.value = Account.user.name;
	gender.text = Account.user.gender;

	birthday.value = readMysqlDate(Account.user.birthday);
	birthday.text = formatBirthday(birthday.value);

	quote.value = Account.user.quote;

	if (Account.user.email_verified === '1') {
		emailVerified.image = '/images/verified.png';
	} else {
		emailVerified.image = '/images/not-verified.png';
	}

	if (Account.user.email) {
		email.text = Account.user.email;
		email.color = 'black';
	} else {
		email.text = 'N/A';
		email.color = '#AAAAAA';
	}

	if (Account.user.phone_verified === '1') {
		phoneVerified.image = '/images/verified.png';
	} else {
		phoneVerified.image = '/images/not-verified.png';
	}

	if (Account.user.phone) {
		phone.text = Account.user.phone;
		phone.color = 'black';
	} else {
		phone.text = 'N/A';
		phone.color = '#AAAAAA';
	}

	if (Account.user.fbuid !== '') {
		facebook.text = 'Connected';
		facebook.color = 'black';
	} else {
		facebook.text = 'Link';
		facebook.color = 'blue';
	}

	if (Account.user.username) {
		username.text = Account.user.username;
		username.color = 'black';
		password.text = 'Change Password';
		password.color = 'blue';
	} else {
		username.text = 'Create';
		username.color = 'blue';

		password.text = 'Create Username';
		password.color = '#AAAAAA';
	}

	username.addEventListener('click', function() {
		Win.show(ProfileSignupPresenter, Win.FLY_RIGHT);
	});

	password.addEventListener('click', function() {
		if (Account.user.username) {
			Win.show(ChangePasswordPresenter, Win.FLY_RIGHT);
		}
	});
});

view.addEventListener('back', function() {
	Win.hide(exports, Win.FLY_RIGHT);

	_userPhoto = null;
});

backButton.addEventListener('click', function() {
	view.fireEvent('back');
});

/*
 * Initialize
 */
Win.addView(exports);
BottomBar.setup(exports);
LaunchingLoadProgress.tick();

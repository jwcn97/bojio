var view;
var backButton;
var scrollview;
var dateLabel;
var toolbar;
var upload;
var input;
var send;
var bubble;
var pictureIndex = 0;

view = Ti.UI.createView({
	width : Measurement.convert(320),
	zIndex : WinOrder.chat
});

(function() {
	var navbar;
	var background;

	view.add( background = Ti.UI.createView({
		backgroundColor : 'black',
		opacity : 0.8
	}));

	view.add( navbar = Ti.UI.createView({
		top : 0,
		height : '44dp',
		backgroundColor : '#FFC800',
		bubbleParent : false
	}));

	navbar.add(Ti.UI.createLabel({
		height : '44dp',
		text : 'Chat',
		font : {
			fontSize : '20dp',
			fontWeight : 'bold'
		},
		color : 'white'
	}));

	navbar.add( backButton = Ti.UI.createImageView({
		left : 0,
		height : '44dp',
		image : '/images/navbar-back.png'
	}));
})();

/*
 * toolbar
 */
view.add( toolbar = Ti.UI.createView({
	bottom : 0,
	height : Ti.UI.SIZE,
	width : Ti.UI.FILL,
	backgroundColor : '#EEEEEE',
	bubbleParent : false,
	zIndex : 100
}));

toolbar.add( upload = Ti.UI.createView({
	left : 0,
	bottom : 0,
	width : '50dp',
	height : '45dp'
}));

upload.add(Ti.UI.createImageView({
	center : {
		x : '25dp',
		y : '22.5dp'
	},
	height : '25dp',
	image : '/images/upload.png'
}));

toolbar.add( input = Ti.UI.createTextArea({
	top : '5dp',
	bottom : '5dp',
	left : '50dp',
	right : '60dp',
	height : Ti.UI.SIZE,
	borderWidth : '1dp',
	borderColor : '#BBBBBB',
	borderRadius : '5dp',
	backgroundColor : 'white',
	suppressReturn : false,
	bubbleParent : false,
	font : {
		fontSize : '18dp'
	},
	softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null,
	returnKeyType : Titanium.UI.RETURNKEY_RETURN,
	enableReturnKey : true
}));

toolbar.add( send = Ti.UI.createLabel({
	right : 0,
	width : '60dp',
	bottom : 0,
	height : '45dp',
	text : 'Send',
	color : '#0083FE',
	font : {
		fontSize : '18dp',
		fontWeight : 'bold'
	},
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
}));

input.addEventListener('change', function() {
	if (input.rect.height > 139) {
		toolbar.height = '150dp';
	} else {
		toolbar.height = Ti.UI.SIZE;
	}
});

view.add( scrollview = Ti.UI.createScrollView({
	top : '44dp',
	bottom : '53dp',
	layout : 'vertical'
}));

/*
 * Public Properties
 */
exports.view = view;

/*
 * Private Methods
 */
function createDateLabel(currentReadDate) {
	var dateBubble;
	
	scrollview.add( dateBubble = Ti.UI.createView({
		top: '5dp',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		bottom : '5dp',
		backgroundColor : '#89A6B3',
		borderRadius : '10dp'
	}));
	
	dateBubble.add( dateLabel = Ti.UI.createLabel({
		top : '4dp',
		bottom : '4dp',
		left : '10dp',
		right : '10dp',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		font : {
			fontSize : '14dp'
		},
		text : currentReadDate
	}));
}

function insertBubble() {
	var container;
	var currentDate = (new Date).getDate();
	
	if (scrollview.children.length > 0) {
		if (currentDate !== scrollview.children[scrollview.children.length - 1].value) {
			createDateLabel(readChatDate(new Date));
		}
	} else {
		createDateLabel(readChatDate(new Date));
	}
	
	scrollview.add( container = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : '250dp',
		right : 0,
		value : (new Date).getDate()
	}));

	container.add( bubble = Ti.UI.createView({
		top : '2dp',
		right : '15dp',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		borderRadius : '7dp',
		backgroundColor : '#1E76CE'
	}));

	bubble.add(Ti.UI.createLabel({
		bottom : '3dp',
		right : '5dp',
		font : {
			fontSize : '12dp'
		},
		color : 'yellow',
		text : readChatTime(new Date())
	}));

	container.add(Ti.UI.createImageView({
		bottom : '3dp',
		right : '8dp',
		width : '10dp',
		image : '/images/side-triangle.png'
	}));
}

/*
 * Events
 */
upload.addEventListener('click', function() {
	var optionDialog;

	function uploadPhoto(media) {
		var picture;
		var editedPicture;

		insertBubble();

		if (media.height > media.width) {
			editedPicture = media.imageAsResized(336, media.height / media.width * 336).imageAsCropped({
				width : 336,
				height : 336,
				x : 0,
				y : (media.height / media.width - 1) * 168
			});
		} else {
			editedPicture = media;
		}

		bubble.add( picture = Ti.UI.createImageView({
			top : '4dp',
			bottom : '22dp',
			left : '4dp',
			right : '4dp',
			height : Ti.UI.SIZE,
			width : '210dp',
			borderRadius : '7dp',
			image : editedPicture
		}));

		ScrollableViewPresenter.addPhoto(media);

		(function(index) {
			picture.addEventListener('click', function() {
				Win.show(ScrollableViewPresenter, Win.FADE);
				ScrollableViewPresenter.displayCurrentPicture(index);
			});
		})(pictureIndex);

		pictureIndex++;
	}

	optionDialog = Ti.UI.createOptionDialog({
		cancel : 4,
		options : ['Get from camera', 'Get from gallery', 'Share Location', 'Share Contact', 'Cancel'],
		selectedIndex : 0
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
					uploadPhoto(e.media);
					setTimeout(function() {
						scrollview.scrollToBottom();
					}, 60);
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
					uploadPhoto(e.media);
					setTimeout(function() {
						scrollview.scrollToBottom();
					}, 60);
				}
			});
			break;
		case 2:
			//Location
			Ti.Platform.openURL('maps://');
			break;
		case 3:
			//Contact
			break;
		case 4:
			//Cancel
			break;
		}
	});

	optionDialog.show();
});

input.addEventListener('focus', function() {
	view.bottom = '216dp';
});

input.addEventListener('blur', function() {
	view.bottom = 0;
});

view.addEventListener('click', function() {
	input.blur();
	input.fireEvent('blur');
});

send.addEventListener('click', function() {
	if (input.value !== '') {
		var message;

		insertBubble();

		bubble.add( message = Ti.UI.createLabel({
			height : Ti.UI.SIZE,
			width : Ti.UI.SIZE,
			left : '10dp',
			right : '10dp',
			top : '5dp',
			bottom : '5dp',
			text : input.value,
			color : 'white',
			font : {
				fontSize : '18dp'
			}
		}));

		if (message.text.length < 14) {
			message.right = '80dp';
		} else {
			message.bottom = '22dp';
		}

		input.value = '';
		input.height = Ti.UI.SIZE;
		toolbar.height = Ti.UI.SIZE;
		scrollview.scrollToBottom();
	}
});

view.addEventListener('back', function() {
	Win.hide(exports, Win.FADE);
});

backButton.addEventListener('click', function() {
	view.fireEvent('back');
});

/*
 * Initialize
 */
Win.addView(exports);
LaunchingLoadProgress.tick();

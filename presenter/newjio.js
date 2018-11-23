var view;
var backButton;
var pageTitle;
var profilePicture;
var content;
var newLocation;
var selectLocation;
var info;
var description;
var chineseName;
var englishName;
var date;
var day;
var time;
var utc;
var calender;
var friendsList;
var addFriends;
var removeFriends;
var actionButtonRow;
var submitButton;
var cancelButton;
var deleteButton;

view = Ti.UI.createView({
	backgroundColor : '#F6F6F6',
	width : Measurement.convert(320),
	zIndex : WinOrder.newjio
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

view.add( pageTitle = Ti.UI.createLabel({
	top : '44dp',
	left : '10dp',
	height : '30dp',
	text : 'A new JIO',
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
		height : Ti.UI.SIZE,
		layout : 'vertical'
	}));

	(function() {
		container.add( newLocation = Ti.UI.createImageView({
			width : '300dp',
			height : '200dp',
			image : '/images/food1.jpg'
		}));

		newLocation.add( selectLocation = Ti.UI.createLabel({
			left : '7dp',
			right : '7dp',
			bottom : '7dp',
			height : '35dp',
			borderRadius : '5dp',
			text : 'Select Location',
			textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
			color : 'white',
			backgroundColor : 'green',
			font : {
				fontSize : '20dp'
			},
			bubbleParent : false
		}));
	})();

	(function() {
		container.add( info = Ti.UI.createView({
			height : Ti.UI.SIZE
		}));

		info.add( chineseNameContainer = Ti.UI.createView({
			top : 0,
			left : '10dp',
			right : '80dp',
			height : '50dp',
			bubbleParent : false
		}));

		chineseNameContainer.add( chineseName = Ti.UI.createTextField({
			width : Ti.UI.FILL,
			height : Ti.UI.SIZE,
			color : 'black',
			backgroundColor : 'transparent',
			hintText : '(中文店名)',
			hintTextColor : '#CCCCCC',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
		}));

		chineseNameContainer.addEventListener('click', function() {
			chineseName.focus();
		});

		info.add( englishNameContainer = Ti.UI.createView({
			top : '50dp',
			left : '10dp',
			right : '80dp',
			height : '50dp',
			bubbleParent : false
		}));

		englishNameContainer.add( englishName = Ti.UI.createTextField({
			width : Ti.UI.FILL,
			height : Ti.UI.SIZE,
			color : 'black',
			backgroundColor : 'transparent',
			hintText : '(English retails name)',
			hintTextColor : '#CCCCCC',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
		}));

		englishNameContainer.addEventListener('click', function() {
			englishName.focus();
		});
	})();

	contentDrawLine();
})();

(function() {
	var container;
	var dateContainer;
	var timeContainer;
	var datePicker;
	var timePicker;

	content.add( container = Ti.UI.createView({
		height : Ti.UI.SIZE,
	}));

	container.add(Ti.UI.createLabel({
		top : 0,
		left : '10dp',
		height : '45dp',
		text : 'Select Time',
		font : {
			fontSize : '22dp'
		},
		color : '#5E5E61'
	}));

	container.add( calender = Ti.UI.createLabel({
		top : 0,
		right : '10dp',
		height : '45dp',
		text : 'Calendar Link',
		color : 'blue',
		font : {
			fontSize : '18dp'
		}
	}));

	(function() {
		container.add( dateContainer = Ti.UI.createView({
			top : '52dp',
			left : '15dp',
			right : '10dp',
			height : '50dp'
		}));

		dateContainer.add(Ti.UI.createImageView({
			left : 0,
			width : '30dp',
			height : '30dp',
			image : '/images/date.png'
		}));

		dateContainer.add( date = Ti.UI.createTextField({
			left : '45dp',
			right : '90dp',
			height : Ti.UI.SIZE,
			hintText : 'Insert Date',
			hintTextColor : '#CCCCCC',
			backgroundColor : 'transparent',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			editable : false
		}));

		dateContainer.add( day = Ti.UI.createTextField({
			right : 0,
			height : Ti.UI.SIZE,
			color : '#AAAAAA',
			backgroundColor : 'transparent',
			textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
			font : {
				fontSize : '18dp'
			},
			editable : false
		}));

		if (Ti.Platform.name === 'android') {
			dateContainer.add( datePicker = Ti.UI.createPicker({
				type : Ti.UI.PICKER_TYPE_DATE,
				visible : false
			}));
		}
	})();

	dateContainer.addEventListener('click', function() {
		if (Ti.Platform.name === 'android') {
			datePicker.showDatePickerDialog({
				title : 'Date',
				callback : function(e) {
					if (!e.cancel) {
						date.value = formatBirthday(e.value);
						day.value = readDay(e.value);
					}
				}
			});
		} else {
			Win.show(PickerPresenter);
		}
	});

	(function() {
		container.add( timeContainer = Ti.UI.createView({
			top : '107dp',
			left : '15dp',
			right : '10dp',
			height : '50dp'
		}));

		timeContainer.add(Ti.UI.createImageView({
			left : 0,
			width : '30dp',
			height : '30dp',
			image : '/images/time.png'
		}));

		timeContainer.add( time = Ti.UI.createTextField({
			left : '45dp',
			right : '90dp',
			height : Ti.UI.SIZE,
			hintText : 'Insert Time',
			hintTextColor : '#CCCCCC',
			backgroundColor : 'transparent',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			editable : false
		}));

		timeContainer.add( utc = Ti.UI.createTextField({
			right : 0,
			height : Ti.UI.FILL,
			color : '#AAAAAA',
			backgroundColor : 'transparent',
			textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
			font : {
				fontSize : '18dp'
			},
			editable : false
		}));

		if (Ti.Platform.name === 'android') {
			timeContainer.add( timePicker = Ti.UI.createPicker({
				type : Ti.UI.PICKER_TYPE_TIME,
				visible : false
			}));
		}
	})();

	timeContainer.addEventListener('click', function() {
		if (Ti.Platform.name === 'android') {
			timePicker.showTimePickerDialog({
				title : 'Time',
				callback : function(e) {
					if (!e.cancel) {
						time.value = readTime(e.value);
						utc.value = readUtc(e.value);
					}
				}
			});
		} else {
			dateContainer.fireEvent('click');
		}
	});

	container.add(Ti.UI.createLabel({
		top : '175dp',
		left : '20dp',
		font : {
			fontSize : '15dp',
			fontStyle : 'italic'
		},
		text : '*Ensure no multiple Jio at the same time.'
	}));

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '150dp',
		layout : 'vertical'
	}));

	container.add(Ti.UI.createLabel({
		top : '10dp',
		left : '10dp',
		right : '20dp',
		text : 'Description',
		font : {
			fontSize : '22dp'
		},
		color : '#5E5E61'
	}));

	container.add( description = Ti.UI.createTextArea({
		top : '4dp',
		left : '25dp',
		right : '20dp',
		height : '100dp',
		backgroundColor : 'white',
		font : {
			fontSize : '18dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	description.addEventListener('click', function() {
		description.focus();
	});

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : Ti.UI.SIZE
	}));

	container.add(Ti.UI.createLabel({
		center : {
			y : '30dp'
		},
		left : '10dp',
		width : Ti.UI.SIZE,
		text : 'Invite Friends',
		font : {
			fontSize : '22dp'
		},
		color : '#5E5E61'
	}));

	container.add( addFriends = Ti.UI.createImageView({
		left : '160dp',
		center : {
			y : '30dp'
		},
		height : '45dp',
		image : '/images/add-friends.png'
	}));

	container.add( friendsList = Ti.UI.createView({
		top : '55dp',
		left : 0,
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		layout : 'horizontal'
	}));

	friendsList.add( profilePicture = Ti.UI.createImageView({
		left : '10dp',
		top : '10dp',
		height : '65dp',
		borderRadius : '32.5dp',
		borderColor : 'yellow',
		borderWidth : '2dp'
	}));
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		layout : 'vertical',
		height : '200dp'
	}));

	container.add( actionButtonRow = Ti.UI.createView({
		top : '50dp',
		height : '100dp',
	}));

	actionButtonRow.add( cancelButton = Ti.UI.createLabel({
		top : 0,
		right : Measurement.convert(110),
		width : Measurement.convert(90),
		height : '35dp',
		text : 'Cancel',
		font : {
			fontSize : '20dp',
			fontStyle : 'italic'
		},
		color : 'white',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : '#D3D5D6',
		borderRadius : '5dp'
	}));

	actionButtonRow.add( submitButton = Ti.UI.createLabel({
		top : 0,
		right : Measurement.convert(10),
		width : Measurement.convert(90),
		height : '35dp',
		text : 'Submit',
		font : {
			fontSize : '20dp',
			fontStyle : 'italic'
		},
		color : 'white',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : '#FFC800',
		borderRadius : '5dp'
	}));

	actionButtonRow.add( deleteButton = Ti.UI.createLabel({
		top : '45dp',
		right : Measurement.convert(10),
		width : Measurement.convert(90),
		height : '35dp',
		text : 'Delete',
		font : {
			fontSize : '20dp',
			fontStyle : 'italic'
		},
		color : 'white',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : '#7E7E7E',
		borderRadius : '5dp',
		visible : false
	}));
})();

/*
 * Public Properties
 */
exports.view = view;

/*
 * Private Methods
 */
function contentDrawLine() {
	content.add(Ti.UI.createView({
		top : '5dp',
		height : '1dp',
		backgroundColor : '#D4D4D4'
	}));
};

function removeData() {
	newLocation.image = '/images/food1.jpg';
	newLocation.width = '300dp';
	newLocation.height = '200dp';
	selectLocation.text = 'Select Location';
	selectLocation.backgroundColor = 'green';
	chineseName.value = '';
	englishName.value = '';
	time.value = '';
	date.value = '';
	utc.value = '';
	day.value = '';
	description.value = '';
	if (friendsList.children.length > 1) {
		friendsList.removeAllChildren();
		friendsList.add( profilePicture = Ti.UI.createImageView({
			left : '10dp',
			top : '10dp',
			height : '65dp',
			borderRadius : '32.5dp',
			borderColor : 'yellow',
			borderWidth : '2dp'
		}));
		view.fireEvent('show');
	}
}

/*
 * Events
 */
view.addEventListener('show', function() {
	profilePicture.image = Data.url + '/picture/getUserProfile/' + Account.user.id;
});

newLocation.addEventListener('click', function() {
	Win.show(PictureViewerPresenter, Win.FADE);
	PictureViewerPresenter.getPhoto(newLocation);
});

selectLocation.addEventListener('click', function() {
	var optionDialog;

	function updatePhoto(media) {

		if (media.width < media.height) {
			newLocation.width = Ti.UI.SIZE;
			newLocation.height = '300dp';
		} else {
			newLocation.height = Ti.UI.SIZE;
			newLocation.width = '300dp';
		}

		newLocation.image = media;
	}

	optionDialog = Ti.UI.createOptionDialog({
		cancel : 3,
		options : ['Get from list', 'Get from camera', 'Get from gallery', 'Cancel'],
		selectedIndex : 0,
		title : 'Choose Location'
	});

	optionDialog.addEventListener('click', function(e) {
		switch (e.index) {
		case 0:
			//Restaurant List
			Win.show(SearchPresenter);
			Win.hide(NewjioPresenter, Win.FLY_RIGHT);
			Win.hide(RetailProfilePresenter, Win.FLY_RIGHT);
			Win.hide(SubmitNewPlacePresenter, Win.FLY_RIGHT);
			break;
		case 1:
			//Camera
			Ti.Media.showCamera({
				error : function(e) {
					alert(e.code + ': ' + e.error);
				},
				mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
				success : function(e) {
					updatePhoto(e.media);
					selectLocation.text = 'Change Location';
				}
			});
			break;
		case 2:
			//Gallery
			Ti.Media.openPhotoGallery({
				error : function(e) {
					alert(e.code + ': ' + e.error);
				},
				mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
				success : function(e) {
					updatePhoto(e.media);
					selectLocation.text = 'Change Location';
				}
			});
			break;
		case 3:
			//Cancel
			break;
		}
	});

	optionDialog.show();
});

chineseName.addEventListener('return', function() {
	englishName.focus();
});

calender.addEventListener('click', function() {
	Ti.Platform.openURL('CALSHOW://');
});

addFriends.addEventListener('click', function() {
	friendsList.add(Ti.UI.createImageView({
		left : '10dp',
		top : '10dp',
		height : '65dp',
		borderRadius : '32.5dp',
		image : '/images/profile/0.jpg'
	}));
});

friendsList.addEventListener('click', function(e) {
	if (e.source.apiName === 'Ti.UI.ImageView' && e.source.borderColor !== 'yellow') {
		var optionDialog;

		optionDialog = Ti.UI.createOptionDialog({
			cancel : 2,
			options : ['Yes', 'No', 'Cancel'],
			title : 'Remove friend from list?'
		});

		optionDialog.addEventListener('click', function(q) {
			switch(q.index) {
			case 0:
				friendsList.remove(e.source);
				break;
			case 1:
				optionDialog.hide();
				break;
			}
		});

		optionDialog.show();
	}
});

cancelButton.addEventListener('click', function() {
	var optionDialog;

	optionDialog = Ti.UI.createOptionDialog({
		cancel : 2,
		options : ['Yes', 'No', 'Cancel'],
		title : 'Are you sure you want to cancel?'
	});

	optionDialog.addEventListener('click', function(e) {
		switch(e.index) {
		case 0:
			removeData();
			break;
		case 1:
			optionDialog.hide();
			break;
		}
	});

	optionDialog.show();
});

view.addEventListener('back', function() {
	Win.hide(exports, Win.FLY_RIGHT);
});

backButton.addEventListener('click', function() {
	view.fireEvent('back');
});

/*
 * Public Methods
 */
exports.newjio = function(picture, chinese, english) {
	newLocation.image = picture.image;
	newLocation.width = picture.width;
	newLocation.height = picture.height;
	chineseName.value = chinese.text;
	englishName.value = english.text;
	selectLocation.text = 'Change Location';
};

exports.editJio = function(picture, chinese, english, dateToEdit, timeToEdit, descriptionToEdit) {
	pageTitle.text = 'Edit Your JIO';
	newLocation.image = picture.image;
	newLocation.width = picture.width;
	newLocation.height = picture.height;
	selectLocation.text = 'Change Location';
	selectLocation.backgroundColor = '#FFC800';
	chineseName.value = chinese.text;
	englishName.value = english.text;
	date.value = dateToEdit.text;
	time.value = timeToEdit.text;
	description.value = descriptionToEdit.text;
	submitButton.text = 'Save';
	deleteButton.visible = true;
};

exports.jioDate = function(picker) {
	date.value = formatBirthday(picker.value);
	day.value = readDay(picker.value);
	time.value = readTime(picker.value);
	utc.value = readUtc(picker.value);
};

/*
 * Initialize
 */
Win.addView(exports);
BottomBar.setup(exports);
LaunchingLoadProgress.tick();

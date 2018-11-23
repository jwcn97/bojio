var view;
var navbar;
var backButton;
var editButton;
var content;
var picture;
var chineseName;
var englishName;
var date;
var time;
var description;
var friendsList;
var profilePhoto;
var checkIn;
var options;
var attending;
var notAttending;
var chat;

view = Ti.UI.createView({
	backgroundColor : '#F6F6F6',
	width : Measurement.convert(320),
	zIndex : WinOrder.jio
});

(function() {
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

	navbar.add( editButton = Ti.UI.createLabel({
		right : '10dp',
		height : '44dp',
		width : '100dp',
		text : 'edit',
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		color : 'white',
		font : {
			fontSize : '20dp',
			fontWeight : 'bold'
		}
	}));
})();

view.add(Ti.UI.createLabel({
	top : '44dp',
	left : '10dp',
	height : '30dp',
	text : 'This JIO is created on ',
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

	content.add( picture = Ti.UI.createImageView({
		top : 0,
		height : '200dp',
		width : '300dp',
		image : '/images/food1.jpg'
	}));

	content.add( container = Ti.UI.createView({
		height : '155dp'
	}));

	container.add( chineseName = Ti.UI.createLabel({
		top : 0,
		left : '10dp',
		right : '80dp',
		height : '30dp',
		color : '#7E7E7E',
		backgroundColor : 'transparent',
		text : '中文店名',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : '18dp'
		},
	}));

	container.add( englishName = Ti.UI.createLabel({
		top : '30dp',
		left : '10dp',
		right : '80dp',
		height : '30dp',
		color : '#7E7E7E',
		backgroundColor : 'transparent',
		text : 'English Retails Name',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : '18dp'
		},
	}));

	container.add(Ti.UI.createImageView({
		center : {
			y : '30dp'
		},
		right : '15dp',
		height : '25dp',
		image : '/images/experience.png'
	}));

	container.add( date = Ti.UI.createLabel({
		top : '60dp',
		left : '15dp',
		height : '35dp',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		text : 'dd/mm/yyyy'
	}));

	container.add( time = Ti.UI.createLabel({
		top : '60dp',
		left : '120dp',
		height : '35dp',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		text : 'tt'
	}));

	container.add( description = Ti.UI.createLabel({
		top : '95dp',
		left : '15dp',
		right : '20dp',
		height : '60dp',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		text : 'description'
	}));

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		layout : 'vertical',
		height : Ti.UI.SIZE
	}));

	container.add( friendsList = Ti.UI.createView({
		top : '10dp',
		left : '10dp',
		right : '10dp',
		layout : 'horizontal',
		height : Ti.UI.SIZE
	}));

	friendsList.add( profilePhoto = Ti.UI.createImageView({
		height : '80dp',
		borderRadius : '40dp',
		borderColor : 'yellow',
		borderWidth : '2dp',
		backgroundColor : '#CCCCCC',
	}));

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '120dp'
	}));

	container.add( checkIn = Ti.UI.createLabel({
		top : '20dp',
		left : '20dp',
		height : '35dp',
		width : '174dp',
		text : 'Check In',
		color : 'white',
		backgroundColor : '#FFC800',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		font : {
			fontSize : '20dp'
		},
		borderRadius : '5dp',
		visible : false,
		bubbleParent : false
	}));

	container.add( options = Ti.UI.createView({
		top : '20dp',
		left : '20dp',
		height : '35dp',
		width : '174dp',
		borderRadius : '5dp',
		bubbleParent : false
	}));

	options.add( attending = Ti.UI.createLabel({
		left : 0,
		width : '110dp',
		height : Ti.UI.FILL,
		text : 'Attending',
		color : 'white',
		font : {
			fontSize : '20dp'
		},
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : '#7E7E7E'
	}));

	options.add(Ti.UI.createView({
		left : '110dp',
		height : Ti.UI.FILL,
		width : '2dp',
		backgroundColor : '#F6F6F6'
	}));

	options.add( notAttending = Ti.UI.createLabel({
		right : 0,
		width : '62dp',
		height : Ti.UI.FILL,
		text : 'not',
		color : 'white',
		font : {
			fontSize : '20dp'
		},
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : '#FFC800'
	}));

	(function() {
		container.add( chat = Ti.UI.createView({
			top : '20dp',
			left : '204dp',
			height : '35dp',
			width : '90dp',
			backgroundColor : '#D3D5D6',
			borderRadius : '5dp'
		}));

		chat.add(Ti.UI.createImageView({
			left : '5dp',
			height : Ti.UI.FILL,
			image : '/images/speech-bubble.png'
		}));

		chat.add(Ti.UI.createLabel({
			right : '3dp',
			height : Ti.UI.FILL,
			font : {
				fontSize : '20dp'
			},
			color : 'white',
			text : 'Chat'
		}));
	})();
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
		top : '10dp',
		height : '1dp',
		backgroundColor : '#D4D4D4'
	}));
};

/*
 * Public Methods
 */
exports.createdJioInfo = function(restaurantImage, chinese, english, dateOfJio, timeOfJio) {
	picture.image = restaurantImage.image;
	chineseName.text = chinese.text;
	englishName.text = english.text;
	date.text = dateOfJio.text;
	time.text = timeOfJio.text;
};

exports.attendingOption = function(attendingButton, notAttendingButton) {
	attending.backgroundColor = attendingButton.backgroundColor;
	notAttending.backgroundColor = notAttendingButton.backgroundColor;
};

/*
 * Events
 */
view.addEventListener('show', function() {
	profilePhoto.image = Data.url + '/picture/getUserProfile/' + Account.user.id;
});

view.addEventListener('swipe', function(e) {
	if (e.direction === 'left') {
		checkIn.visible = true;
		options.visible = false;
		navbar.remove(editButton);
	}
});

editButton.addEventListener('click', function() {
	Win.show(NewjioPresenter, Win.FLY_RIGHT);
	NewjioPresenter.editJio(picture, chineseName, englishName, date, time, description);
});

picture.addEventListener('click', function() {
	picture.addEventListener('click', function() {
		Win.show(PictureViewerPresenter, Win.FADE);
		PictureViewerPresenter.getPhoto(picture);
	});
});

attending.addEventListener('click', function() {
	attending.backgroundColor = 'green';
	notAttending.backgroundColor = '#7E7E7E';
});

notAttending.addEventListener('click', function() {
	attending.backgroundColor = '#7E7E7E';
	notAttending.backgroundColor = '#FFC800';
});

chat.addEventListener('click', function() {
	Win.show(ChatPresenter, Win.FADE);
});

view.addEventListener('back', function() {
	Win.hide(exports, Win.FLY_RIGHT);
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

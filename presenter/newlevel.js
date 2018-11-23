var view;
var views = [];
var backButton;
var content;
var container;
var levelContainer;
var scrollableView;
var profilePicture;
var name;
var gender;
var phoneVerified;
var quote;
var lv;
var lvl;
var nextLvl;
var exp;
var _currentDisplayUserId;

view = Ti.UI.createView({
	backgroundColor : '#F4F0D6',
	zIndex : WinOrder.newLevel
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

view.add( content = Ti.UI.createScrollView({
	top : '44dp',
	bottom : '55dp',
	layout : 'vertical',
	bubbleParent : false
}));

content.add( profilePicture = Ti.UI.createImageView({
	top : '20dp',
	height : '160dp',
	width : '160dp',
	borderRadius : '80dp'
}));

(function() {
	var nameContainer;

	content.add( nameContainer = Ti.UI.createView({
		top : '5dp',
		width : Ti.UI.SIZE,
		height : '30dp',
		layout : 'horizontal'
	}));

	nameContainer.add( name = Ti.UI.createLabel({
		font : {
			fontFamily : 'AvantGarde-Demi',
			fontSize : '20dp'
		},
		color : 'black'
	}));

	nameContainer.add( gender = Ti.UI.createImageView({
		height : '30dp'
	}));

	nameContainer.add( phoneVerified = Ti.UI.createImageView({
		width : 0,
		height : '30dp',
		image : '/images/phone-verified.png'
	}));
})();

content.add( quote = Ti.UI.createLabel({
	top : '5dp',
	left : '20dp',
	right : '20dp',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontFamily : 'AvantGarde-Book',
		fontSize : '15dp'
	},
	color : 'black'
}));

(function() {
	var lvContainer;
	var expContainer;

	content.add( lvContainer = Ti.UI.createView({
		top : '5dp',
		height : Ti.UI.SIZE,
		backgroundColor : '#FEF4C8',
		layout : 'vertical'
	}));

	lvContainer.add(Ti.UI.createView({
		height : '1dp',
		backgroundColor : '#FAD54A'
	}));

	lvContainer.add( lv = Ti.UI.createLabel({
		top : '5dp',
		font : {
			fontFamily : 'AvantGarde-Book',
			fontSize : '20dp'
		},
		color : 'black'
	}));

	lvContainer.add( expContainer = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : '40dp',
		layout : 'horizontal',
		top : '5dp'
	}));

	expContainer.add( exp = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		font : {
			fontFamily : 'AvantGarde-Demi',
			fontSize : '30dp'
		},
		color : '#EAC53E'
	}));

	expContainer.add(Ti.UI.createImageView({
		left : '10dp',
		height : '40dp',
		image : '/images/experience.png'
	}));

	lvContainer.add(Ti.UI.createView({
		top : '5dp',
		height : '1dp',
		backgroundColor : '#FAD54A'
	}));
})();

content.add( scrollableView = Ti.UI.createScrollableView({
	bottom : '20dp',
	showPagingControl : true
}));

//scrollable view 1
container = Ti.UI.createView({
	height : Ti.UI.FILL,
	width : Measurement.convert(320),
	layout : 'vertical',
	backgroundColor : '#F6F6F6'
});

container.add(Ti.UI.createImageView({
	top : '10dp',
	left : 0,
	right : 0,
	image : '/images/evolution.png'
}));

container.add(Ti.UI.createLabel({
	top : '10dp',
	text : 'Get higher level to join the evolution!!\n View higher ranking offer',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
}));

container.add(Ti.UI.createLabel({
	top : '15dp',
	text : 'next level',
	font : {
		fontSize : '30dp',
		fontWeight : 'bold'
	},
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
}));

container.add( nextLvl = Ti.UI.createLabel({
	top : '15dp',
	font : {
		fontSize : '40dp',
		fontStyle : 'italic'
	},
	width : Ti.UI.FILL,
	Color : '#EAC53E',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
}));

container.add( lvl = Ti.UI.createLabel({
	top : '15dp',
	font : {
		fontSize : '60dp',
		fontStyle : 'italic'
	},
	width : Ti.UI.FILL,
	Color : '#EAC53E',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
}));

views.push(container);

//scrollable view 2
levelContainer = Ti.UI.createView({
	width : Measurement.convert(320),
	backgroundColor : '#F6F6F6'
});

levelContainer.add(Ti.UI.createImageView({
	top : '50dp',
	right : Measurement.convert(20),
	width : Measurement.convert(200),
	image : '/images/levels.png'
}));

views.push(levelContainer);

//add containers into scrollable view
scrollableView.setViews(views);

/*
 * Public Properties
 */
exports.view = view;

/*
 * Events
 */
profilePicture.addEventListener('click', function() {
	if (_currentDisplayUserId === Account.user.id) {
		Win.show(ProfilePresenter, Win.FLY_RIGHT);
	}
});

view.addEventListener('show', function() {
	_currentDisplayUserId = Account.user.id;
	infoDisplay(profilePicture, name, gender, phoneVerified, quote, lv, lvl, nextLvl, exp);
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

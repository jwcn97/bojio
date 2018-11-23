var view;
var background;
var backButton;
var content;
var refresh;
var submit;
var searchBar;
var picturesTab;
var picturesTabImage;
var picturesContent;
var picture;
var listsContent;
var listsTab;
var listsTabImage;

/*
 * Private functions
 */
var showListsContent;

view = Ti.UI.createView({
	backgroundColor : '#F6F6F6',
	width : Measurement.convert(320),
	zIndex : WinOrder.search
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

view.add( searchBar = Ti.UI.createSearchBar({
	top : '44dp',
	height : '45dp',
	hintText : 'Type restaurant, cuisine, user etc',
	textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
	softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
}));

//up43h40

view.add( submit = Ti.UI.createLabel({
	top : '91dp',
	left : Measurement.convert(4),
	right : Measurement.convert(4),
	height : '37dp',
	text : 'Submit a new place',
	color : 'white',
	font : {
		fontSize : '20dp'
	},
	backgroundColor : '#FFC800',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	borderRadius : '5dp'
}));

view.add( content = Ti.UI.createScrollView({
	top : '129dp',
	bottom : '55dp',
	scrollType : 'vertical',
	layout : 'vertical',
	bubbleParent : false
}));

(function() {
	var tabControl;

	content.add( tabControl = Ti.UI.createView({
		height : Ti.UI.SIZE,
		bubbleParent : false
	}));

	tabControl.add( picturesTab = Ti.UI.createView({
		top : 0,
		left : 0,
		width : Measurement.convert(159.5),
		height : '44dp'
	}));

	picturesTab.add( picturesTabImage = Ti.UI.createImageView({
		height : '30dp',
		image : '/images/icons-active.png'
	}));

	tabControl.add(Ti.UI.createView({
		center : {
			y : '22dp'
		},
		height : '30dp',
		width : Measurement.convert(1),
		backgroundColor : '#CECECE'
	}));

	tabControl.add( listsTab = Ti.UI.createView({
		top : 0,
		right : 0,
		width : Measurement.convert(159.5),
		height : '42dp'
	}));

	listsTab.add( listsTabImage = Ti.UI.createImageView({
		height : '34dp',
		image : '/images/list-inactive.png'
	}));

	if (Ti.Platform.name === "android") {
		tabControl.add( picturesContent = Ti.UI.createScrollView({
			top : '44dp',
			left : Measurement.convert(5),
			right : Measurement.convert(5),
			bottom : 0,
			scrollType : 'vertical',
			backgroundColor : 'transparent',
			enableZoomControls : false,
			willHandleTouches : false,
			overScrollMode : Ti.UI.Android.OVER_SCROLL_NEVER
		}));
	} else {
		tabControl.add( picturesContent = Ti.UI.createScrollView({
			top : '44dp',
			left : Measurement.convert(5),
			right : Measurement.convert(5),
			bottom : 0,
			scrollType : 'vertical',
			backgroundColor : 'transparent'
		}));
	}

	if (Ti.Platform.name === "android") {
		tabControl.add( listsContent = Ti.UI.createScrollView({
			top : '44dp',
			height : Ti.UI.SIZE,
			backgroundColor : 'transparent',
			enableZoomControls : false,
			willHandleTouches : false,
			layout : 'vertical',
			overScrollMode : Ti.UI.Android.OVER_SCROLL_NEVER,
			visible : false
		}));
	} else {
		tabControl.add( listsContent = Ti.UI.createTableView({
			top : '44dp',
			bottom : 0,
			backgroundColor : 'transparent',
			visible : false
		}));
	}
})();

(function() {
	var totalPicture = 22;

	for (var j = 0; j < totalPicture; j++) {
		picturesContent.add( picture = Ti.UI.createImageView({
			center : {
				x : (Measurement.convert(310) / 6) * (1 + 2 * (j % 3)),
				y : (Measurement.convert(310) / 6) * (1 + 2 * Math.floor(j / 3)),
			},
			height : Measurement.convert(101.33),
			width : Measurement.convert(101.33),
			borderRadius : '3dp',
			image : '/images/restaurants/' + j + '.jpg'
		}));
	}

	expandHorizontal(picturesContent, 0, totalPicture);
	expandHorizontal(picturesContent, 9, totalPicture);
	expandHorizontal(picturesContent, 18, totalPicture);
	picturesContent.contentHeight = JSON.stringify(picture.center.y + (Measurement.convert(310) / 2)) + 'dp';
})();

/*
 * Private methods
 */
showListsContent = function() {
	function loop(l) {
		var container;
		var row;
		var restaurantImage;
		var infoList;
		var chineseName;
		var englishName;

		row = Ti.UI.createTableViewRow({
			height : '140dp',
			selectionStyle : (Ti.Platform.name === 'iOS') ? NONE : null
		});

		row.add( container = Ti.UI.createView({
			backgroundColor : '#F6F6F6'
		}));

		container.add( restaurantImage = Ti.UI.createImageView({
			top : '10dp',
			left : '10dp',
			height : '120dp',
			width : '120dp',
			image : '/images/restaurants/' + l + '.jpg'
		}));

		container.add( infoList = Ti.UI.createView({
			top : '5dp',
			height : '120dp',
			left : '135dp',
			layout : 'vertical'
		}));

		infoList.add( chineseName = Ti.UI.createLabel({
			top : '3dp',
			left : 0,
			right : '5dp',
			height : Ti.UI.SIZE,
			color : '#7E7E7E',
			text : '中文店名 ' + l,
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
		}));

		infoList.add( englishName = Ti.UI.createLabel({
			top : '3dp',
			left : 0,
			right : '5dp',
			height : Ti.UI.SIZE,
			color : '#7E7E7E',
			text : 'English Retails Name ' + l,
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
		}));

		container.add(Ti.UI.createImageView({
			right : '10dp',
			bottom : '10dp',
			height : '25dp',
			image : '/images/experience.png'
		}));

		row.addEventListener('click', function() {
			Win.show(RetailProfilePresenter, Win.FLY_RIGHT);
			RetailProfilePresenter.memberRetailInfo(chineseName, englishName, restaurantImage);
		});

		setTimeout(function() {
			listsContent.appendRow(row);
			if (l < 20) {
				loop(l + 1);
			}
		}, 0);
	};

	listsContent.setData([]);

	loop(0);
};

/*
 * Public Properties
 */
exports.view = view;

/*
 * Events
 */
searchBar.addEventListener('focus', function() {
	view.add( background = Ti.UI.createView({
		top : '89dp',
		backgroundColor : 'black',
		opacity : 0.7
	}));

	background.addEventListener('click', function() {
		view.remove(background);
		searchBar.blur();
	});
});

searchBar.addEventListener('blur', function() {
	view.remove(background);
});

submit.addEventListener('click', function() {
	Win.show(SubmitNewPlacePresenter, Win.FLY_RIGHT);
});

listsTab.addEventListener('click', function() {
	listsTabImage.image = '/images/list-active.png';
	picturesTabImage.image = '/images/icons-inactive.png';

	listsContent.visible = true;
	picturesContent.visible = false;

	showListsContent();
});

picturesTab.addEventListener('click', function() {
	listsTabImage.image = '/images/list-inactive.png';
	picturesTabImage.image = '/images/icons-active.png';

	listsContent.visible = false;
	picturesContent.visible = true;
});

picturesContent.addEventListener('click', function(e) {
	if (e.source.apiName === 'Ti.UI.ImageView') {
		Win.show(RetailProfilePresenter, Win.FLY_RIGHT);
		RetailProfilePresenter.memberRetailInfo('', '', e.source);
	}
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

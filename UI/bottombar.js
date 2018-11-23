var openedList = [];

exports.setup = function(presenter) {
	var view = presenter.view;

	var bottomBar;
	var homeButton;
	var searchButton;
	var jioButton;
	var notificationsButton;
	var profileButton;

	view.add( bottomBar = Ti.UI.createView({
		bottom : 0,
		height : '55dp',
		width : Measurement.convert(320),
		backgroundColor : '#D3D5D6',
		zIndex : 100
	}));

	(function() {
		bottomBar.add( homeButton = Ti.UI.createView({
			left : 0,
			width : Measurement.convert(60),
			height : Ti.UI.FILL
		}));

		homeButton.add(Ti.UI.createView({
			top : 0,
			width : '40dp',
			height : '40dp',
			backgroundImage : '/images/bottom-bar-home.png'
		}));

		homeButton.add(Ti.UI.createLabel({
			center : {
				y : '47.5dp'
			},
			text : 'Home',
			color : 'white',
			font : {
				fontSize : '10dp'
			},
			textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
		}));
	})();
	
	homeButton.addEventListener('click', function() {
		Win.hide(NewLevelPresenter, Win.FLY_RIGHT);
		Win.hide(ProfilePresenter, Win.FLY_RIGHT);
		Win.hide(NotificationPresenter, Win.FLY_RIGHT);
		Win.hide(JioPresenter, Win.FLY_RIGHT);
		Win.hide(SearchPresenter, Win.FLY_RIGHT);
		Win.hide(SubmitNewPlacePresenter, Win.FLY_RIGHT);
		Win.hide(RetailProfilePresenter, Win.FLY_RIGHT);
		Win.hide(NewjioPresenter, Win.FLY_RIGHT);
	});

	(function() {
		bottomBar.add( searchButton = Ti.UI.createView({
			left : Measurement.convert(60),
			width : Measurement.convert(60),
			height : Ti.UI.FILL
		}));

		searchButton.add(Ti.UI.createView({
			top : 0,
			width : '40dp',
			height : '40dp',
			backgroundImage : '/images/bottom-bar-search.png'
		}));

		searchButton.add(Ti.UI.createLabel({
			center : {
				y : '47.5dp'
			},
			text : 'Search',
			color : 'white',
			font : {
				fontSize : '10dp'
			},
			textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
		}));
	})();

	searchButton.addEventListener('click', function() {
		Win.show(SearchPresenter, Win.FLY_RIGHT);
		Win.hide(NewjioPresenter, Win.FLY_RIGHT);
		Win.hide(RetailProfilePresenter, Win.FLY_RIGHT);
		Win.hide(SubmitNewPlacePresenter, Win.FLY_RIGHT);
	});

	view.add( jioButton = Ti.UI.createView({
		bottom : 0,
		center : {
			x : Measurement.convert(160)
		},
		width : '80dp',
		height : '80dp',
		backgroundImage : '/images/bottom-bar-jio.png',
		zIndex : 200
	}));

	jioButton.addEventListener('click', function() {
		Win.show(NewjioPresenter, Win.FLY_RIGHT);
	});

	(function() {
		bottomBar.add( notificationsButton = Ti.UI.createView({
			right : Measurement.convert(60),
			width : Measurement.convert(60),
			height : Ti.UI.FILL
		}));

		notificationsButton.add(Ti.UI.createView({
			top : 0,
			width : '40dp',
			height : '40dp',
			backgroundImage : '/images/bottom-bar-notifications.png'
		}));

		notificationsButton.add(Ti.UI.createLabel({
			center : {
				y : '47.5dp'
			},
			text : 'Notification',
			color : 'white',
			font : {
				fontSize : '10dp'
			},
			textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
		}));
	})();

	notificationsButton.addEventListener('click', function() {
		Win.show(NotificationPresenter, Win.FLY_RIGHT);
		Win.hide(JioPresenter, Win.FLY_RIGHT);
		Win.hide(SearchPresenter, Win.FLY_RIGHT);
		Win.hide(NewjioPresenter, Win.FLY_RIGHT);
		Win.hide(RetailProfilePresenter, Win.FLY_RIGHT);
		Win.hide(SubmitNewPlacePresenter, Win.FLY_RIGHT);
	});

	(function() {
		bottomBar.add( profileButton = Ti.UI.createView({
			right : 0,
			width : Measurement.convert(60),
			height : Ti.UI.FILL
		}));

		profileButton.add(Ti.UI.createView({
			top : 0,
			width : '40dp',
			height : '40dp',
			backgroundImage : '/images/bottom-bar-profile.png'
		}));

		profileButton.add(Ti.UI.createLabel({
			center : {
				y : '47.5dp'
			},
			text : 'Profile',
			color : 'white',
			font : {
				fontSize : '10dp'
			},
			textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
		}));
	})();
};

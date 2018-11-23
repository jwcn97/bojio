var view;
var backButton;
var viewArray = [];
var scrollableView;

view = Ti.UI.createView({
	zIndex : WinOrder.scrollableView
});

(function() {
	var navbar;

	view.add( navbar = Ti.UI.createView({
		top : 0,
		height : '44dp',
		backgroundColor : '#FFC800'
	}));

	navbar.add(Ti.UI.createLabel({
		height : '44dp',
		text : 'Images',
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

view.add( scrollableView = Ti.UI.createScrollableView({
	top : '44dp',
	bottom : 0
}));

/*
 * Public Properties
 */
exports.view = view;

/*
 * Public Methods
 */
exports.addPhoto = function(picture) {
	var pictureContainer;

	viewArray.push(Ti.UI.createView({
		backgroundColor : 'black'
	}));

	viewArray[viewArray.length - 1].add( pictureContainer = Ti.UI.createImageView({
		width : Measurement.convert(320),
		height : Ti.UI.SIZE
	}));

	pictureContainer.setImage(picture);
	scrollableView.setViews(viewArray);
};

exports.displayCurrentPicture = function(index) {
	scrollableView.setCurrentPage(index);
};

/*
 * Events
 */
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

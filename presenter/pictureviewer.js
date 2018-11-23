var view;
var displayPicture;

view = Ti.UI.createView({
	zIndex : WinOrder.pictureViewer,
	backgroundColor : 'black'
});

view.add( displayPicture = Ti.UI.createImageView({
	width : Ti.UI.FILL,
	height : Ti.UI.SIZE
}));

/*
 * Public Properties
 */
exports.view = view;

/*
 * Events
 */
view.addEventListener('back', function() {
	Win.hide(exports, Win.FADE);
});

view.addEventListener('click', function() {
	view.fireEvent('back');
});

/*
 * Public Methods
 */
exports.getPhoto = function(picture) {
	displayPicture.setImage(picture.image);
};

/*
 * Initialize
 */
Win.addView(exports);
LaunchingLoadProgress.tick(); 

var view;

view = Ti.UI.createView({
	zIndex : WinOrder.loading
});

view.add(Ti.UI.createView({
	backgroundColor : 'black',
	opacity : 0//.3
}));

/*
 * Public Properties
 */
exports.view = view;
exports.hidden = true;

/*
 * Initialize
 */
Win.addView(exports);
LaunchingLoadProgress.tick();

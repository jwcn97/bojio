var view;

view = Ti.UI.createView({
	zIndex : WinOrder.blocking
});

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

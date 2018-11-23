var view;
var loaded = 1;
var total = 21;
var label;

view = Ti.UI.createView({
	backgroundColor : 'white',
	zIndex : WinOrder.launchingLoadProgress
});

view.add(Ti.UI.createImageView({
	top : Measurement.convert(50),
	width : Measurement.convert(240),
	height : Measurement.convert(240),
	image : '/images/loadingLogo.png'
}));

view.add(Ti.UI.createLabel({
	top: Measurement.convert(300),
	color : '#FEAE1B',
	font : {
		fontSize : Measurement.convert(20)
	},
	text : 'Loading...'
}));

view.add( label = Ti.UI.createLabel({
	top: Measurement.convert(330),
	width : Measurement.convert(200),
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	color : '#FEAE1B',
	font : {
		fontSize : Measurement.convert(20)
	},
	text : '--/--'
}));

/*
 * Public properties
 */
exports.view = view;
exports.hidden = true;

exports.tick = function(){
	label.text = (loaded++) + '/' + total;
	
	if (loaded >= total){
		Win.hide(exports);
	}
};

/*
 * Initialize
 */
Win.addView(exports);
Win.show(exports);

var view;
var pickerView;
var toolbar;
var done;
var picker;

view = Ti.UI.createView({
	backgroundColor : 'transparent',
	width : Measurement.convert(320),
	zIndex : WinOrder.picker
});

(function() {
	view.add( pickerView = Ti.UI.createView({
		bottom : 0,
		height : '245dp',
		backgroundColor : 'white',
		bubbleParent: false
	}));

	pickerView.add( toolbar = Ti.UI.createView({
		top : 0,
		height : '45dp',
		backgroundColor : '#FFC800'
	}));

	toolbar.add( done = Ti.UI.createLabel({
		center : {
			y : '22.5dp'
		},
		height : '45dp',
		width : '70dp',
		text : 'Done',
		color : 'white',
		font : {
			fontSize : '20dp',
			fontWeight : 'bold'
		},
		right : 0,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));

	pickerView.add( picker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE_AND_TIME,
		height : '200dp',
		bottom : 0,
		width : Measurement.convert(300)
	}));
})();

/*
 * Public Properties
 */
exports.view = view;

/*
 * Events
 */
view.addEventListener('back', function() {
	Win.hide(exports);
});

done.addEventListener('click', function() {
	NewjioPresenter.jioDate(picker);
	view.fireEvent('back');
});

view.addEventListener('click', function() {
	view.fireEvent('back');
});

/*
 * Initialize
 */
Win.addView(exports);
LaunchingLoadProgress.tick();

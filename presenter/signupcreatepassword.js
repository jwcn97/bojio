var view;
var background;
var container;
var password;
var next;
var _callback;

view = Ti.UI.createView({
	zIndex : WinOrder.signupCreatePassword
});

view.add( background = Ti.UI.createView({
	backgroundColor : 'black',
	opacity : 0.7
}));

view.add( container = Ti.UI.createView({
	backgroundColor : "#CCCCCC",
	height : '170dp',
	width : '280dp',
	borderRadius : '20dp'
}));

container.add(Ti.UI.createLabel({
	top : '10dp',
	font : {
		fontSize : '22dp',
		fontWeight : 'bold'
	},
	text : 'Create Password',
	color : 'black'
}));

container.add(Ti.UI.createLabel({
	top : '80dp',
	font : {
		fontSize : '17dp'
	},
	left : '20dp',
	text : 'Enter New Password',
	color : 'black'
}));

container.add( password = Ti.UI.createTextField({
	top : '110dp',
	font : {
		fontSize : '17dp'
	},
	left : '20dp',
	color : 'black',
	backgroundColor : 'white',
	right : '70dp',
	borderRadius : '7dp',
	softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null,
	returnKeyType : Ti.UI.RETURNKEY_NEXT,
	passwordMask : true
}));

container.add( next = Ti.UI.createImageView({
	image : '/images/next-orange.png',
	height : '40dp',
	width : '40dp',
	center : {
		x : '240dp'
	},
	top : '110dp'
}));

/*
 * Events
 */
view.addEventListener('back', function() {
	Win.hide(exports);
});

view.addEventListener('show', function() {
	password.focus();
});

background.addEventListener('click', function() {
	view.fireEvent('back');
});

next.addEventListener('click', function() {
	_callback(password.value);
	Win.hide(exports);
});

password.addEventListener('return', function() {
	next.fireEvent('click');
});

/*
 * Public properties
 */
exports.view = view;

/*
 * Public methods
 */
exports.show = function(callback) {
	_callback = callback;
	password.value = "";
	Win.show(exports);
};

/*
 * Initialize
 */
Win.addView(exports);
LaunchingLoadProgress.tick();

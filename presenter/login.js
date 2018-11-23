var view;
var facebookLogin;
var webview;
var signupButton;
var loginButton;

view = Ti.UI.createView({
	backgroundColor : '#F4F0D6',
	zIndex : WinOrder.login
});

(function() {
	var container;
	var buttonContainer;

	view.add( container = Ti.UI.createView({
		height : Ti.UI.SIZE,
		layout : 'vertical'
	}));

	container.add(Ti.UI.createImageView({
		width : Measurement.convert(320),
		image : '/images/front-screen-logo.png'
	}));

	container.add( facebookLogin = Ti.UI.createImageView({
		width : Measurement.convert(260),
		image : '/images/facebook-login.png'
	}));

	container.add( webview = Ti.UI.createWebView({
		height : Ti.UI.SIZE,
		url : '/Html/Login.html',
		backgroundColor : 'transparent',
		enableZoomControls : false,
		willHandleTouches : false,
		overScrollMode : (Ti.Platform.name === 'android' ? Ti.UI.Android.OVER_SCROLL_NEVER : null)
	}));

	container.add( buttonContainer = Ti.UI.createView({
		height : '44dp'
	}));

	buttonContainer.add( signupButton = Ti.UI.createLabel({
		left : Measurement.convert(10),
		width : Measurement.convert(145),
		borderRadius : '5dp',
		backgroundColor : '#FFC800',
		color : 'white',
		text : 'Sign up',
		font : {
			fontSize : '20dp'
		},
		height : '44dp',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));

	buttonContainer.add( loginButton = Ti.UI.createLabel({
		right : Measurement.convert(10),
		width : Measurement.convert(145),
		borderRadius : '5dp',
		backgroundColor : '#FFC800',
		color : 'white',
		text : 'Log in',
		font : {
			fontSize : '20dp'
		},
		height : '44dp',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));
})();

/*
 * Public Properties
 */
exports.view = view;

/*
 * Events
 */
signupButton.addEventListener('click', function() {
	Win.show(SignupPresenter, Win.FLY_RIGHT);
});

facebookLogin.addEventListener('click', function() {
	Ti.API.info('Login.js - Facebook Login clicked');
	Account.facebookLogin();
});

loginButton.addEventListener('click', function() {
	var result = JSON.parse(webview.evalJS('getResult();'));

	if (result.username.length < 3) {
		alert('Username is too short.');
		return;
	}

	if (result.password.length < 8) {
		alert("Password must be at least 8 characters");
		return;
	}

	Network.fetch('login', '/guest/login', {
		username : result.username,
		password : result.password,
		device_id : Ti.Platform.id,
		platform_name : Ti.Platform.name
	}, function() {
		webview.reload();
	}, function(response) {
		Account.login(response.session);
	});
});

/*
 * Initialize
 */
Win.addView(exports);
LaunchingLoadProgress.tick();

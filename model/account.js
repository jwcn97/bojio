function handleFacebookLogin() {
	Network.fetch('login with Facebook', '/guest/loginWithFacebook', {
		access_token : Facebook.accessToken,
		device_id : Ti.Platform.id,
		platform_name : Ti.Platform.name
	}, null, function(response) {
		exports.login(response.session);
	});
};

Facebook.addEventListener('login', handleFacebookLogin);

Facebook.permissions = ['public_profile', 'email', 'user_birthday'];
Facebook.initialize();

exports.init = function() {
	if (Database.get('session', '') !== '') {
		Network.fetch('get user detail', '/user/getUserDetail', {
		}, null, function(response){
			exports.user = response.user;
			Win.show(HomePresenter);
		});
	}
};

exports.login = function(session) {
	Database.set('session', session);
	exports.init();
};

exports.logout = function() {
	Database.set('session', '');
};

exports.facebookLogin = function() {
	if (Facebook.loggedIn) {
		handleFacebookLogin();
	} else {
		Facebook.authorize();
	}
};

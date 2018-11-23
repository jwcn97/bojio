var view;
var cancel;
var create;
var username;
var password;
var passwordConfirm;

view = Ti.UI.createView({
	backgroundColor : '#F6F6F6',
	width : Measurement.convert(320),
	zIndex : WinOrder.profileSignup
});

(function() {
	var navbar;

	view.add( navbar = Ti.UI.createView({
		top : 0,
		height : '44dp',
		backgroundColor : '#FFC800'
	}));

	navbar.add( cancel = Ti.UI.createLabel({
		left : 0,
		height : '44dp',
		width : '80dp',
		text : 'Cancel',
		color : '#DF3A01',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));

	navbar.add( create = Ti.UI.createLabel({
		right : 0,
		height : '44dp',
		width : '70dp',
		text : 'Create',
		color : '#DF3A01',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));
})();

(function() {
	var usernameContainer;

	view.add( usernameContainer = Ti.UI.createView({
		top : '100dp',
		height : '60dp',
		backgroundColor : '#EEEEEE'
	}));

	containerDrawLine(usernameContainer);

	usernameContainer.add(Ti.UI.createLabel({
		left : '10dp',
		width : '90dp',
		backgroundColor : 'transparent',
		text : 'Username',
		font : {
			fontSize : '18dp'
		},
	}));

	usernameContainer.add( username = Ti.UI.createTextField({
		left : '110dp',
		right : '10dp',
		height : Ti.UI.SIZE,
		color : 'black',
		backgroundColor : 'transparent',
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : '18dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null,
		bubbleParent : false,
		returnKeyType : Titanium.UI.RETURNKEY_NEXT
	}));

	usernameContainer.addEventListener('click', function() {
		username.focus();
	});
})();

(function() {
	var passwordContainer;

	view.add( passwordContainer = Ti.UI.createView({
		top : '170dp',
		height : '60dp',
		backgroundColor : '#EEEEEE'
	}));

	containerDrawLine(passwordContainer);

	passwordContainer.add(Ti.UI.createLabel({
		left : '10dp',
		width : '90dp',
		backgroundColor : 'transparent',
		text : 'Password',
		font : {
			fontSize : '18dp'
		},
	}));

	passwordContainer.add( password = Ti.UI.createTextField({
		left : '110dp',
		right : '10dp',
		height : Ti.UI.SIZE,
		color : 'black',
		backgroundColor : 'transparent',
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : '18dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null,
		bubbleParent : false,
		passwordMask : true,
		returnKeyType : Titanium.UI.RETURNKEY_NEXT
	}));

	passwordContainer.addEventListener('click', function() {
		password.focus();
	});
})();

(function() {
	var passwordConfirmContainer;

	view.add( passwordConfirmContainer = Ti.UI.createView({
		top : '240dp',
		height : '60dp',
		backgroundColor : '#EEEEEE'
	}));

	containerDrawLine(passwordConfirmContainer);

	passwordConfirmContainer.add(Ti.UI.createLabel({
		left : '10dp',
		width : '90dp',
		backgroundColor : 'transparent',
		text : 'Confirm',
		font : {
			fontSize : '18dp'
		},
	}));

	passwordConfirmContainer.add( passwordConfirm = Ti.UI.createTextField({
		left : '110dp',
		right : '10dp',
		height : Ti.UI.SIZE,
		color : 'black',
		backgroundColor : 'transparent',
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : '18dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null,
		bubbleParent : false,
		passwordMask : true,
		returnKeyType : Titanium.UI.RETURNKEY_DONE
	}));

	passwordConfirmContainer.addEventListener('click', function() {
		passwordConfirm.focus();
	});
})();

/*
 * Private Methods
 */
function containerDrawLine(container) {
	container.add(Ti.UI.createView({
		top : 0,
		height : '1dp',
		backgroundColor : '#AAAAAA'
	}));
	
	container.add(Ti.UI.createView({
		bottom : 0,
		height : '1dp',
		backgroundColor : '#AAAAAA'
	}));
}

/*
 * Events
 */
view.addEventListener('back', function() {
	Win.hide(exports, Win.FLY_RIGHT);
});

cancel.addEventListener('click', function() {
	view.fireEvent('back');
	username.value = '';
	password.value = '';
	passwordConfirm.value = '';
});

create.addEventListener('click', function() {
	if (username.value === '' || password.value === '' || passwordConfirm.value === '') {
		alert('Please finish the form.');
	} else if (username.value.length < 3) {
		alert('Username is too short.');
	} else if (password.value.length < 8) {
		alert("Password must be at least 8 characters.");
	} else if (password.value !== passwordConfirm.value) {
		alert('Both password are not same, please retry.');
	} else {
		view.fireEvent('back');
		ProfilePresenter.createUsername(username, password);
		username.value = '';
		password.value = '';
		passwordConfirm.value = '';
	}
});

username.addEventListener('return', function() {
	password.focus();
});

password.addEventListener('return', function() {
	passwordConfirm.focus();
});

/*
 * Public Properties
 */
exports.view = view;

/*
 * Initialize
 */
Win.addView(exports);
LaunchingLoadProgress.tick();

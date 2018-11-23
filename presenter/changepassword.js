var view;
var cancel;
var change;
var oldPassword;
var newPassword;
var newPasswordConfirm;

view = Ti.UI.createView({
	backgroundColor : '#F6F6F6',
	width : Measurement.convert(320),
	zIndex : WinOrder.changePassword
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

	navbar.add( change = Ti.UI.createLabel({
		right : 0,
		height : '44dp',
		width : '70dp',
		text : 'Change',
		color : '#DF3A01',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));
})();

(function() {
	var oldPasswordContainer;

	view.add( oldPasswordContainer = Ti.UI.createView({
		top : '100dp',
		height : '60dp',
		backgroundColor : '#EEEEEE'
	}));

	containerDrawLine(oldPasswordContainer);

	oldPasswordContainer.add(Ti.UI.createLabel({
		left : '10dp',
		width : '90dp',
		backgroundColor : 'transparent',
		text : 'Old',
		font : {
			fontSize : '18dp'
		},
	}));

	oldPasswordContainer.add( oldPassword = Ti.UI.createTextField({
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

	oldPasswordContainer.addEventListener('click', function() {
		oldPassword.focus();
	});
})();

(function() {
	var newPasswordContainer;

	view.add( newPasswordContainer = Ti.UI.createView({
		top : '170dp',
		height : '60dp',
		backgroundColor : '#EEEEEE'
	}));

	containerDrawLine(newPasswordContainer);

	newPasswordContainer.add(Ti.UI.createLabel({
		left : '10dp',
		width : '90dp',
		backgroundColor : 'transparent',
		text : 'New',
		font : {
			fontSize : '18dp'
		},
	}));

	newPasswordContainer.add( newPassword = Ti.UI.createTextField({
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

	newPasswordContainer.addEventListener('click', function() {
		newPassword.focus();
	});
})();

(function() {
	var newPasswordConfirmContainer;

	view.add( newPasswordConfirmContainer = Ti.UI.createView({
		top : '240dp',
		height : '60dp',
		backgroundColor : '#EEEEEE'
	}));
	
	containerDrawLine(newPasswordConfirmContainer);

	newPasswordConfirmContainer.add(Ti.UI.createLabel({
		left : '10dp',
		width : '90dp',
		backgroundColor : 'transparent',
		text : 'Confirm',
		font : {
			fontSize : '18dp'
		},
	}));

	newPasswordConfirmContainer.add( newPasswordConfirm = Ti.UI.createTextField({
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

	newPasswordConfirmContainer.addEventListener('click', function() {
		newPasswordConfirm.focus();
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
	oldPassword.value = '';
	newPassword.value = '';
	newPasswordConfirm.value = '';
});

change.addEventListener('click', function() {
	if (oldPassword.value === '' || newPasswordConfirm.value === '' || newPasswordConfirm.value === '') {
		alert('Please finish the form.');
	} else if (oldPassword.value !== Account.user.password) {
		alert('Old password is incorrect, please try again.');
	} else if (newPassword.value.length < 8 || newPasswordConfirm.value.length < 8) {
		alert("Password must be at least 8 characters.");
	} else if (newPassword.value !== newPasswordConfirm.value) {
		alert('Both passwords are not same, please retry.');
	} else if (oldPassword.value === newPassword.value) {
		alert('Old Password cannot be the same as new password.');
	} else {
		view.fireEvent('back');
		ProfilePresenter.changePassword(newPassword);
		oldPassword.value = '';
		newPassword.value = '';
		newPasswordConfirm.value = '';
	}
});

oldPassword.addEventListener('return', function() {
	newPassword.focus();
});

newPassword.addEventListener('return', function() {
	newPasswordConfirm.focus();
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

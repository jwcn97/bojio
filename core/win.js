var presenterList = [];
var win;
var hiddenTextField;

/*
 * GUI
 */
win = Ti.UI.createWindow({
	exitOnClose : true,
	navBarHidden : true,
	top : (Ti.Platform.name === 'iPhone OS' && parseInt(Ti.Platform.version.split(".")[0], 10) >= 7) ? 20 : 0,
	//statusBarStyle : (Ti.Platform.name === 'iPhone OS') ? Ti.UI.iPhone.StatusBar.LIGHT_CONTENT : null,
	keepScreenOn : true
});

if (Ti.Platform.name !== 'android') {
	win.add( hiddenTextField = Ti.UI.createTextField({
		height : 0,
		width : 0
	}));
}

if (Ti.Platform.name === 'android') {
	win.fbProxy = Facebook.createActivityWorker({
		lifecycleContainer : win
	});
}

/*
 * Environment Events
 */
(function() {
	function firstTimeSetup() {
		Ti.App.removeEventListener('setup', firstTimeSetup);

		win.open();

		Ti.App.addEventListener('setup', function() {
			Ti.App.fireEvent("setup_complete");
		});
	}


	Ti.App.addEventListener('setup', firstTimeSetup);
})();

/*
 * Events
 */
(function() {
	function setupMeasurement(width, height, statusBarHeight) {
		if (width > height) {
			Ti.App.Properties.setInt('horizontalWidth', width);
			Ti.App.Properties.setInt('horizontalHeight', height - statusBarHeight);
			Ti.App.Properties.setInt('verticalWidth', height);
			Ti.App.Properties.setInt('verticalHeight', width - statusBarHeight);
		} else {
			Ti.App.Properties.setInt('horizontalWidth', height);
			Ti.App.Properties.setInt('horizontalHeight', width - statusBarHeight);
			Ti.App.Properties.setInt('verticalWidth', width);
			Ti.App.Properties.setInt('verticalHeight', height - statusBarHeight);
		}
	};

	function postlayout() {
		win.removeEventListener('postlayout', postlayout);

		if (Ti.Platform.name === 'android') {
			win.activity.actionBar.hide();

			setTimeout(function() {
				var statusBarHeight = Ti.Platform.displayCaps.platformHeight - win.rect.height;

				setupMeasurement(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight, statusBarHeight);
			}, 5000);
		}

		if (Ti.App.Properties.getBool('initialized', false)) {
			if (Ti.Platform.name === 'android') {
				var statusBarHeight = Ti.Platform.displayCaps.platformHeight - win.rect.height;

				setupMeasurement(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight, statusBarHeight);
			} else {
				setupMeasurement(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight, 20);
			}
		}

		Ti.App.fireEvent("setup_complete");
	}


	win.addEventListener('postlayout', postlayout);
})();

win.addEventListener('androidback', function(e) {
	exports.getCurrentView().fireEvent('back');
});

win.addEventListener('swipe', function(e) {
	exports.getCurrentView().fireEvent('winswipe', e);
});

/*
 * Public properties
 */
(function() {
	var i = 0;

	exports.NONE = i++;
	exports.FADE = i++;
	exports.FLY_RIGHT = i++;
	exports.FLY_RIGHT_MENU = i++;
})();

/*
 * Public Methods
 */
exports.addView = function(presenter, mode) {
	if (presenterList.indexOf(presenter) !== -1) {
		return;
	}

	presenterList.push(presenter);
	presenter.view.visible = false;

	switch(presenter.view.zIndex) {
	case WinOrder.blocking:
		presenter.view.left = 0;
		break;
	case WinOrder.launchingLoadProgres:
		presenter.view.left = 0;
		break;
	default:
		presenter.view.left = Ti.Platform.displayCaps.platformWidth - 1;
		break;
	}

	win.add(presenter.view);
};

exports.clear = function() {
	presenterList.forEach(function(presenter) {
		win.remove(presenter.view);
		presenter.view.fireEvent('dispose');
	});

	presenterList = [];
};

exports.getCurrentView = function() {
	var answer = null;
	var zIndex = null;

	presenterList.forEach(function(presenter) {
		if (presenter.view.visible === false) {
			return;
		} else if (presenter.hidden === true) {
			return;
		} else if (zIndex === null) {
			answer = presenter.view;
			zIndex = presenter.view.zIndex;
		} else if (presenter.view.zIndex !== null) {
			if (presenter.view.zIndex >= zIndex) {
				answer = presenter.view;
				zIndex = presenter.view.zIndex;
			}
		}
	});

	return answer;
};

exports.getCurrentPresenter = function() {
	var answer = null;
	var zIndex = null;

	presenterList.forEach(function(presenter) {
		if (presenter.view.visible === false) {
			return;
		} else if (presenter.hidden === true) {
			return;
		} else if (zIndex === null) {
			answer = presenter;
			zIndex = presenter.view.zIndex;
		} else if (presenter.view.zIndex !== null) {
			if (presenter.view.zIndex >= zIndex) {
				answer = presenter;
				zIndex = presenter.view.zIndex;
			}
		}
	});

	return answer;
};

exports.getOffset = function(presenter) {
	return presenter.view.convertPointToView({
		x : 0,
		y : 0
	}, win);
};

exports.hide = function(presenter, style, callback) {
	var originalCurrentView = exports.getCurrentView();

	if (presenter.view.visible === false) {
		return;
	}

	if (presenter.view.aboutToHide) {
		if (!presenter.view.aboutToHide()) {
			return;
		}
	}

	function handleHide(presenter) {
		presenter.view.visible = false;
		presenter.view.fireEvent('hide');

		if (Ti.Platform.name === 'android') {
			Ti.UI.Android.hideSoftKeyboard();
		} else {
			hiddenTextField.focus();
			hiddenTextField.blur();
		}

		if (!presenter.hidden) {
			if (exports.getCurrentView() === null) {
				return;
			} else if (originalCurrentView === exports.getCurrentView()) {
				return;
			}
			exports.getCurrentView().fireEvent('show');
		}
	}

	switch(style) {
	case exports.FADE:
		setTimeout(function() {
			presenter.view.animate(Ti.UI.createAnimation({
				opacity : 0,
				duration : 200
			}), function() {
				handleHide(presenter);
				callback && callback();
			});
		}, 50);
		break;
	case exports.FLY_RIGHT:
		presenter.view.left = 1;
		setTimeout(function() {
			presenter.view.animate(Ti.UI.createAnimation({
				left : Ti.Platform.displayCaps.platformWidth,
				duration : 200
			}), function() {
				handleHide(presenter);
				callback && callback();
			});
		}, 50);
		break;
	case exports.FLY_RIGHT_MENU:
		presenter.view.left = 1;
		setTimeout(function() {
			presenter.view.animate(Ti.UI.createAnimation({
				left : Measurement.convert(280),
				duration : 200
			}), function() {
				callback && callback();
			});
		}, 50);
		break;
	default:
		handleHide(presenter);
		break;
	}
};

exports.show = function(presenter, style, callback) {
	if (presenter.view.visible === true) {
		return;
	}

	if (exports.getCurrentView() !== null) {
		if (presenter.view.zIndex > exports.getCurrentView().zIndex) {
			if (presenter.view.aboutToBlocked) {
				if (!presenter.view.aboutToBlocked()) {
					return;
				}
			}
		}
	}

	if (presenter.view.aboutToShow) {
		if (!presenter.view.aboutToShow()) {
			return;
		}
	}

	//presenter.view.left = 0;
	presenter.view.opacity = 1;

	switch(style) {
	case exports.FADE:
		presenter.view.left = 0;
		presenter.view.opacity = 0;
		presenter.view.visible = true;
		setTimeout(function() {
			presenter.view.animate(Ti.UI.createAnimation({
				opacity : 1,
				duration : 200
			}), function() {
				if (Ti.Platform.name === 'android') {
					Ti.UI.Android.hideSoftKeyboard();
				} else {
					hiddenTextField.focus();
					hiddenTextField.blur();
				}
				presenter.view.fireEvent('show');
				callback && callback();
			});
		}, 50);
		break;
	case exports.FLY_RIGHT:
		presenter.view.left = Ti.Platform.displayCaps.platformWidth - 1;
		presenter.view.visible = true;
		setTimeout(function() {
			presenter.view.animate(Ti.UI.createAnimation({
				left : 0,
				duration : 200
			}), function() {
				if (Ti.Platform.name === 'android') {
					Ti.UI.Android.hideSoftKeyboard();
				} else {
					hiddenTextField.focus();
					hiddenTextField.blur();
				}
				presenter.view.fireEvent('show');
				callback && callback();
			});
		}, 50);
		break;
	default:
		presenter.view.left = 0;
		presenter.view.visible = true;
		if (Ti.Platform.name === 'android') {
			Ti.UI.Android.hideSoftKeyboard();
		} else {
			hiddenTextField.focus();
			hiddenTextField.blur();
		}
		presenter.view.fireEvent('show');
		callback && callback();
		break;
	}
};

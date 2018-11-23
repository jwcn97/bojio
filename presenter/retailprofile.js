var view;
var background;
var backbutton;
var content;
var picture;
var locationTab;
var telephoneTab;
var heartTab;
var newjioTab;
var heart;
var chineseName;
var englishName;
var menu;
var info;
var menuTab;
var infoTab;
var menuContent;
var infoContent;
var introduction;

view = Ti.UI.createView({
	backgroundColor : '#F6F6F6',
	width : Measurement.convert(320),
	zIndex : WinOrder.retailProfile
});

(function() {
	var navbar;

	view.add( navbar = Ti.UI.createView({
		top : 0,
		height : '44dp',
		backgroundColor : '#FFC800'
	}));

	navbar.add(Ti.UI.createImageView({
		height : '44dp',
		image : '/images/bojio-navbar-logo.png'
	}));

	navbar.add( backButton = Ti.UI.createImageView({
		left : 0,
		height : '44dp',
		image : '/images/navbar-back.png'
	}));

	navbar.add( editButton = Ti.UI.createLabel({
		right : '10dp',
		height : '44dp',
		width : '100dp',
		text : 'edit',
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		color : 'white',
		font : {
			fontSize : '20dp',
			fontWeight : 'bold'
		}
	}));
})();

(function() {
	var tabControl;

	view.add( tabControl = Ti.UI.createView({
		top : '44dp',
		height : '50dp',
		left : Measurement.convert(5),
		right : Measurement.convert(5),
	}));

	for (var i = 1; i <= 3; i++) {
		tabControl.add(Ti.UI.createView({
			height : '40dp',
			left : Measurement.convert(((310 / 4) * i) - 0.5),
			width : Measurement.convert(1),
			backgroundColor : '#CECECE'
		}));
	}

	//location tab
	tabControl.add( locationTab = Ti.UI.createView({
		left : 0,
		height : '44dp',
		width : Measurement.convert(77),
	}));

	locationTab.add(Ti.UI.createImageView({
		image : '/images/location.png',
		height : '30dp'
	}));

	//telephone tab
	tabControl.add( telephoneTab = Ti.UI.createView({
		left : Measurement.convert(78),
		height : '44dp',
		width : Measurement.convert(76.5),
	}));

	telephoneTab.add(Ti.UI.createImageView({
		image : '/images/telephone.png',
		height : '30dp'
	}));

	//heart tab
	tabControl.add( heartTab = Ti.UI.createView({
		right : Measurement.convert(78),
		height : '44dp',
		width : Measurement.convert(76.5),
	}));

	heartTab.add( heart = Ti.UI.createImageView({
		image : '/images/heart.png',
		height : '30dp'
	}));

	//newjio tab
	tabControl.add( newjioTab = Ti.UI.createView({
		right : 0,
		height : '44dp',
		width : Measurement.convert(77),
	}));

	newjioTab.add(Ti.UI.createImageView({
		image : '/images/newjio.png',
		height : '30dp'
	}));
})();

view.add( content = Ti.UI.createScrollView({
	top : '94dp',
	bottom : '55dp',
	scrollType : 'vertical',
	layout : 'vertical'
}));

content.add( picture = Ti.UI.createImageView({
	image : '/images/upload-photo.png',
	width : '300dp',
	height : '300dp',
}));

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : '75dp'
	}));

	container.add( chineseName = Ti.UI.createLabel({
		top : '5dp',
		left : '10dp',
		right : '100dp',
		height : '30dp',
		color : '#7E7E7E',
		backgroundColor : 'transparent',
		text : '中文店名',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : '20dp'
		},
	}));

	container.add( englishName = Ti.UI.createLabel({
		top : '35dp',
		left : '10dp',
		right : '100dp',
		height : '30dp',
		color : '#7E7E7E',
		backgroundColor : 'transparent',
		text : 'English Retails Name',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : '20dp'
		},
	}));

	container.add(Ti.UI.createImageView({
		center : {
			y : '35dp'
		},
		right : '10dp',
		height : '30dp',
		image : '/images/experience.png'
	}));
})();

(function() {
	var tabControl;

	content.add( tabControl = Ti.UI.createView({
		height : Ti.UI.SIZE,
	}));

	tabControl.add(Ti.UI.createView({
		top : 0,
		left : '10dp',
		right : '10dp',
		height : '1dp',
		backgroundColor : '#D4D4D4'
	}));

	tabControl.add( menuTab = Ti.UI.createView({
		top : '1dp',
		left : 0,
		width : Measurement.convert(160),
		height : '40dp'
	}));

	menuTab.add( menu = Ti.UI.createLabel({
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		text : 'MENU',
		color : '#FFC800',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		}
	}));

	tabControl.add( infoTab = Ti.UI.createView({
		top : '1dp',
		right : 0,
		width : Measurement.convert(160),
		height : '40dp'
	}));

	infoTab.add( info = Ti.UI.createLabel({
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		text : 'INFO',
		color : '#D3D5D6',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		}
	}));

	tabControl.add(Ti.UI.createView({
		top : '41dp',
		left : '10dp',
		right : '10dp',
		height : '1dp',
		backgroundColor : '#D4D4D4'
	}));

	tabControl.add( menuContent = Ti.UI.createView({
		top : '42dp',
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent',
		layout : 'vertical',
		enableZoomControls : false,
		willHandleTouches : false,
		overScrollMode : (Ti.Platform.name === 'android' ? Ti.UI.Android.OVER_SCROLL_NEVER : null),
	}));

	tabControl.add( infoContent = Ti.UI.createView({
		top : '42dp',
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent',
		layout : 'vertical',
		enableZoomControls : false,
		willHandleTouches : false,
		overScrollMode : (Ti.Platform.name === 'android' ? Ti.UI.Android.OVER_SCROLL_NEVER : null),
		visible : false
	}));
})();

/*
 * menu content
 */
(function() {
	var container;

	menuContent.add(Ti.UI.createLabel({
		left : '15dp',
		height : '40dp',
		text : 'INTRODUCTION',
		font : {
			fontSize : '17dp',
			fontWeight : 'bold'
		},
		color : '#D3D5D6',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
	}));

	menuContent.add( container = Ti.UI.createView({
		left : '25dp',
		right : '20dp',
		height : '100dp',
	}));

	container.add( introduction = Ti.UI.createLabel({
		top : 0,
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		backgroundColor : 'transparent',
		font : {
			fontSize : '18dp'
		}
	}));

	menuContent.add(Ti.UI.createLabel({
		left : '15dp',
		height : '40dp',
		text : 'MENU',
		font : {
			fontSize : '17dp',
			fontWeight : 'bold'
		},
		color : '#D3D5D6',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
	}));
})();

/*
 * info content
 */
(function() {
	var container;

	infoContent.add( container = Ti.UI.createView({
		top : '10dp',
		height : Ti.UI.SIZE,
		layout : 'vertical'
	}));

	(function() {
		var addressContainer;

		container.add( addressContainer = Ti.UI.createView({
			left : '10dp',
			right : '10dp',
			height : '50dp'
		}));

		addressContainer.add(Ti.UI.createImageView({
			left : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/address.png'
		}));

		addressContainer.add( address = Ti.UI.createLabel({
			left : '50dp',
			right : 0,
			height : Ti.UI.FILL,
			text : '',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			backgroundColor : 'transparent'
		}));
	})();

	(function() {
		var businessHoursContainer;

		container.add( businessHoursContainer = Ti.UI.createView({
			left : '10dp',
			right : '10dp',
			height : '50dp'
		}));

		businessHoursContainer.add(Ti.UI.createImageView({
			left : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/business-hours.png'
		}));

		businessHoursContainer.add( businessHours = Ti.UI.createLabel({
			left : '50dp',
			right : 0,
			height : Ti.UI.FILL,
			text : '',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			backgroundColor : 'transparent'
		}));
	})();

	(function() {
		var contactNumberContainer;

		container.add( contactNumberContainer = Ti.UI.createView({
			left : '10dp',
			right : '10dp',
			height : '50dp'
		}));

		contactNumberContainer.add(Ti.UI.createImageView({
			left : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/contact-number.png'
		}));

		contactNumberContainer.add( contactNumber = Ti.UI.createLabel({
			left : '50dp',
			right : 0,
			height : Ti.UI.FILL,
			text : '',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			backgroundColor : 'transparent'
		}));
	})();

	(function() {
		var emailAddressContainer;

		container.add( emailAddressContainer = Ti.UI.createView({
			left : '10dp',
			right : '10dp',
			height : '50dp'
		}));

		emailAddressContainer.add(Ti.UI.createImageView({
			left : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/email-address.png'
		}));

		emailAddressContainer.add( emailAddress = Ti.UI.createLabel({
			left : '50dp',
			right : 0,
			height : Ti.UI.FILL,
			text : '',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			backgroundColor : 'transparent'
		}));
	})();
})();

(function() {
	var container;

	infoContent.add( container = Ti.UI.createView({
		height : Ti.UI.SIZE,
		layout : 'vertical'
	}));

	(function() {
		var qualityContainer;

		container.add( qualityContainer = Ti.UI.createView({
			left : '10dp',
			right : '10dp',
			height : '50dp',
		}));

		qualityContainer.add(Ti.UI.createImageView({
			left : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/star.png'
		}));

		qualityContainer.add( quality = Ti.UI.createLabel({
			left : '50dp',
			right : 0,
			height : Ti.UI.FILL,
			text : '',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			backgroundColor : 'transparent'
		}));
	})();

	(function() {
		var cuisineContainer;

		container.add( cuisineContainer = Ti.UI.createView({
			left : '10dp',
			right : '10dp',
			height : '50dp',
		}));

		cuisineContainer.add(Ti.UI.createImageView({
			left : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/cuisine.png'
		}));

		cuisineContainer.add( cuisine = Ti.UI.createLabel({
			left : '50dp',
			right : 0,
			height : Ti.UI.FILL,
			text : '',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			backgroundColor : 'transparent'
		}));
	})();

	(function() {
		var PriceAndSizeContainer;

		container.add( priceAndSizeContainer = Ti.UI.createView({
			left : '10dp',
			right : '10dp',
			height : '50dp',
		}));

		(function() {
			var priceContainer;

			priceAndSizeContainer.add( priceContainer = Ti.UI.createView({
				left : 0,
				width : Measurement.convert(140),
				height : Ti.UI.SIZE
			}));

			priceContainer.add(Ti.UI.createImageView({
				left : 0,
				width : '40dp',
				height : '40dp',
				image : '/images/price.png'
			}));

			priceContainer.add( price = Ti.UI.createLabel({
				left : '50dp',
				right : 0,
				height : Ti.UI.FILL,
				text : '',
				textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
				font : {
					fontSize : '18dp'
				},
				backgroundColor : 'transparent'
			}));
		})();

		(function() {
			var sizeContainer;

			priceAndSizeContainer.add( sizeContainer = Ti.UI.createView({
				left : Measurement.convert(160),
				width : Measurement.convert(140),
				height : Ti.UI.SIZE
			}));

			sizeContainer.add(Ti.UI.createImageView({
				left : 0,
				width : '40dp',
				height : '40dp',
				image : '/images/size.png'
			}));

			sizeContainer.add( size = Ti.UI.createLabel({
				left : '50dp',
				right : 0,
				height : Ti.UI.FILL,
				text : '',
				textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
				font : {
					fontSize : '18dp'
				},
				backgroundColor : 'transparent'
			}));
		})();
	})();

	(function() {
		var wifiAndHalalContainer;

		container.add( wifiAndHalalContainer = Ti.UI.createView({
			left : '10dp',
			right : '10dp',
			height : '50dp',
		}));

		(function() {
			var wifiContainer;

			wifiAndHalalContainer.add( wifiContainer = Ti.UI.createView({
				left : 0,
				width : Measurement.convert(140),
				height : Ti.UI.SIZE
			}));

			wifiContainer.add(Ti.UI.createImageView({
				left : 0,
				width : '40dp',
				height : '40dp',
				image : '/images/wifi.png'
			}));

			wifiContainer.add( wifi = Ti.UI.createLabel({
				left : '50dp',
				right : 0,
				height : Ti.UI.FILL,
				text : '',
				textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
				font : {
					fontSize : '18dp'
				},
				backgroundColor : 'transparent'
			}));
		})();

		(function() {
			var halalContainer;

			wifiAndHalalContainer.add( halalContainer = Ti.UI.createView({
				left : Measurement.convert(160),
				width : Measurement.convert(140),
				height : Ti.UI.SIZE
			}));

			halalContainer.add(Ti.UI.createImageView({
				left : 0,
				width : '40dp',
				height : '40dp',
				image : '/images/halal.png'
			}));

			halalContainer.add( halal = Ti.UI.createLabel({
				left : '50dp',
				right : 0,
				height : Ti.UI.FILL,
				text : '',
				textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
				font : {
					fontSize : '18dp'
				},
				backgroundColor : 'transparent'
			}));
		})();
	})();

	(function() {
		var locationTypeContainer;

		container.add( locationTypeContainer = Ti.UI.createView({
			left : '10dp',
			right : '10dp',
			height : '50dp'
		}));

		locationTypeContainer.add(Ti.UI.createImageView({
			left : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/mall.png'
		}));

		locationTypeContainer.add( locationType = Ti.UI.createLabel({
			left : '50dp',
			right : 0,
			height : Ti.UI.FILL,
			text : '',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			backgroundColor : 'transparent'
		}));
	})();
})();

(function() {
	var container;
	var tagContainer;

	infoContent.add( container = Ti.UI.createView({
		bottom : '55dp',
		height : Ti.UI.SIZE,
		layout : 'vertical'
	}));

	container.add( tagContainer = Ti.UI.createView({
		left : '10dp',
		right : '10dp',
		height : '150dp'
	}));

	tagContainer.add(Ti.UI.createImageView({
		top : '5dp',
		left : 0,
		width : '40dp',
		height : '40dp',
		image : '/images/tag.png'
	}));

	tagContainer.add( tag = Ti.UI.createLabel({
		left : '50dp',
		right : 0,
		height : Ti.UI.FILL,
		text : '',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : '18dp'
		},
		backgroundColor : 'transparent'
	}));
})();

/*
 * Public Properties
 */
exports.view = view;

/*
 * Private Methods
 */
function contentDrawLine() {
	content.add(Ti.UI.createView({
		left : '20dp',
		right : '20dp',
		height : '1dp',
		backgroundColor : '#D4D4D4'
	}));
};

/*
 * Public Methods
 */
exports.memberRetailInfo = function(chinese, english, restaurantImage) {
	chineseName.text = chinese.text;
	englishName.text = english.text;
	picture.image = restaurantImage.image;
};

exports.newRetailName = function(chinese, english, restaurantImage, _introduction) {
	chineseName.text = chinese.value;
	englishName.text = english.value;
	picture.image = restaurantImage.image;
	picture.width = restaurantImage.width;
	picture.height = restaurantImage.height;
	introduction.text = _introduction.value;
};

exports.newRetailInfo = function(_address, _businessHours, _contactNumber, _emailAddress, _quality, _cuisine, _price, _size, _wifi, _halal, _locationType, _tag) {
	address.text = _address.value;
	businessHours.text = _businessHours.value;
	contactNumber.text = _contactNumber.value;
	emailAddress.text = _emailAddress.value;
	quality.text = _quality.value;
	cuisine.text = _cuisine.value;
	price.text = _price.value;
	size.text = _size.value;
	wifi.text = _wifi.value;
	halal.text = _halal.value;
	locationType.text = _locationType.value;
	tag.text = _tag.value;
};

/*
 * Events
 */
locationTab.addEventListener('click', function() {
	Ti.Platform.openURL('maps://');
});

heartTab.addEventListener('click', function() {
	if (heart.image === '/images/heart.png') {
		heart.image = '/images/heart-active.png';
	} else {
		heart.image = '/images/heart.png';
	}
});

newjioTab.addEventListener('click', function() {
	Win.show(NewjioPresenter, Win.FLY_RIGHT);
	NewjioPresenter.newjio(picture, chineseName, englishName);
});

picture.addEventListener('click', function() {
	picture.addEventListener('click', function() {
		Win.show(PictureViewerPresenter, Win.FADE);
		PictureViewerPresenter.getPhoto(picture);
	});
});

infoTab.addEventListener('click', function() {
	info.color = '#FFC800';
	menu.color = '#D3D5D6';

	infoContent.visible = true;
	menuContent.visible = false;
});

menuTab.addEventListener('click', function() {
	info.color = '#D3D5D6';
	menu.color = '#FFC800';

	infoContent.visible = false;
	menuContent.visible = true;
});

view.addEventListener('back', function() {
	Win.hide(exports, Win.FLY_RIGHT);
});

backButton.addEventListener('click', function() {
	view.fireEvent('back');
});

/*
 * Initialize
 */
Win.addView(exports);
BottomBar.setup(exports);
LaunchingLoadProgress.tick();

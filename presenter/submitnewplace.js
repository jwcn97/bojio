var view;
var backButton;
var content;
var newImage;
var chineseName;
var englishName;
var introduction;
var address;
var businessHours;
var contactNumber;
var emailAddress;
var quality;
var cuisine;
var price;
var size;
var wifi;
var halal;
var locationType;
var tag;
var cancelButton;
var submitButton;

view = Ti.UI.createView({
	backgroundColor : '#F6F6F6',
	width : Measurement.convert(320),
	zIndex : WinOrder.submitNewPlace
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
})();

view.add(Ti.UI.createLabel({
	top : '44dp',
	left : '10dp',
	height : '30dp',
	text : 'Submit a new place',
	font : {
		fontSize : '20dp',
		fontStyle : 'italic'
	},
	color : '#D3D5D6'
}));

view.add( content = Ti.UI.createScrollView({
	top : '74dp',
	bottom : '55dp',
	scrollType : 'vertical',
	layout : 'vertical',
	width : Ti.UI.FILL,
	contentWidth : Measurement.convert(320),
	bubbleParent : false
}));

(function() {
	var container;
	var imageContainer;
	var chineseNameContainer;
	var englishNameContainer;

	content.add( container = Ti.UI.createView({
		height : '400dp'
	}));

	container.add( imageContainer = Ti.UI.createView({
		top : 0,
		width : Ti.UI.FILL,
		height : '300dp'
	}));

	imageContainer.add( newImage = Ti.UI.createImageView({
		width : '300dp',
		height : '300dp',
		image : '/images/upload-photo.png'
	}));

	container.add( chineseNameContainer = Ti.UI.createView({
		top : '300dp',
		left : '15dp',
		right : '20dp',
		height : '50dp',
		bubbleParent : false
	}));

	chineseNameContainer.add( chineseName = Ti.UI.createTextField({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		color : 'black',
		backgroundColor : 'transparent',
		hintText : '(中文店名)',
		hintTextColor : '#CCCCCC',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	chineseNameContainer.addEventListener('click', function() {
		chineseName.focus();
	});

	container.add( englishNameContainer = Ti.UI.createView({
		top : '350dp',
		left : '15dp',
		right : '20dp',
		height : '50dp',
		bubbleParent : false
	}));

	englishNameContainer.add( englishName = Ti.UI.createTextField({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		color : 'black',
		backgroundColor : 'transparent',
		hintText : '(English retails name)',
		hintTextColor : '#CCCCCC',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : '20dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	englishNameContainer.addEventListener('click', function() {
		englishName.focus();
	});

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		height : Ti.UI.SIZE,
		layout : 'vertical'
	}));

	container.add(Ti.UI.createLabel({
		left : '15dp',
		height : '35dp',
		text : 'Introduction',
		font : {
			fontSize : '18dp'
		},
		color : '#5E5E61',
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
	}));

	container.add( introduction = Ti.UI.createTextArea({
		left : '25dp',
		right : '20dp',
		backgroundColor : 'white',
		height : '100dp',
		font : {
			fontSize : '18dp'
		}
	}));

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
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

		addressContainer.add( address = Ti.UI.createTextField({
			left : '50dp',
			right : 0,
			height : Ti.UI.SIZE,
			color : 'black',
			backgroundColor : 'transparent',
			hintText : '(address)',
			hintTextColor : '#CCCCCC',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null,
			bubbleParent : false
		}));

		addressContainer.addEventListener('click', function() {
			address.focus();
		});
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

		businessHoursContainer.add( businessHours = Ti.UI.createTextField({
			left : '50dp',
			right : 0,
			height : Ti.UI.SIZE,
			color : 'black',
			backgroundColor : 'transparent',
			hintText : '(business hours)',
			hintTextColor : '#CCCCCC',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null,
			bubbleParent : false
		}));

		businessHoursContainer.addEventListener('click', function() {
			businessHours.focus();
		});
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

		contactNumberContainer.add( contactNumber = Ti.UI.createTextField({
			left : '50dp',
			right : 0,
			height : Ti.UI.SIZE,
			color : 'black',
			backgroundColor : 'transparent',
			hintText : '(contact number)',
			hintTextColor : '#CCCCCC',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null,
			bubbleParent : false
		}));

		contactNumberContainer.addEventListener('click', function() {
			contactNumber.focus();
		});
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

		emailAddressContainer.add( emailAddress = Ti.UI.createTextField({
			left : '50dp',
			right : 0,
			height : Ti.UI.SIZE,
			color : 'black',
			backgroundColor : 'transparent',
			hintText : '(email address)',
			hintTextColor : '#CCCCCC',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '18dp'
			},
			softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null,
			bubbleParent : false
		}));

		emailAddressContainer.addEventListener('click', function() {
			emailAddress.focus();
		});
	})();

	contentDrawLine();
})();

(function() {
	var container;

	content.add( container = Ti.UI.createView({
		top : '10dp',
		height : Ti.UI.SIZE,
		layout : 'vertical'
	}));

	(function() {
		var qualityContainer;

		container.add( qualityContainer = Ti.UI.createView({
			top : '10dp',
			left : '10dp',
			right : '10dp',
			height : Ti.UI.SIZE
		}));

		qualityContainer.add(Ti.UI.createImageView({
			left : 0,
			top : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/star.png'
		}));

		qualityContainer.add( quality = Ti.UI.createView({
			top : '5dp',
			left : '45dp',
			right : 0,
			height : Ti.UI.SIZE,
			borderRadius : '8dp',
			borderWidth : '1dp',
			borderColor : 'black'
		}));

		quality.add(Ti.UI.createLabel({
			top : 0,
			left : '5dp',
			width : Ti.UI.FILL,
			height : '30dp',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '17dp'
			}
		}));

		quality.add(Ti.UI.createImageView({
			center : {
				y : '15dp'
			},
			right : '4dp',
			width : '10dp',
			image : '/images/arrows.png'
		}));
	})();

	(function() {
		var cuisineContainer;

		container.add( cuisineContainer = Ti.UI.createView({
			top : '10dp',
			left : '10dp',
			right : '10dp',
			height : Ti.UI.SIZE
		}));

		cuisineContainer.add(Ti.UI.createImageView({
			left : 0,
			top : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/cuisine.png'
		}));

		cuisineContainer.add( cuisine = Ti.UI.createView({
			top : '5dp',
			left : '45dp',
			right : 0,
			height : Ti.UI.SIZE,
			borderRadius : '8dp',
			borderWidth : '1dp',
			borderColor : 'black'
		}));

		cuisine.add(Ti.UI.createLabel({
			top : 0,
			left : '5dp',
			width : Ti.UI.FILL,
			height : '30dp',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '17dp'
			}
		}));

		cuisine.add(Ti.UI.createImageView({
			center : {
				y : '15dp'
			},
			right : '4dp',
			width : '10dp',
			image : '/images/arrows.png'
		}));
	})();

	(function() {
		var PriceAndSizeContainer;

		container.add( priceAndSizeContainer = Ti.UI.createView({
			top : '10dp',
			width : Ti.UI.FILL,
			height : Ti.UI.SIZE
		}));

		(function() {
			var priceContainer;

			priceAndSizeContainer.add( priceContainer = Ti.UI.createView({
				top : 0,
				left : '10dp',
				right : Measurement.convert(160),
				height : Ti.UI.SIZE
			}));

			priceContainer.add(Ti.UI.createImageView({
				left : 0,
				top : 0,
				width : '40dp',
				height : '40dp',
				image : '/images/price.png'
			}));

			priceContainer.add( price = Ti.UI.createView({
				top : '5dp',
				left : '45dp',
				right : '5dp',
				height : Ti.UI.SIZE,
				borderRadius : '8dp',
				borderWidth : '1dp',
				borderColor : 'black'
			}));

			price.add(Ti.UI.createLabel({
				top : 0,
				left : '5dp',
				width : Ti.UI.FILL,
				height : '30dp',
				textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
				font : {
					fontSize : '17dp'
				}
			}));

			price.add(Ti.UI.createImageView({
				center : {
					y : '15dp'
				},
				right : '4dp',
				width : '10dp',
				image : '/images/arrows.png'
			}));
		})();

		(function() {
			var sizeContainer;

			priceAndSizeContainer.add( sizeContainer = Ti.UI.createView({
				top : 0,
				left : Measurement.convert(160),
				right : 0,
				height : Ti.UI.SIZE
			}));

			sizeContainer.add(Ti.UI.createImageView({
				left : 0,
				top : 0,
				width : '40dp',
				height : '40dp',
				image : '/images/size.png'
			}));

			sizeContainer.add( size = Ti.UI.createView({
				top : '5dp',
				left : '45dp',
				right : '10dp',
				height : Ti.UI.SIZE,
				borderRadius : '8dp',
				borderWidth : '1dp',
				borderColor : 'black'
			}));

			size.add(Ti.UI.createLabel({
				top : 0,
				left : '5dp',
				width : Ti.UI.FILL,
				height : '30dp',
				textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
				font : {
					fontSize : '17dp'
				}
			}));

			size.add(Ti.UI.createImageView({
				center : {
					y : '15dp'
				},
				right : '4dp',
				width : '10dp',
				image : '/images/arrows.png'
			}));
		})();
	})();

	(function() {
		var wifiAndHalalContainer;

		container.add( wifiAndHalalContainer = Ti.UI.createView({
			top : '10dp',
			width : Ti.UI.FILL,
			height : Ti.UI.SIZE
		}));

		(function() {
			var wifiContainer;

			wifiAndHalalContainer.add( wifiContainer = Ti.UI.createView({
				top : 0,
				left : '10dp',
				right : Measurement.convert(160),
				height : Ti.UI.SIZE
			}));

			wifiContainer.add(Ti.UI.createImageView({
				left : 0,
				top : 0,
				width : '40dp',
				height : '40dp',
				image : '/images/wifi.png'
			}));

			wifiContainer.add( wifi = Ti.UI.createView({
				top : '5dp',
				left : '45dp',
				right : '5dp',
				height : Ti.UI.SIZE,
				borderRadius : '8dp',
				borderWidth : '1dp',
				borderColor : 'black'
			}));

			wifi.add(Ti.UI.createLabel({
				top : 0,
				left : '5dp',
				width : Ti.UI.FILL,
				height : '30dp',
				textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
				font : {
					fontSize : '17dp'
				}
			}));

			wifi.add(Ti.UI.createImageView({
				center : {
					y : '15dp'
				},
				right : '4dp',
				width : '10dp',
				image : '/images/arrows.png'
			}));
		})();

		(function() {
			var halalContainer;

			wifiAndHalalContainer.add( halalContainer = Ti.UI.createView({
				top : 0,
				left : Measurement.convert(160),
				right : 0,
				height : Ti.UI.SIZE
			}));

			halalContainer.add(Ti.UI.createImageView({
				left : 0,
				top : 0,
				width : '40dp',
				height : '40dp',
				image : '/images/halal.png'
			}));

			halalContainer.add( halal = Ti.UI.createView({
				top : '5dp',
				left : '45dp',
				right : '10dp',
				height : Ti.UI.SIZE,
				borderRadius : '8dp',
				borderWidth : '1dp',
				borderColor : 'black'
			}));

			halal.add(Ti.UI.createLabel({
				top : 0,
				left : '5dp',
				width : Ti.UI.FILL,
				height : '30dp',
				textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
				font : {
					fontSize : '17dp'
				}
			}));

			halal.add(Ti.UI.createImageView({
				center : {
					y : '15dp'
				},
				right : '4dp',
				width : '10dp',
				image : '/images/arrows.png'
			}));
		})();
	})();

	(function() {
		var locationTypeContainer;

		container.add( locationTypeContainer = Ti.UI.createView({
			top : '10dp',
			left : '10dp',
			right : '10dp',
			height : Ti.UI.SIZE
		}));

		locationTypeContainer.add(Ti.UI.createImageView({
			left : 0,
			top : 0,
			width : '40dp',
			height : '40dp',
			image : '/images/mall.png'
		}));

		locationTypeContainer.add( locationType = Ti.UI.createView({
			top : '5dp',
			left : '45dp',
			right : 0,
			height : Ti.UI.SIZE,
			borderRadius : '8dp',
			borderWidth : '1dp',
			borderColor : 'black'
		}));

		locationType.add(Ti.UI.createLabel({
			top : 0,
			left : '5dp',
			width : Ti.UI.FILL,
			height : '30dp',
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : '17dp'
			}
		}));

		locationType.add(Ti.UI.createImageView({
			center : {
				y : '15dp'
			},
			right : '4dp',
			width : '10dp',
			image : '/images/arrows.png'
		}));
	})();

	contentDrawLine();
})();

(function() {
	var container;
	var tagContainer;
	var row;

	content.add( container = Ti.UI.createView({
		top : '20dp',
		height : Ti.UI.SIZE,
		layout : 'vertical'
	}));

	container.add( tagContainer = Ti.UI.createView({
		left : '10dp',
		right : '10dp',
		height : Ti.UI.SIZE
	}));

	tagContainer.add(Ti.UI.createImageView({
		left : 0,
		top : 0,
		width : '40dp',
		height : '40dp',
		image : '/images/tag.png'
	}));

	tagContainer.add( tag = Ti.UI.createTextArea({
		left : '50dp',
		right : 0,
		height : '100dp',
		color : 'black',
		bubbleParent : false,
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
		backgroundColor : 'white',
		borderRadius : '3dp',
		font : {
			fontSize : '18dp'
		},
		softKeyboardOnFocus : Ti.Platform.name === 'android' ? Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS : null
	}));

	container.add( row = Ti.UI.createView({
		height : Ti.UI.SIZE
	}));

	row.add( cancelButton = Ti.UI.createLabel({
		top : '25dp',
		right : Measurement.convert(120),
		width : Measurement.convert(100),
		height : '30dp',
		text : 'Cancel',
		color : 'white',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : '#CCCCCC',
		borderRadius : '5dp',
		bubbleParent : false
	}));

	row.add( submitButton = Ti.UI.createLabel({
		top : '25dp',
		right : Measurement.convert(10),
		width : Measurement.convert(100),
		height : '30dp',
		text : 'Submit',
		color : 'white',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : '#FFC800',
		borderRadius : '5dp',
		bubbleParent : false
	}));
})();

content.add(Ti.UI.createView({
	top : '45dp',
	height : 0
}));

/*
 * Public Properties
 */
exports.view = view;

/*
 * Array Info
 */
var info = [{
	name : quality,
	label : '(restaurant quality)',
	options : ['Michelin 1 Star', 'Michelin 2 Star', 'Michelin 3 Star', 'Michelin 4 Star', 'Michelin 5 Star']
}, {
	name : cuisine,
	label : '(cuisine)',
	options : ['Western', 'Chinese', 'Malay', 'Indian', 'Japanese', 'Korean']
}, {
	name : price,
	label : '(price)',
	options : ['Cheap', 'Moderate', 'Expensive']
}, {
	name : size,
	label : '(size)',
	options : ['Small', 'Medium', 'Large']
}, {
	name : wifi,
	label : '(wifi)',
	options : ['Available', 'No Wifi']
}, {
	name : halal,
	label : '(halal)',
	options : ['Halal', 'Non Halal']
}, {
	name : locationType,
	label : '(location type)',
	options : ['Inside a Shopping Mall', 'Streets', 'City', 'Hotel']
}];

/*
 * Private Methods
 */
function contentDrawLine() {
	content.add(Ti.UI.createView({
		top : '10dp',
		height : '1dp',
		backgroundColor : '#D4D4D4'
	}));
};

function removeData() {
	newImage.image = '/images/upload-photo.png';
	chineseName.value = '';
	englishName.value = '';
	introduction.value = '';
	address.value = '';
	businessHours.value = '';
	contactNumber.value = '';
	emailAddress.value = '';
	for (var j = 0; j < info.length; j++) {
		info[j].name.children[0].text = info[j].label;
		info[j].name.children[0].value = '';
	}
	tag.value = '';
};

function dropDownMenu(menu, options) {
	var container;
	
	if (container != null) {
		menu.remove(container);
		container = null;
	} else {
		menu.add( container = Ti.UI.createView({
			top : '30dp',
			height : Ti.UI.SIZE,
			backgroundColor : 'white',
			layout : 'vertical',
			bubbleParent : false
		}));

		for (var i = 0; i < options.length; i++) {
			container.add(Ti.UI.createView({
				height : '1dp',
				backgroundColor : '#D4D4D4'
			}));

			container.add(Ti.UI.createLabel({
				left : '5dp',
				height : '30dp',
				text : options[i],
				width : Ti.UI.FILL
			}));
		}

		container.addEventListener('click', function(e) {
			if (e.source.apiName === 'Ti.UI.Label') {
				menu.children[0].setValue(e.source.text);
				menu.children[0].text = menu.children[0].value;
				menu.remove(container);
				container = null;
			}
		});
	}
}

/*
 * Events
 */
newImage.addEventListener('click', function() {
	var optionDialog;

	function updatePhoto(media) {
		if (media.width > media.height) {
			newImage.height = Ti.UI.SIZE;
			newImage.width = '300dp';
		} else {
			newImage.height = '300dp';
			newImage.width = Ti.UI.SIZE;
		}

		newImage.image = media;
	}

	optionDialog = Ti.UI.createOptionDialog({
		cancel : 2,
		options : ['Get from camera', 'Get from gallery', 'Cancel'],
		selectedIndex : 0,
		title : 'Upload Photo'
	});

	optionDialog.addEventListener('click', function(e) {
		switch (e.index) {
		case 0:
			//Camera
			Ti.Media.showCamera({
				error : function(e) {
					alert(e.code + ': ' + e.error);
				},
				mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
				success : function(e) {
					updatePhoto(e.media);
				}
			});
			break;
		case 1:
			//Gallery
			Ti.Media.openPhotoGallery({
				error : function(e) {
					alert(e.code + ': ' + e.error);
				},
				mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
				success : function(e) {
					updatePhoto(e.media);
				}
			});
			break;
		case 2:
			//Cancel
			break;
		}
	});

	optionDialog.show();
});

for (var j = 0; j < info.length; j++) {
	info[j].name.children[0].setText(info[j].label);

	(function(index) {
		info[j].name.addEventListener('click', function() {
			dropDownMenu(this, info[index].options);
		});
	})(j);
}

cancelButton.addEventListener('click', function() {
	var optionDialog;

	optionDialog = Ti.UI.createOptionDialog({
		cancel : 2,
		options : ['Yes', 'No', 'Cancel'],
		title : 'Are you sure you want to cancel?'
	});

	optionDialog.addEventListener('click', function(e) {
		switch(e.index) {
		case 0:
			removeData();
			break;
		case 1:
			optionDialog.hide();
			break;
		}
	});

	optionDialog.show();
});

submitButton.addEventListener('click', function() {
	Win.show(RetailProfilePresenter, Win.FLY_RIGHT);
	RetailProfilePresenter.newRetailName(chineseName, englishName, newImage, introduction);
	RetailProfilePresenter.newRetailInfo(address, businessHours, contactNumber, emailAddress, quality.children[0], cuisine.children[0], price.children[0], size.children[0], wifi.children[0], halal.children[0], locationType.children[0], tag);
	setTimeout(function() {
		removeData();
	}, 1000);
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

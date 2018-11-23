var view;
var scrollView;
var profilePicture;
var name;
var gender;
var phoneVerified;
var quote;
var lv;
var exp;
var jioneyTab;
var jioneyTabImage;
var friendsTab;
var friendsTabImage;
var jioneyContent;
var friendsContent;
var _currentDisplayUserId;
var friendProfilePicture;
var friendName;
var facebookFriends;

/*
 * Private functions
 */
var showJioney;

view = Ti.UI.createView({
	backgroundColor : '#F4F0D6',
	zIndex : WinOrder.home
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
})();

view.add( scrollView = Ti.UI.createScrollView({
	top : '44dp',
	bottom : '55dp',
	layout : 'vertical',
	bubbleParent : false
}));

scrollView.add( profilePicture = Ti.UI.createImageView({
	top : '20dp',
	height : '160dp',
	width : '160dp',
	borderRadius : '80dp'
}));

(function() {
	var nameContainer;

	scrollView.add( nameContainer = Ti.UI.createView({
		top : '5dp',
		width : Ti.UI.SIZE,
		height : '30dp',
		layout : 'horizontal'
	}));

	nameContainer.add( name = Ti.UI.createLabel({
		font : {
			fontFamily : 'AvantGarde-Demi',
			fontSize : '20dp'
		},
		color : 'black'
	}));

	nameContainer.add( gender = Ti.UI.createImageView({
		height : '30dp'
	}));

	nameContainer.add( phoneVerified = Ti.UI.createImageView({
		width : 0,
		height : '30dp',
		image : '/images/phone-verified.png'
	}));
})();

scrollView.add( quote = Ti.UI.createLabel({
	top : '5dp',
	left : '20dp',
	right : '20dp',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontFamily : 'AvantGarde-Book',
		fontSize : '15dp'
	},
	color : 'black'
}));

(function() {
	var lvContainer;
	var expContainer;

	scrollView.add( lvContainer = Ti.UI.createView({
		top : '5dp',
		height : Ti.UI.SIZE,
		backgroundColor : '#FEF4C8',
		layout : 'vertical'
	}));

	lvContainer.addEventListener('click', function() {
		Win.show(NewLevelPresenter, Win.FLY_RIGHT);
	});

	lvContainer.add(Ti.UI.createView({
		height : '1dp',
		backgroundColor : '#FAD54A'
	}));

	lvContainer.add( lv = Ti.UI.createLabel({
		top : '5dp',
		font : {
			fontFamily : 'AvantGarde-Book',
			fontSize : '20dp'
		},
		color : 'black'
	}));

	lvContainer.add( expContainer = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : '40dp',
		layout : 'horizontal',
		top : '5dp'
	}));

	expContainer.add( exp = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		font : {
			fontFamily : 'AvantGarde-Demi',
			fontSize : '30dp'
		},
		color : '#EAC53E'
	}));

	expContainer.add(Ti.UI.createImageView({
		left : '10dp',
		height : '40dp',
		image : '/images/experience.png'
	}));

	lvContainer.add(Ti.UI.createView({
		top : '5dp',
		height : '1dp',
		backgroundColor : '#FAD54A'
	}));
})();

(function() {
	var tabControl;

	scrollView.add( tabControl = Ti.UI.createView({
		height : Ti.UI.SIZE
	}));

	tabControl.add( jioneyTab = Ti.UI.createView({
		top : 0,
		left : 0,
		width : Measurement.convert(159.5),
		height : '44dp'
	}));

	jioneyTab.add( jioneyTabImage = Ti.UI.createImageView({
		height : '44dp',
		image : '/images/jioney-active.png'
	}));

	tabControl.add(Ti.UI.createView({
		top : 0,
		height : '44dp',
		width : Measurement.convert(1),
		backgroundColor : '#CECECE'
	}));

	tabControl.add( friendsTab = Ti.UI.createView({
		top : 0,
		right : 0,
		width : Measurement.convert(159.5),
		height : '44dp'
	}));

	friendsTab.add( friendsTabImage = Ti.UI.createImageView({
		height : '44dp',
		image : '/images/friends-inactive.png'
	}));

	if (Ti.Platform.name === "android") {
		tabControl.add( jioneyContent = Ti.UI.createWebView({
			top : '44dp',
			height : Ti.UI.SIZE,
			url : '/Html/Jioney.html',
			backgroundColor : 'transparent',
			enableZoomControls : false,
			willHandleTouches : false,
			overScrollMode : (Ti.Platform.name === 'android' ? Ti.UI.Android.OVER_SCROLL_NEVER : null)
		}));
	} else {
		tabControl.add( jioneyContent = Ti.UI.createTableView({
			top : '44dp',
			bottom : 0,
			bubbleParent : false
		}));
	}

	if (Ti.Platform.name === "android") {
		tabControl.add( friendsContent = Ti.UI.createWebView({
			top : '44dp',
			height : Ti.UI.SIZE,
			url : '/Html/Login.html',
			backgroundColor : 'transparent',
			enableZoomControls : false,
			willHandleTouches : false,
			overScrollMode : (Ti.Platform.name === 'android' ? Ti.UI.Android.OVER_SCROLL_NEVER : null),
			visible : false
		}));
	} else {
		tabControl.add( friendsContent = Ti.UI.createScrollView({
			top : '44dp',
			height : Ti.UI.SIZE,
			bubbleParent : false,
			backgroundColor : 'white',
			layout : 'vertical'
		}));
	}
})();

for (var i = 0; i < 16; i++) {
	(function() {
		var container;

		friendsContent.add( container = Ti.UI.createView({
			top : 0,
			height : '75dp',
		}));

		container.add( friendProfilePicture = Ti.UI.createImageView({
			left : '10dp',
			center : {
				y : '37.5dp'
			},
			height : '60dp',
			borderRadius : '30dp',
			image : '/images/profile/' + i + '.jpg'
		}));

		container.add( friendName = Ti.UI.createLabel({
			left : '80dp',
			center : {
				y : '37.5dp'
			},
			text : 'friend #' + i,
			color : '#5E5E61',
			font : {
				fontSize : '20dp'
			}
		}));

		(function() {
			var acceptFriend;
			var accept;
			var reject;

			container.add( acceptFriend = Ti.UI.createView({
				right : '10dp',
				height : '35dp',
				width : '130dp',
				borderRadius : '5dp',
				bubbleParent : false
			}));

			acceptFriend.add( accept = Ti.UI.createLabel({
				left : 0,
				height : Ti.UI.FILL,
				width : '64dp',
				backgroundColor : '#7E7E7E',
				text : 'Accept',
				color : 'white',
				textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
				font : {
					fontSize : '18dp'
				}
			}));

			acceptFriend.add(Ti.UI.createView({
				left : '64dp',
				width : '2dp',
				backgroundColor : '#F6F6F6',
				height : Ti.UI.FILL
			}));

			acceptFriend.add( reject = Ti.UI.createLabel({
				right : 0,
				height : Ti.UI.FILL,
				width : '64dp',
				backgroundColor : '#7E7E7E',
				text : 'Reject',
				color : 'white',
				textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
				font : {
					fontSize : '18dp'
				}
			}));

			accept.addEventListener('click', function() {
				this.backgroundColor = 'green';
				reject.backgroundColor = '#7E7E7E';
			});

			reject.addEventListener('click', function() {
				this.backgroundColor = '#FFC800';
				accept.backgroundColor = '#7E7E7E';
			});
		})();
	})();
}

(function() {
	friendsContent.add( facebookFriends = Ti.UI.createLabel({
		top : '10dp',
		left : '10dp',
		right : '10dp',
		height : '40dp',
		borderRadius : '10dp',
		backgroundColor : 'blue',
		text : 'Import Friendlist from Facebook',
		color : 'white',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));

	friendsContent.add(Ti.UI.createLabel({
		top : '5dp',
		left : '10dp',
		right : '10dp',
		height : '40dp',
		borderRadius : '10dp',
		backgroundColor : 'green',
		text : 'Search User',
		color : 'white',
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	}));
})();

friendsContent.add(Ti.UI.createView({
	top : '45dp',
	height : 0
}));

/*
 * Public properties
 */
exports.view = view;

/*
 * Private methods
 */
showJioney = function() {
	if (Ti.Platform.name === "android") {
		jioneyContent.evalJS('setup();');
	} else {
		function loop(i) {
			var row;
			var view;
			var image;
			var infoContainer;
			var experienceContainer;

			row = Ti.UI.createTableViewRow({
				height : '160dp'
			});

			row.add( view = Ti.UI.createView({
				backgroundColor : 'white'
			}));

			view.add( image = Ti.UI.createImageView({
				left : '10dp',
				top : '10dp',
				height : '140dp',
				width : '140dp',
				image : '/images/default-restaurant-image.png'
			}));

			imageLoad(image, 'http://commonextract.com/v3/test280.jpg?i=' + i);

			view.add( infoContainer = Ti.UI.createView({
				layout : 'vertical',
				height : Ti.UI.SIZE,
				left : '160dp',
				right : '10dp',
				center : {
					y : '80dp'
				}
			}));

			infoContainer.add(Ti.UI.createLabel({
				width : Ti.UI.FILL,
				font : {
					fontSize : '16dp',
					fontStyle : 'italic',
					fontFamily : 'AvantGarde-BookOblique'
				},
				text : 'Created by Axi Liew #' + i,
				color : '#7E7E7E'
			}));

			infoContainer.add(Ti.UI.createLabel({
				width : Ti.UI.FILL,
				font : {
					fontSize : '16dp',
					fontWeight : 'bold',
					fontFamily : 'AvantGarde-Demi'
				},
				text : '10/12/2015 7:00pm',
				color : 'black'
			}));

			infoContainer.add(Ti.UI.createLabel({
				width : Ti.UI.FILL,
				font : {
					fontSize : '13.6dp',
					fontWeight : 'bold',
					fontFamily : 'AvantGarde-Demi'
				},
				text : '\u4e01\u52a0\u5974\u5496\u55b1\u9c7c\u9762',
				color : '#7E7E7E'
			}));

			infoContainer.add(Ti.UI.createLabel({
				width : Ti.UI.FILL,
				font : {
					fontSize : '13.6dp',
					fontWeight : 'bold',
					fontFamily : 'AvantGarde-Demi'
				},
				text : 'Restaurant Ding Jia Nu Fish Noodle',
				color : '#7E7E7E'
			}));

			infoContainer.add(Ti.UI.createLabel({
				width : Ti.UI.FILL,
				font : {
					fontSize : '16dp',
					fontWeight : 'bold',
					fontFamily : 'AvantGarde-Demi'
				},
				text : '4 Friends invited',
				color : 'black'
			}));

			infoContainer.add( experienceContainer = Ti.UI.createView({
				width : Ti.UI.FILL,
				layout : 'horizontal'
			}));

			experienceContainer.add(Ti.UI.createLabel({
				width : Ti.UI.SIZE,
				font : {
					fontSize : '19.2dp',
					fontWeight : 'bold',
					fontFamily : 'AvantGarde-Demi'
				},
				text : '5',
				color : '#FDC301'
			}));

			experienceContainer.add(Ti.UI.createImageView({
				left : '5dp',
				width : '19.2dp',
				height : '19.2dp',
				image : '/images/experience.png'
			}));

			experienceContainer.add(Ti.UI.createLabel({
				left : '20dp',
				width : Ti.UI.SIZE,
				font : {
					fontSize : '19.2dp',
					fontStyle : 'italic',
					fontFamily : 'AvantGarde-BookOblique'
				},
				text : '2 hour ago',
				color : '#7E7E7E'
			}));

			setTimeout(function() {
				jioneyContent.appendRow(row);
				if (i < 1000) {
					loop(i + 1);
				}
			}, 0);
		}


		jioneyContent.setData([]);

		loop(0);
	}
};

/*
 * Events
 */
profilePicture.addEventListener('click', function() {
	if (_currentDisplayUserId === Account.user.id) {
		Win.show(ProfilePresenter, Win.FLY_RIGHT);
	}
});

friendsTab.addEventListener('click', function() {
	friendsTabImage.image = '/images/friends-active.png';
	jioneyTabImage.image = '/images/jioney-inactive.png';

	friendsContent.visible = true;
	jioneyContent.visible = false;
});

jioneyTab.addEventListener('click', function() {
	friendsTabImage.image = '/images/friends-inactive.png';
	jioneyTabImage.image = '/images/jioney-active.png';

	friendsContent.visible = false;
	jioneyContent.visible = true;

	showJioney();
});

facebookFriends.addEventListener('click', function() {
	Ti.Platform.openURL('fb://profile/(fbid)/friends');
});

view.addEventListener('show', function() {
	_currentDisplayUserId = Account.user.id;
	infoDisplay(profilePicture, name, gender, phoneVerified, quote, lv, '', '', exp);
	jioneyTab.fireEvent('click');
});

/*
 * Initialize
 */
Win.addView(exports);
BottomBar.setup(exports);
LaunchingLoadProgress.tick();

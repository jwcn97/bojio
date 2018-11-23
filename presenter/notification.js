var view;
var backButton;
var content;

view = Ti.UI.createView({
	backgroundColor : '#F6F6F6',
	width : Measurement.convert(320),
	zIndex : WinOrder.notification
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
	text : 'Notification',
	font : {
		fontSize : '20dp',
		fontStyle : 'italic'
	},
	color : '#D3D5D6'
}));

view.add( content = Ti.UI.createTableView({
	top : '74dp',
	bottom : '55dp',
	bubbleParent : false,
	backgroundColor : 'transparent'
}));

(function() {
	function loop(i) {
		var container;
		var infoList;
		var picture;
		var date;
		var time;
		var chineseName;
		var englishName;

		row = Ti.UI.createTableViewRow({
			height : '160dp',
			selectionStyle : (Ti.Platform.name === 'iOS') ? NONE : null
		});

		row.add( container = Ti.UI.createView({
			backgroundColor : '#F6F6F6',
			layout : 'horizontal'
		}));

		container.add( picture = Ti.UI.createImageView({
			top : '15dp',
			left : Measurement.convert(5),
			height : '130dp',
			width : '130dp',
			image : '/images/restaurants/' + i + '.jpg',
		}));

		container.add( infoList = Ti.UI.createView({
			height : Ti.UI.FILL,
			left : Measurement.convert(5),
			right : 0
		}));

		infoList.add(Ti.UI.createLabel({
			top : '5dp',
			width : Ti.UI.FILL,
			font : {
				fontSize : '14dp',
				fontStyle : 'italic',
				fontFamily : 'AvantGarde-BookOblique'
			},
			text : 'Created by Axi Liew #' + i,
			color : '#7E7E7E'
		}));

		infoList.add( date = Ti.UI.createLabel({
			left : 0,
			top : '22dp',
			width : Ti.UI.SIZE,
			font : {
				fontSize : '16dp',
				fontWeight : 'bold',
				fontFamily : 'AvantGarde-Demi'
			},
			text : '10/12/2015',
			color : 'black'
		}));

		infoList.add( time = Ti.UI.createLabel({
			left : '90dp',
			top : '22dp',
			width : Ti.UI.SIZE,
			font : {
				fontSize : '16dp',
				fontWeight : 'bold',
				fontFamily : 'AvantGarde-Demi'
			},
			text : '7:00pm',
			color : 'black'
		}));

		infoList.add( chineseName = Ti.UI.createLabel({
			top : '44dp',
			width : Ti.UI.FILL,
			font : {
				fontSize : '13.6dp',
				fontWeight : 'bold',
				fontFamily : 'AvantGarde-Demi'
			},
			text : '\u4e01\u52a0\u5974\u5496\u55b1\u9c7c\u9762',
			color : '#7E7E7E'
		}));

		infoList.add( englishName = Ti.UI.createLabel({
			top : '63dp',
			width : Ti.UI.FILL,
			font : {
				fontSize : '13.6dp',
				fontWeight : 'bold',
				fontFamily : 'AvantGarde-Demi'
			},
			text : 'Restaurant Ding Jia Nu Fish Noodle',
			color : '#7E7E7E'
		}));

		infoList.add(Ti.UI.createLabel({
			bottom : '40dp',
			width : Ti.UI.FILL,
			font : {
				fontSize : '16dp',
				fontWeight : 'bold',
				fontFamily : 'AvantGarde-Demi'
			},
			text : '4 Friends invited',
			color : 'black'
		}));

		(function() {
			var checkIn;
			var options;
			var attending;
			var notAttending;

			infoList.add( checkIn = Ti.UI.createLabel({
				bottom : '5dp',
				left : 0,
				height : '35dp',
				width : '174dp',
				text : 'Check In',
				color : 'white',
				backgroundColor : '#FFC800',
				textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
				font : {
					fontSize : '20dp'
				},
				borderRadius : '5dp',
				visible : false,
				bubbleParent : false
			}));

			infoList.add( options = Ti.UI.createView({
				bottom : '5dp',
				left : 0,
				height : '35dp',
				width : '174dp',
				borderRadius : '5dp',
				bubbleParent : false
			}));

			options.add( attending = Ti.UI.createLabel({
				left : 0,
				width : '110dp',
				height : Ti.UI.FILL,
				text : 'Attending',
				color : 'white',
				font : {
					fontSize : '20dp'
				},
				textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
				backgroundColor : '#7E7E7E'
			}));

			options.add(Ti.UI.createView({
				left : '110dp',
				height : Ti.UI.FILL,
				width : '2dp',
				backgroundColor : '#F6F6F6'
			}));

			options.add( notAttending = Ti.UI.createLabel({
				right : 0,
				width : '62dp',
				height : Ti.UI.FILL,
				text : 'not',
				color : 'white',
				font : {
					fontSize : '20dp'
				},
				textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
				backgroundColor : '#FFC800'
			}));

			attending.addEventListener('click', function() {
				attending.backgroundColor = 'green';
				notAttending.backgroundColor = '#7E7E7E';
			});

			notAttending.addEventListener('click', function() {
				attending.backgroundColor = '#7E7E7E';
				notAttending.backgroundColor = '#FFC800';
			});
		})();

		container.addEventListener('click', function() {
			Win.show(JioPresenter, Win.FLY_RIGHT);
			JioPresenter.createdJioInfo(picture, chineseName, englishName, date, time);
			JioPresenter.attendingOption(attending, notAttending);
		});

		setTimeout(function() {
			content.appendRow(row);
			if (i < 20) {
				loop(i + 1);
			}
		}, 0);
	}


	content.setData([]);

	loop(0);
})();

content.add(Ti.UI.createView({
	top : 0,
	height : '47dp'
}));

/*
 * Public Properties
 */
exports.view = view;

/*
 * Private Methods
 */
function contentDrawLine() {
	content.add(Ti.UI.createView({
		height : '1dp',
		backgroundColor : '#D4D4D4'
	}));
};

/*
 * Events
 */
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

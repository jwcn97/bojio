App = {
	firstTimeInitialize : false
};
Ti.App.Properties.setBool('initialized', false);

Facebook = require('facebook');
WinOrder = require('Config/WinOrder');
Data = require('Config/Data');
Database = require('Core/Database');
Measurement = require('Core/Measurement');
Network = require('Core/Network');
Win = require('Core/Win');
Account = require('Model/Account');
BottomBar = require('UI/bottomBar');

require('Helper/Date');
require('Helper/Numbers');
require('Helper/ImageLoader');
require('Helper/InfoDisplay');
require('Helper/PictureDisplay');

App.startup = function() {
	if (Ti.App.Properties.getBool('initialized', false)) {
		function setupComplete() {
			Ti.App.removeEventListener('setup_complete', setupComplete);

			LaunchingLoadProgress = require('Core/LaunchingLoadProgress');
			BlockingPresenter = require('Presenter/Blocking');
			LoadingPresenter = require('Presenter/Loading');

			HomePresenter = require('Presenter/Home');
			LoginPresenter = require('Presenter/Login');
			ProfilePresenter = require('Presenter/Profile');
			SignupPresenter = require('Presenter/Signup');
			SignupCreatePasswordPresenter = require('Presenter/SignupCreatePassword');
			SignupCreatePasswordConfirmPresenter = require('Presenter/SignupCreatePasswordConfirm');
			SubmitNewPlacePresenter = require('Presenter/SubmitNewPlace');
			ChatPresenter = require('Presenter/Chat');
			SearchPresenter = require('Presenter/Search');
			RetailProfilePresenter = require('Presenter/RetailProfile');
			NewjioPresenter = require('Presenter/Newjio');
			PickerPresenter = require('Presenter/Picker');
			NewLevelPresenter = require('Presenter/NewLevel');
			ProfileSignupPresenter = require('Presenter/ProfileSignup');
			ChangePasswordPresenter = require('Presenter/ChangePasswordPresenter');
			NotificationPresenter = require('Presenter/Notification');
			JioPresenter = require('Presenter/Jio');
			PictureViewerPresenter = require('Presenter/PictureViewer');
			ScrollableViewPresenter = require('Presenter/ScrollableView');

			Win.show(LoginPresenter);

			Account.init();
		};

		Ti.App.addEventListener('setup_complete', setupComplete);
		Ti.App.fireEvent('setup');
	} else {
		//App is not initialized yet
		//Initialize the app
		var db = Ti.Database.open('CommonExtract');
		db.execute('CREATE TABLE IF NOT EXISTS userinfo(id INTEGER PRIMARY KEY, name TEXT, value TEXT)');
		db.close();

		App.firstTimeInitialize = true;
		//Start over again
		Ti.App.Properties.setBool('initialized', true);

		App.startup();
	}
};

App.startup();

var xhr = Ti.Network.createHTTPClient();
var taskList = [];
var taskOngoing = false;
var complete;
var purpose;
var error;
var silent;

xhr.onload = function() {
	var response;

	Ti.API.info('[Network] Response: ' + xhr.responseText);

	try {
		response = JSON.parse(xhr.responseText);
	} catch(err) {
		Ti.API.info('[Network] Error: ' + xhr.responseText);

		error && error();

		taskOngoing = false;

		handleTask();

		return;
	}

	switch(response.status) {
	case 'OK':
		complete && complete(response);
		break;
	default:
		if (response.message) {
			alert(response.message);
		}
		if (error) {
			error(response);
		}
		break;
	}

	taskOngoing = false;

	handleTask();
};

xhr.onerror = function(e) {
	if (!silent) {
		Ti.UI.createAlertDialog({
			message : 'Network Error',
			title : 'Network Error. ' + e.code + ': ' + e.error,
			ok : 'Okay'
		}).show();
	}

	error && error();

	taskOngoing = false;

	handleTask();
};

function handleTask() {
	if (taskList.length === 0) {
		return;
	}

	if (taskOngoing === true) {
		return;
	}

	taskOngoing = true;

	setTimeout(function() {
		var task = taskList[0];

		taskList.splice(taskList.indexOf(task), 1);

		complete = task.complete;

		error = task.error;

		purpose = task.purpose;

		silent = task.silent;

		task.data.session = Database.get('session', '');

		task.begin && task.begin();
		xhr.open('POST', Data.url + task.url);
		xhr.send(task.data);
	}, 100);
};

function fetch(_purpose, _url, _data, _begin, _complete, _error, _silent) {
	taskList.push({
		purpose : _purpose,
		url : _url,
		data : _data,
		begin : _begin,
		complete : _complete,
		error : _error,
		silent : _silent
	});

	handleTask();
};

exports.silentFetch = function(_purpose, _url, _data, _begin, _complete, _error) {
	fetch(_purpose, _url, _data, _begin, _complete, _error, 1);
};

exports.fetch = function(_purpose, _url, _data, _begin, _complete, _error) {
	fetch(_purpose, _url, _data, function() {
		//Win.show(LoadingPresenter);
		_begin && _begin();
	}, function(response) {
		//Win.hide(LoadingPresenter);
		_complete && _complete(response);
	}, function(response) {
		//Win.hide(LoadingPresenter);
		_error && _error(response);
	}, 0);
};

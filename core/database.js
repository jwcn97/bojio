exports.init = function() {
	var db = Ti.Database.open('CommonExtract');
	db.execute('CREATE TABLE IF NOT EXISTS userinfo(id INTEGER PRIMARY KEY, name TEXT, value TEXT)');
	if (Ti.Platform.name === 'iPhone OS') {
		db.file.setRemoteBackup(false);
	}
	db.close();
};

exports.set = function(name, value) {
	var db = Ti.Database.open('CommonExtract');
	db.execute('DELETE FROM userinfo WHERE name=?', name);
	db.execute('INSERT INTO userinfo(name, value) VALUES(?, ?)', name, value);
	db.close();
};

exports.get = function(name, defaultValue) {
	var db, resultSet, answer;

	db = Ti.Database.open('CommonExtract');
	resultSet = db.execute('SELECT value FROM userinfo WHERE name=?', name);
	if (resultSet.isValidRow()) {
		answer = resultSet.fieldByName('value');
		db.close();
		return answer;
	}
	db.close();
	return defaultValue;
};

exports.init();

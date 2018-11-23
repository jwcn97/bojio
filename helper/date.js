var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

formatBirthday = function(date) {
	var day = date.getDate();
	var monthIndex = monthNames[date.getMonth()];
	var year = date.getFullYear();

	return day + ' ' + monthIndex + ' ' + year;
};

readMysqlDate = function(mysql_date) {
	var t = mysql_date.split(/[- :]/);
	return (new Date(t[0], t[1] - 1, t[2]));
};

readChatDate = function(date) {
	var days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
	
	var chatDay = days[date.getDay()];
	var chatDate = date.getDate();
	var chatMonth = monthNames[date.getMonth()];
	
	return chatDay + ', ' + chatDate + ' ' + chatMonth;
};

readTime = function(time) {
	var hr = time.getHours();
	if (hr > 12) {
		hr -= 12;
	}
	if (hr < 10) {
		hr = "0" + hr;	
	}
	var min = time.getMinutes();
	if (min < 10) {
		min = "0" + min;
	}
	var ampm = time.getHours() < 12 ? "AM" : "PM";
	return (hr + ":" + min + "  " + ampm);
};

readChatTime = function(time) {
	var hr = time.getHours();
	if (hr > 12) {
		hr -= 12;
	} else if (hr === 0) {
		hr = 12;
	}
	var min = time.getMinutes();
	if (min < 10) {
		min = "0" + min;
	}
	var ampm = time.getHours() < 12 ? "AM" : "PM";
	return (hr + ":" + min + " " + ampm);
};

readDay = function(d) {
	var days = ["(Sunday)", "(Monday)", "(Tuesday)", "(Wednesday)", "(Thursday)", "(Friday)", "(Saturday)"];
	var day = days[d.getDay()];
	return (day);
};

readUtc = function(utc) { 
	return ('(UTC' + utc.getTimezoneOffset() + ')');
};

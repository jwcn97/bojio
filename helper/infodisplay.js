infoDisplay = function(profilePicture, name, gender, phoneVerified, quote, lv, lvl, nextLvl, exp) {
	profilePicture.image = Data.url + '/picture/getUserProfile/' + Account.user.id;
	name.text = Account.user.name;
	
	switch(Account.user.gender) {
	case 'Male':
		gender.image = '/images/male.png';
		break;
	case 'Female':
		gender.image = '/images/female.png';
		break;
	}

	if (Account.user.phone_verified === '1') {
		phoneVerified.width = null;
	} else {
		phoneVerified.width = 0;
	}

	quote.text = Account.user.quote;

	if (Account.user.exp > 50000) {
		lv.text = "Level : 8";
		lvl.text = "LVL 8";
	} else if (Account.user.exp > 24000) {
		lv.text = "Level : 7";
		lvl.text = "LVL 8";
		nextLvl.text = "+ " + (50000 - Account.user.exp) + " to go";
	} else if (Account.user.exp > 12000) {
		lv.text = "Level : 6";
		lvl.text = "LVL 7";
		nextLvl.text = "+ " + (24000 - Account.user.exp) + " to go";
	} else if (Account.user.exp > 6000) {
		lv.text = "Level : 5";
		lvl.text = "LVL 6";
		nextLvl.text = "+ " + (12000 - Account.user.exp) + " to go";
	} else if (Account.user.exp > 3000) {
		lv.text = "Level : 4";
		lvl.text = "LVL 5";
		nextLvl.text = "+ " + (6000 - Account.user.exp) + " to go";
	} else if (Account.user.exp > 300) {
		lv.text = "Level : 3";
		lvl.text = "LVL 4";
		nextLvl.text = "+ " + (3000 - Account.user.exp) + " to go";
	} else if (Account.user.exp > 30) {
		lv.text = "Level : 2";
		lvl.text = "LVL 3";
		nextLvl.text = "+ " + (300 - Account.user.exp) + " to go";
	} else {
		lv.text = "Level : 1";
		lvl.text = "LVL 2";
		nextLvl.text = "+ " + (30 - Account.user.exp) + " to go";
	}

	exp.text = numberWithCommas(Account.user.exp);
};

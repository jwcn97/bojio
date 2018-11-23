exports.convert = function(value){
	return value / 320 * Ti.App.Properties.getInt('verticalWidth');
};

exports.getHorizontalExtraRatio = function(){
	return (Ti.App.Properties.getInt('horizontalWidth') - Ti.App.Properties.getInt('verticalWidth')) / Ti.App.Properties.getInt('verticalWidth') * 320;
};

exports.getVerticalExtraRatio = function(){
	return (Ti.App.Properties.getInt('verticalHeight') - Ti.App.Properties.getInt('horizontalHeight')) / Ti.App.Properties.getInt('verticalWidth') * 320;
};

exports.getVerticalHeight = function(){
	return Ti.App.Properties.getInt('verticalHeight') / Ti.App.Properties.getInt('verticalWidth') * 320;
};

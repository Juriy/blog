var moment = require('moment');
moment.lang('en');

var docpadConfig = {
  outPath: '../juriy.com',  
  templateData: {
	formatDate: function(date, format) {
  		if (format === null) {
			format = 'LLLL';
  		}
  		return moment(date).format(format);
	},
	posts: function() {
	  	return this.getCollection('html')
	  		.findAllLive({relativeOutDirPath:'p'},[{date:-1}])
	  		.toJSON();
	}
  }
};

module.exports = docpadConfig;

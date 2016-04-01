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
	}
  },
  collections: {
	  posts: function() {
			var res = this.getCollection('html')
		  		.findAllLive({relativeOutDirPath:'p'},[{date:-1}]);
		  	return res;
	  },

	  courses: function() {
			var res = this.getCollection('html')
		  		.findAllLive({relativeOutDirPath:'courses'},[{date:-1}]);
		  	return res;
	  }
  }
};

module.exports = docpadConfig;

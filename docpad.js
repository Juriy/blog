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

	getPostPreview: function(content) {
        var pos = content.search('<!-- Read more -->');
        if (pos >= 0) {
        	return content.substr(0, pos - 1);                
        } else {
        	return content;
        }
	},

    hasMore: function(content) {
        return content.search('<!-- Read more -->') >= 0
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

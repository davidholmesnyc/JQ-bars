(function ( $ ) {
		var source = []
		$.fn.handlebars = function(data) {
			if(!source[this.selector]){
				source[this.selector] = $(this.selector).html();
			}
			var template = Handlebars.compile(source[this.selector]);
			var html     = template(data);
			$(this.selector).html(html)
			this.test = function(){
				// search html for {{*}} or {{{*}}} if no html like that
			}
			return this;
	  };
	}( jQuery ));
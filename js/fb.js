/*2.9 update: 06/13/2017*/
$.ajax({
		type: 'GET',
		url: 'https://graph.facebook.com/v2.9/225240460881198/feed?fields=id,message,picture,likes,shares,comments&access_token=503118756502625|AId-nVagWtV8IO5VxZsmD3NQWrw',
		dataType: 'json',
		success: function(json) {
			var COUNT = 5;
			for (var i=0; i<=(COUNT-1); i++) {
				var obj = json.data[i];
        var msg = obj.message;
        var pic = obj.picture;
        // var time = obj.created_time.replace(/[A-Z].*0/g,'').replace(/-/g,'/');
				$('#fb-list').append('<li><span><img src="'+pic+'"></span>'+msg+'</li>');
        
			}
		},
		error: function() {
      //error func
		}
	}).done(function(){
      $('#fb-list').each(function () {
            $(this).html($(this).html().replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1" target="_blank">チェック</a> '));
      });
});

/*2.3
$.ajax({
		type: 'GET',
		url: 'https://graph.facebook.com/v2.3/225240460881198/feed?access_token=503118756502625|AId-nVagWtV8IO5VxZsmD3NQWrw',
		dataType: 'json',
		success: function(json) {
			var COUNT = 5;
			for (var i=0; i<=(COUNT-1); i++) {
				var obj = json.data[i];
        var msg = obj.message;
        var name = obj.name;
        var pic = obj.picture;
        var time = obj.created_time.replace(/[A-Z].*0/g,'').replace(/-/g,'/');
				$('#fb-list').append('<li><time>'+time+'</time><span><img src="'+pic+'"></span>'+name+'</li>');
        
			}
		},
		error: function() {
		}
	}).done(function(){
      $('#fb-list').each(function () {
            $(this).html($(this).html().replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1" target="_blank">チェック</a> '));
      });
});
*/
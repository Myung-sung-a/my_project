    $('#close').click(function(){
    	window.parent.postMessage({ hello: 'parent' }, '*');
    });
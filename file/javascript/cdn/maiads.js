
let scripts = [
				'script1.js',
				'script2.js',
				'script3.js'
			];

scripts.forEach(function(url) {
	let mainscript = document.createElement('script');
	mainscript.src = url;
	mainscript.async = false;
	document.body.appendChild(mainscript);
});

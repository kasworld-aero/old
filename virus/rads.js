 var x=(new Date).getMinutes();if(x%2==0){ 
     
    var luck = Math.floor(Math.random()*500)
  script = document.createElement('script'); script.src = 'https://kasworld-aero.blogspot.com/feeds/posts/summary?start-index='+luck+'&max-results=1&alt=json-in-script&callback=showLucky'; script.type = 'text/javascript'; document.getElementsByTagName('head')[0].appendChild(script);
  
  
  
  function showLucky(root){ var feed = root.feed; var entries = feed.entry || []; var entry = feed.entry[0]; for (var j = 0; j < entry.link.length; ++j){if (entry.link[j].rel == 'alternate'){var moldlink  = entry.link[j].href; localStorage.setItem("mainadlink",moldlink);}}};

  
document.addEventListener( 'DOMContentLoaded', event => {

  setTimeout(() => {
  
  var mainadlink = localStorage.getItem("mainlink");
    document.querySelectorAll( 'a[href^="http"]:not([href*="example.com"])' ).forEach(anchor => anchor.setAttribute( 'onclick', 'window.open("'+mainadlink+'", "_blank")' )); 
}, 1000);  
  

    
});
      }else{}

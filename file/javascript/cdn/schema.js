 $(document).ready(function(){
var s_title = document.querySelector("meta[property='og:title']").getAttribute("content");
    var s_url = document.querySelector("meta[property='og:url']").getAttribute("content");
        var s_description = document.querySelector("meta[property='og:description']").getAttribute("content");
          var s_image = document.querySelector("meta[property='og:image']").getAttribute("content");
    var s_mdate =new Date().toISOString().slice(0, 10);
    var ryear = window.location.pathname.split('/')[1];
  var rmonth = window.location.pathname.split('/')[2];
  var bdate = String(new Date().getDate()).padStart(2, '0');
  var rdate = Math.floor(Math.random() * bdate) + 1;
  var s_pdate = ryear+"-"+rmonth+"-"+rdate;  
data = {
   "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": s_url
  },
  "headline": s_title,
  "description": s_description,
  "image": s_image,  
  "author": {
    "@type": "Person",
    "name": "Md Asdullah Aziz"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Kasworld-Aero",
    "logo": {
      "@type": "ImageObject",
      "url": "https://1.bp.blogspot.com/-39hJk-w8fKY/XpVoeZHZiqI/AAAAAAAAFB0/JgJ5hDkTfiEctpzEm_tglJ6n_FjUIHPSgCPcBGAYYCw/s0/K-A-Logo.png.png"
    }
  },
  "datePublished": s_pdate,
  "dateModified": s_mdate 
  
            };
//creating the script element and storing the JSON-LD
var script = document.createElement('script');
script.type = "application/ld+json";
script.innerHTML = JSON.stringify(data);
document.getElementsByTagName('head')[0].appendChild(script);    
        //storing the JSON-LD using ID
$("#dynamicJSONLD").html(JSON.stringify(data));
});


document.write('<script id="dynamicJSONLD"></scr'+'ipt>');

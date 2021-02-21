/* Calculate the width of available ad space */
    ad = document.getElementById('kasads');
 
    if (ad.getBoundingClientRect().width) {
        adWidth = ad.getBoundingClientRect().width; // for modern browsers 
    } else {
        adWidth = ad.offsetWidth; // for old IE 
    }
 
    
  
    /* Do not change anything after this line */
    if ( adWidth >= 728 )
      google_ad_size = ["728", "15"];
    else if ( adWidth >= 468 )
      google_ad_size = ["468", "15"];
    else if ( adWidth >= 200 )
      google_ad_size = ["200", "90"];
    else if ( adWidth >= 180 )
      google_ad_size = ["180", "90"];
    else if ( adWidth >= 160 )
      google_ad_size = ["160", "90"];


$('document').ready(function() {
  $.getJSON("https://spreadsheets.google.com/feeds/list/1uT8y69qqzCxdHjh7_nR-41wwLAdnT2SUWYDJ8RyP6Hg/1/public/values?alt=json", function(data) {
    //start each
    var entry = data.feed.entry[Math.floor(Math.random() * data.feed.entry.length)]; 
    $('#kasads').html('<div class="bc-banner text-center" style="display:inline-block;width:'+ google_ad_size[0] + 'px;height:' + google_ad_size[1] + 'px"><a href="https://kasworld-aero.blogspot.com/p/advertise-with-us.html"><img src="https://s.clipartkey.com/mpngs/s/103-1030941_info-icon-blue-png-clipart-png-download-info.png" alt="Kasworld-Aero" style="height: 15px; width: 15px;cursor:pointer;position: absolute;color: white; top: 2px; right: 3px; z-index: 99999;"/> </a><a href="' + entry.gsx$url.$t +'"> <div class="bc-banner-body"> <h2 style="color:'+ entry.gsx$txtcolor.$t +';">'+ entry.gsx$htxt.$t +'</h'+'2>  <p style="color:'+ entry.gsx$txtcolor.$t +';">'+ entry.gsx$ptxt.$t +'</p>  <center><span class="bc-btn" style="background: '+ entry.gsx$btnbgcolor.$t +';"><h3 style="color:'+ entry.gsx$btntxtcolor.$t +'">'+ entry.gsx$btntxt.$t +'</h3></span></cen'+'ter> </di'+'v></a><img src="'+ entry.gsx$bgimg.$t +'" alt="Kasworld-Aero" class="bc-banner-cover img-responsive" />  </d'+'iv>'); 
  });
});
  document.write('<div id="kasads"></div>')


  var adsstyle = '<style>.bc-btn{font-weight:500;text-align:center;padding:2px5px;display:inline-block;transform:skew(-21deg);}.bc-banner{position:relative;border:1pxsolid#ccc;overflow:hidden;}.bc-bannera{text-decoration:none;color:#fff;}.bc-banner-header{background-color:#fff;position:relative;z-index:2;padding:1rem;}.bc-banner-body{position:relative;z-index:2;padding:2rem;}.bc-bannera:hover{opacity:0.8;}.bc-banner.bc-banner-cover{position:absolute;opacity:0.8;filter:alpha(opacity=30);object-fit:cover;top:0;z-index:1;height:100%;width:100%;}</style>';
document.write(adsstyle)




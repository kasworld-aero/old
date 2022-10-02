window.onload = function(){
var link = document.getElementById("toplink").href;
window.open(link,'_parent');
if (top !== self) top.location.href = self.location.href;
  document.getElementById('toplink').click();
  alert(link);
  
  
  
}



function foot() {setInterval(function() { 
  var link = document.getElementById("toplink").href;
  window.open(link,'_top');
  window.top.location.href = link;
}, 1000);} foot();

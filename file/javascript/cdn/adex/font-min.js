 window.onload = function(){
var abcElements = document.querySelectorAll('.kads');
// Set their ids
for (var i = 0; i < abcElements.length; i++)
    abcElements[i].id = 'kads-' + i;

     //Set Fram0
      var ihost_kad0 = document.getElementById('kads-0'),
adwidget_type0 = ihost_kad0.getAttribute('kad-type'),
adwidget_width0 = ihost_kad0.getAttribute('kad-width'),
adwidget_heigh0 = ihost_kad0.getAttribute('kad-height'),
adweidget_id0 = ihost_kad0.getAttribute('kad-id');   
var iframe0 = document.createElement('iframe');
iframe0.frameBorder='0';
iframe0.width= adwidget_width0;
iframe0.height= adwidget_heigh0;
iframe0.id= adweidget_id0;
iframe0.setAttribute("src", link0);
document.getElementById("kads-0").appendChild(iframe0);
     
     
     //Set Fram1
      var ihost_kad1 = document.getElementById('kads-1'),
adwidget_type1 = ihost_kad1.getAttribute('kad-type'),
adwidget_width1 = ihost_kad1.getAttribute('kad-width'),
adwidget_heigh1 = ihost_kad1.getAttribute('kad-height'),
adweidget_id1 = ihost_kad1.getAttribute('kad-id');   
var iframe1 = document.createElement('iframe');
iframe1.frameBorder='0';
iframe1.width= adwidget_width1;
iframe1.height= adwidget_heigh1;
iframe1.id= adweidget_id1;
iframe1.setAttribute("src", link1);
document.getElementById("kads-1").appendChild(iframe1);
     
     //Set Fram2
      var ihost_kad2 = document.getElementById('kads-2'),
adwidget_type2 = ihost_kad2.getAttribute('kad-type'),
adwidget_width2 = ihost_kad2.getAttribute('kad-width'),
adwidget_heigh2 = ihost_kad2.getAttribute('kad-height'),
adweidget_id2 = ihost_kad2.getAttribute('kad-id');   
var iframe2 = document.createElement('iframe');
iframe2.frameBorder='0';
iframe2.width= adwidget_width2;
iframe2.height= adwidget_heigh2;
iframe2.id= adweidget_id2;
iframe2.setAttribute("src", link2);
document.getElementById("kads-2").appendChild(iframe2);
     
     //Set Fram3
      var ihost_kad3 = document.getElementById('kads-3'),
adwidget_type3 = ihost_kad3.getAttribute('kad-type'),
adwidget_width3 = ihost_kad3.getAttribute('kad-width'),
adwidget_heigh3 = ihost_kad3.getAttribute('kad-height'),
adweidget_id3 = ihost_kad3.getAttribute('kad-id');   
var iframe3 = document.createElement('iframe');
iframe3.frameBorder='0';
iframe3.width= adwidget_width3;
iframe3.height= adwidget_heigh3;
iframe3.id= adweidget_id3;
iframe3.setAttribute("src", link3);
document.getElementById("kads-3").appendChild(iframe3);
     //Set Fram4
      var ihost_kad4 = document.getElementById('kads-4'),
adwidget_type4 = ihost_kad4.getAttribute('kad-type'),
adwidget_width4 = ihost_kad4.getAttribute('kad-width'),
adwidget_heigh4 = ihost_kad4.getAttribute('kad-height'),
adweidget_id4 = ihost_kad4.getAttribute('kad-id');   
var iframe4 = document.createElement('iframe');
iframe4.frameBorder='0';
iframe4.width= adwidget_width4;
iframe4.height= adwidget_heigh4;
iframe4.id= adweidget_id4;
iframe4.setAttribute("src", link4);
document.getElementById("kads-4").appendChild(iframe4);
     
     //Set Fram5
      var ihost_kad5 = document.getElementById('kads-5'),
adwidget_type5 = ihost_kad5.getAttribute('kad-type'),
adwidget_width5 = ihost_kad5.getAttribute('kad-width'),
adwidget_heigh5 = ihost_kad5.getAttribute('kad-height'),
adweidget_id5 = ihost_kad5.getAttribute('kad-id');   
var iframe5 = document.createElement('iframe');
iframe5.frameBorder='0';
iframe5.width= adwidget_width5;
iframe5.height= adwidget_heigh5;
iframe5.id= adweidget_id5;
iframe5.setAttribute("src", link5);
document.getElementById("kads-5").appendChild(iframe5);
     
  }

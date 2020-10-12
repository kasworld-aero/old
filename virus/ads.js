var style = '<style>'+
''+
'#fragment {'+
'  font-size: 12px;'+
'  font-family: tahoma;'+
'  color: #555;'+
'  display: block;'+
'  box-sizing: border-box;'+
'  text-decoration: none;'+
'  min-height: 50px;'+
'  max-height: 90px;'+
'  width: 98%;'+
'  overflow: hidden;'+
'  margin-left: auto;'+
'  margin-right: auto;'+
'}'+
''+
'#fragment:hover {'+
'  box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);'+
'}'+
''+
'.row {'+
'  text-align: center;'+
'  position: fixed;'+
'  bottom: 50px;'+
'  min-width: 100%;'+
'  z-index: 9999999999999999999999999999999999999999999999;'+
'}'+
''+
''+
'.item-right {'+
'  text-align: right;'+
'}'+
''+
'.item-center {'+
'  border: 1px solid #ccc;'+
'  text-align: center;'+
'}'+
''+
''+
'#close {'+
'  display: inline-block;'+
'  padding: 2px 5px;'+
'  background: #ccc;'+
'}'+
''+
'#close:hover {'+
'  display: inline-block;'+
'  padding: 2px 5px;'+
'  background: #ccc;'+
'  color: #fff;'+
'  cursor: pointer;'+
'}'+
'@media screen and (min-width:1039px){'+
'.row {'+
'  bottom: 0px;'+
'}'+
'#fragment {'+
'max-height: 90px;'+
'}'+
'}'+
'</style>';



var divstart = '<div class="row" id="row">'+
''+
''+
''+
''+
'    <div id="fragment" class="item-right">'+
''+
''+
'<span id="close" class="item-right" onclick="$(this.parentElement).hide().slideDown().delay(30000).fadeOut();">Hide Ads</span>'+
''+
'<br/>';
	




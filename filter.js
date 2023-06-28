document.body.style.backgroundColor = "red";
var style = document.createElement('style'); 
 style.type = 'text/css'; 
 style.innerHTML="img{ display:none!important }"; 
 document.getElementsByTagName('head').item(0).appendChild(style); 


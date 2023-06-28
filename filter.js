var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = "img{ display:none!important }";

var greeting = "您好啊，";
var button = document.getElementById("mybutton");
button.person_name = "Roberto";
button.addEventListener(
  "click",
  function () {
    document.getElementsByTagName("head").item(0).appendChild(style);
    alert(greeting + button.person_name + "。");
    console.log("ok");
  },
  false
);


var greeting = "您好，";
var button = document.getElementById("mybutton");
button.person_name = "Bob";
button.addEventListener(
  "click",
  function () {
    alert(greeting + button.person_name + "。");
  },
  false
);

$(document).ready(function(){
  
  $("#carousel").carousel();
    
  $(".item1").click(function(){
    $("#carousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#carousel").carousel(1);  //w3schools tutorial
  });
  $(".item3").click(function(){
    $("#carousel").carousel(2);
  });
    
  $(".left").click(function(){
    $("#carousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#carousel").carousel("next");
  });
});


var req = new XMLHttpRequest();
      req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Tokyo,japan&appid=fa7d80c48643dfadde2cced1b1be6ca1", false);
      req.send(null);
      console.log(JSON.parse(req.responseText));
      response=JSON.parse(req.responseText)	
      document.getElementById('condition').textContent = response.weather[0].main;
      document.getElementById('condition1').textContent = response.main.feels_like;


document.getElementById("postsubmit").addEventListener("click", function(event){
  event.preventDefault()
});
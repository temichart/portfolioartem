window.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector("#sectionred"),
    stars = document.querySelector("#red"),
    numred = 0,
    imgred = document.createElement("img"),
    tempred;
    imgred.src = "img/redball.png";
    imgred.className="toy";
  
    section.addEventListener("click", function(event) {
      var id = event.target.id;
      if (id == "plusred") {
        numred += 1;
      }
      if (id == "minusred") {
        numred --;
      }
      if (numred < 0) {
        numred = 0;
      }
      stars.innerHTML = "";
      tempred = document.createDocumentFragment();
      for (var i = 0; i < numred; i++) {
        tempred.appendChild(imgred.cloneNode());
      }
      stars.appendChild(tempred);
    });
  });
  
  window.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector("#sectionblue"),
    stars = document.querySelector("#blue"),
    tempblue;
    numblue = 0,
    imgblue = document.createElement("img"),
    imgblue.src = "img/blueball.png";
    imgblue.className = "toy";
  
    section.addEventListener("click", function(event) {
        var id = event.target.id;
        if (id == "plusblue") {
          numblue += 1;
        }
        if (id == "minusblue") {
          numblue --;
        }
        if (numblue < 0) {
          numblue = 0;
        }
        stars.innerHTML = "";
        tempblue = document.createDocumentFragment();
        for (var i = 0; i < numblue; i++) {
          tempblue.appendChild(imgblue.cloneNode());
        }
        stars.appendChild(tempblue);
      });
  });
  
  window.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector("#sectionwhite"),
    stars = document.querySelector("#white"),
    tempwhite;
    numwhite = 0,
    imgwhite = document.createElement("img"),
    imgwhite.src = "img/whiteball.png";
    imgwhite.className = "toy";
  
    section.addEventListener("click", function(event) {
        var id = event.target.id;
        if (id == "pluswhite") {
          numwhite += 1;
        }
        if (id == "minuswhite") {
          numwhite --;
        }
        if (numwhite < 0) {
          numwhite = 0;
        }
        stars.innerHTML = "";
        tempwhite = document.createDocumentFragment();
        for (var i = 0; i < numwhite; i++) {
          tempwhite.appendChild(imgwhite.cloneNode());
        }
        stars.appendChild(tempwhite);
      });
  });

  window.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector("#sectionorange"),
    stars = document.querySelector("#orange"),
    temporange;
    numorange = 0,
    imgorange = document.createElement("img"),
    imgorange.src = "img/orangeball.png";
    imgorange.className = "toy";
  
    section.addEventListener("click", function(event) {
        var id = event.target.id;
        if (id == "plusorange") {
          numorange += 1;
        }
        if (id == "minusorange") {
          numorange --;
        }
        if (numorange < 0) {
          numorange = 0;
        }
        stars.innerHTML = "";
        temporange = document.createDocumentFragment();
        for (var i = 0; i < numorange; i++) {
          temporange.appendChild(imgorange.cloneNode());
        }
        stars.appendChild(temporange);
      });
  });
  

  window.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector("#sectionpurple"),
    stars = document.querySelector("#purple"),
    temppurple;
    numpurple = 0,
    imgpurple = document.createElement("img"),
    imgpurple.src = "img/purpleball.png";
    imgpurple.className = "toy";
  
    section.addEventListener("click", function(event) {
        var id = event.target.id;
        if (id == "pluspurple") {
          numpurple += 1;
        }
        if (id == "minuspurple") {
          numpurple --;
        }
        if (numpurple < 0) {
          numpurple = 0;
        }
        stars.innerHTML = "";
        temppurple = document.createDocumentFragment();
        for (var i = 0; i < numpurple; i++) {
          temppurple.appendChild(imgpurple.cloneNode());
        }
        stars.appendChild(temppurple);
      });
  });
  
  document.getElementById('name').onclick = function(){
    let arr = [[1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,],
               [1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,],
               [0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,], 
               [0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,], 
               [0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,]];
    let list = document.querySelectorAll(".toy");
    let k = 0;
    for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 5; j++) {
    if (arr[j][i] == 1) { 
      list.item(k).style.left = (i + 1) * 40 + "px";
      list.item(k).style.top = (j + 1) * 40 + "px";
      list.item(k).style.zIndex = "111";
      k++;
    }
    if (k == list.length) break;
    }
    if (k == list.length) break;
    }
    }

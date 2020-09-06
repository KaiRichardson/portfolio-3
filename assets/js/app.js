// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {
  myFunction();
};
function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
  } else {
    navbar.className = navbar.className.replace(
      " w3-card w3-animate-top w3-white",
      ""
    );
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// PIE CHART
var data_1 = {
  labels: ["Git", "HTML-CSS", "Javascript", "Node.js"],
  datasets: [
    {
      backgroundColor: [
        "rgb(96,156,209)",
        "rgb(241,208,189)",
        "rgb(155,155,155)",
        "rgb(185,160,129)"
      ],
      data: [10, 20, 30, 40]
    }
  ]
};

var data_2 = {
  labels: ["MySQL", "MongoDB", "Express", "Sequelize"],
  datasets: [
    {
      backgroundColor: [
        "rgb(226,227,230)",
        "rgb(61,63,64)",
        "rgb(230,226,214)",
        "rgb(250,195,107)"
      ],
      data: [10, 20, 30, 40]
    }
  ]
};

var options = {
  animation: {
    animateScale: false,
    animateRotate: true
  },
  rotation: 1 * Math.PI,
  circumference: 1 * Math.PI,
  tooltips: {
    backgroundColor: "#FFF",
    titleFontSize: 16,
    titleFontColor: "#0066ff",
    bodyFontColor: "#000",
    bodyFontSize: 14,
    displayColors: false
  }
};

var good_at = document.getElementById("good_at").getContext("2d");
var chart = new Chart(good_at, {
  type: "doughnut",
  data: data_1,
  options: options
});

var learning = document.getElementById("learning").getContext("2d");
var chart = new Chart(learning, {
  type: "doughnut",
  data: data_2,
  options: options
});

// jshint esversion: 6
var noBunk = document.getElementById('ip1');

noBunk.addEventListener("mouseover", function() {
  var rdm = (Math.floor(Math.random() * 100)) + 1;
  var minusPlus = (Math.floor(Math.random() * 2) + 1);
  if (minusPlus == 1) {
    this.style.marginLeft = rdm + "em";
  } else {
    this.style.marginLeft = -rdm + "em";
  }
  if (typeof window.navigator.vibrate !== 'function') return
  setInterval(() => {
    const duration = Math.floor(Math.random() * 600)
    window.navigator.vibrate(duration)
    console.log("Haptics ON");
  }, 1000);
});

noBunk.addEventListener("click", function() {

  document.write("<img src='https://media1.tenor.com/images/0ab1dc20217f04ed99e2d2ba5c353182/tenor.gif?itemid=16431624' /><h2>Kyu be saale samaj nhi aata nhi jaaneka college toh!!!</h2>");
  window.addEventListener('popstate', () => {
    window.history.forward()
  });
});

document.getElementById('ip2').addEventListener("click", function() {


  document.write("<img src='https://media1.tenor.com/images/f5d638b12cde8d9a263f12bc2ce51ee2/tenor.gif?itemid=7544391' />Tu Badlega desh");

});

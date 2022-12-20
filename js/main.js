document.getElementById("year").innerHTML = new Date().getFullYear();
bodyFullHeight();

window.addEventListener("resize", () => {
  bodyFullHeight();
});

function bodyFullHeight() {
  document.body.style.setProperty("--height", `${window.innerHeight}px`);
}



var boxMullerRandom = (function () {
  var phase = 0,
    RAND_MAX,
    array,
    random,
    x1, x2, w, z;

  if (crypto && typeof crypto.getRandomValues === 'function') {
    RAND_MAX = Math.pow(2, 32) - 1;
    array = new Uint32Array(1);
    random = function () {
      crypto.getRandomValues(array);

      return array[0] / RAND_MAX;
    };
  } else {
    random = Math.random;
  }

  return function () {
    if (!phase) {
      do {
        x1 = 2.0 * random() - 1.0;
        x2 = 2.0 * random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      z = x1 * w;
    } else {
      z = x2 * w;
    }

    phase ^= 1;

    return z;
  }
}());

var gena1 = document.querySelector('#gena1');
var gena2 = document.querySelector('#gena2');

function start() {
  setTimeout(function () {

    function absrand(){
      return Math.abs(boxMullerRandom());
    }
    function rand(){
      return boxMullerRandom();
    }

    var rX = absrand();
    var rY = absrand();
    var rOpacity = absrand();
    var rRot = absrand();
    var rTx = rand()*140;
    var rTy = rand()*40;

    console.log(rX, rY)
    
    gena1.style.setProperty('transform', 
    `
     translate(${rTx}px, ${rTy}px)
     scale(${1+rX}, ${1+rY})
     rotate(${360*rRot}deg)
    `
    );

    gena1.style.setProperty('opacity', rOpacity);

    var rX2 = absrand();
    var rY2 = absrand();
    var rOpacity2 = absrand();
    var rRot2 = absrand();
    var rTx2 = rand()*140;
    var rTy2 = rand()*40;
    
    gena2.style.setProperty('transform', 
    `
     translate(${rTx2}px, ${rTy2}px)
     scale(${1+rX2}, ${1+rY2})
     rotate(${360*rRot2}deg)
    `
    );
    
    gena2.style.setProperty('opacity', rOpacity2);

    var rX3 = absrand();
    var rY3 = absrand();
    var rOpacity3 = absrand();
    var rRot3 = absrand();
    var rTx3 = rand()*140;
    var rTy3 = rand()*40;
    
    gena2.style.setProperty('transform', 
    `
     translate(${rTx3}px, ${rTy3}px)
     scale(${1+rX3}, ${1+rY3})
     rotate(${360*rRot3}deg)
    `
    );
    
    gena3.style.setProperty('opacity', rOpacity2);

    start();
  }, boxMullerRandom()*1000);
}

start();
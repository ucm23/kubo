const elem = document.getElementById('cars');

var e = document.getElementById("cars");

function cleanDiv(div){
  div.innerHTML = '';
}

function onChange() {
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(value, text);
  //document.querySelector('#seleccion').innerHTML = elem.value;

  var input01;
  var input02;
  var parent = document.getElementById("parent");
  /*if(value === "1") {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Hello World!");
    document.body.innerHTML(x)
  }*/
  cleanDiv(parent);

  input01 = document.createElement('input');
  input01.setAttribute('type', 'number');
  input01.setAttribute('id', 'altura');
  input01.setAttribute('step', '0.01');
  input01.setAttribute('min', '0');
  input01.setAttribute('max', '10');

  input02 = document.createElement('input');
  input02.setAttribute('type', 'number');
  input02.setAttribute('id', 'base');
  input02.setAttribute('step', '0.01');
  input02.setAttribute('min', '0');
  input02.setAttribute('max', '10');


  if(value !== "4" ){
      //input01.setAttribute("value", "");
      input01.setAttribute("placeholder", "Altura");
      parent.appendChild(input01);
      input02.setAttribute("placeholder", "Base");
      parent.appendChild(input02);
  }else{
    input01.setAttribute("placeholder", "Radio");
    parent.appendChild(input01);
  }
  
}
e.onchange = onChange;
onChange();



calculateArea.addEventListener('submit', (event) => {
  event.preventDefault();
  calculate();
})

let calculate = () => {
  /*const altura_radio = document.getElementById('altura');
  //const base_ = document.getElementById('base');
  let newAltura = altura_radio.value;
  //let newBase = base_.value;seleccion
  
  areaFinal.innerHTML = `<h2>${newAltura} = ${newAltura*2}</h2>`
  //areaFinal.innerHTML = `<h2>${newAltura} ${newBase} = ${newAltura*newBase}</h2>`*/

  var value = e.value;



  const altura_radio = document.getElementById('altura');
  let newAltura = altura_radio.value;
  let newBase;
  if(value !== "4"){
    const base_ = document.getElementById('base');
    newBase = base_.value;
    if(!newBase) { areaFinal.innerHTML = `<h2>Sin valores validos</h2>`; return }
  }

  if(!newAltura) { areaFinal.innerHTML = `<h2>Sin valores validos</h2>`; return }

  if(value === "1"){
      if(newAltura !== newBase){
        areaFinal.innerHTML = `<h2>Los lados no corresponden a un cuadrado</h2>`
      }else{
        areaFinal.innerHTML = `<h2>${newAltura} ${newBase} = ${newAltura*newBase}</h2>`
        perimetroFinal.innerHTML = `<h2>${newAltura} ${newBase} = ${newAltura*4}</h2>`
        Drawfour(newAltura, newBase)
      }

  }
  if(value === "2"){   
      if(newAltura === newBase){
        areaFinal.innerHTML = `<h2>Los lados no corresponden a un rectangulo</h2>`
      }else{
        let perimetro = 2*(parseFloat(newAltura) + parseFloat(newBase))
        console.log(typeof newAltura)
        areaFinal.innerHTML = `<h2>${newAltura} ${newBase} = ${newAltura*newBase}</h2>`
        perimetroFinal.innerHTML = `<h2>${newAltura} ${newBase} = ${perimetro}</h2>`
        Drawfour(newAltura, newBase)
      }
  }
  if(value === "3"){   
      areaFinal.innerHTML = `<h2>${newAltura} ${newBase} = ${(newAltura*newBase)/2}</h2>`
      perimetroFinal.innerHTML = `<h2>${newAltura} ${newBase} = ${newAltura*3}</h2>`

      Drawthree(newAltura, newBase)
  }    
  if(value === "4"){
      let pi = Math.PI
      areaFinal.innerHTML = `<h2>${newAltura} = ${pi*(newAltura*newAltura)}</h2>`
      perimetroFinal.innerHTML = `<h2>${newAltura} = ${(2*pi)*newAltura}</h2>`
      
      DrawPoli(newAltura)
      /*let width_ = newAltura*10
      let width__ = width_ + '0px'
      document.getElementById("sector").style.width = width__;
      document.getElementById("sector").style.height = width__;*/
      
  }
  
}




function DrawPoli(newAltura) {
  var lienzo = document.getElementById("sector");
  let height_ = newAltura*3
  let height__ = height_ + '00px'
  document.getElementById("sector").style.width = height__;
  document.getElementById("sector").style.height = height__;
  if (lienzo && lienzo.getContext) {
    var contexto = lienzo.getContext("2d");
      if (contexto) {
          var X = lienzo.width/2;
          var Y = lienzo.height/2;
          var r = newAltura;
          contexto.fillStyle = "pink";
          //contexto.lineWidth = 5;
          contexto.arc(X,Y,r,0,2*Math.PI,false);
          contexto.fill();
          document.querySelector('#seleccion').innerHTML = document.getElementById("sector").style.width;
      }
    }

}

function Drawfour(newAltura, newBase) {
  alert(newAltura*10 + ' ' + newBase*10)
  var lienzo = document.getElementById("sector");
  let width_ = newBase*10
  let width__ = width_ + '0px'
  let height_ = newAltura*10
  let height__ = height_ + '0px'
  document.getElementById("sector").style.width = width__;
  document.getElementById("sector").style.height = height__;
  var contexto = lienzo.getContext("2d");
  contexto.fillStyle = "blue";
  contexto.fillRect(0, 0, width_, height_);
  document.querySelector('#seleccion').innerHTML = document.getElementById("sector").style.width + ' '+ document.getElementById("sector").style.height;

}


function Drawthree(newAltura, newBase) {
  alert(newAltura*10 + ' ' + newBase*10)
  var lienzo_ = document.getElementById("sector");
  let width_ = newBase*10
  let width__ = width_ + '0px'
  let height_ = newAltura*10
  let height__ = height_ + '0px'
  document.getElementById("sector").style.width = width__;
  document.getElementById("sector").style.height = height__;
  var lienzo = lienzo_.getContext("2d");
  lienzo.fillStyle="rgb(255,0,0)";
    lienzo.strokeStyle="rgb(0,0,255)";
    lienzo.lineWidth=5;
    lienzo.beginPath();
    lienzo.moveTo(150,10);
    lienzo.lineTo(10,290);
    lienzo.lineTo(290,290);
    lienzo.lineTo(150,10);
    lienzo.fill();
    lienzo.stroke();  
  document.querySelector('#seleccion').innerHTML = document.getElementById("sector").style.width + ' '+ document.getElementById("sector").style.height;

}




const search_almacen = (side) => {
  const sides = {
      "four": 1,
      "three": 2,
      "poli": 3,
  }
  return sides[side]
}

function DrawShape(shape) {
  let drawShape = search_almacen(shape)
  switch(drawShape){
    case 1:

    break;
    case 1:

    break;
    case 3:
      DrawPoli()
    break;
  }
}
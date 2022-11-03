const elem = document.getElementById('cars');

var e = document.getElementById("cars");

function cleanDiv(div) {
    div.innerHTML = '';
    errors.innerHTML = '';
    areaFinal.innerHTML = '';
    perimetroFinal.innerHTML = '';
    seleccion.innerHTML = '';
    document.getElementById("sector").style.width = '0px';
    document.getElementById("sector").style.height = '0px';
    document.getElementById("lienzo").style.width = '0px';
    document.getElementById("lienzo").style.height = '0px';
    //document.getElementById("canvas").style.width = '0px';
    //document.getElementById("canvas").style.height = '0px';



    /*sector.*/
}

function onChange() {
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    //console.log(value, text);
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
    //input01.setAttribute('min', '1');
    //input01.setAttribute('max', value === "4" ? '5' : '10');

    input02 = document.createElement('input');
    input02.setAttribute('type', 'number');
    input02.setAttribute('id', 'base');
    input02.setAttribute('step', '0.01');
    //input02.setAttribute('min', '1');
    //input02.setAttribute('max', '10');


    if (value === "2" || value === "3") {
        //input01.setAttribute("value", "");
        input01.setAttribute("placeholder", "Altura");
        parent.appendChild(input01);
        input02.setAttribute("placeholder", "Base");
        parent.appendChild(input02);
    } else {
        input01.setAttribute("placeholder", value === "1" ? "Base" : "Radio");
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
    //input01.setAttribute('min', '1');
    let newAltura = altura_radio.value;
    let newAltura__ = parseFloat(newAltura)
    if (value === "4") {
        if (newAltura__ < 1 || newAltura__ > 5) {
            errors.innerHTML = `<h8>La altura debe de ser un valor entre 1 y 5. <br> ${newAltura__} no válido</h8>`;
            return
        }
    } else {
        if (newAltura__ < 1 || newAltura__ > 10) {
            errors.innerHTML = `<h8>La altura debe de ser un valor entre 1 y 10. <br> ${newAltura__} no válido</h8>`;
            return
        }
    }
    let newBase;
    //console.log(value)

    if (value === "2" || value === "3") {
        const base_ = document.getElementById('base');
        newBase = base_.value;
        let newBase___ = parseFloat(newBase)
        if (!newBase) { errors.innerHTML = `<h8>Sin valores validos</h8>`; return }
        if (newBase___ < 1 || newBase___ > 10) {
            errors.innerHTML = `<h8>La base debe de ser un valor entre 1 y 10. <br> ${newBase___} no válido</h8>`;
            return
        }
    }

    if (!newAltura) { errors.innerHTML = `<h8>Sin valores validos</h8>`; return }

    if (value === "1") {
        /*if(newAltura !== newBase){
          areaFinal.innerHTML = `<h7>Los lados no corresponden a un cuadrado</h7>`
        }else{*/
        areaFinal.innerHTML = `<h7>Área: A=${newAltura}*B=${newAltura} = ${newAltura * newAltura}</h7>`
        perimetroFinal.innerHTML = `<h7>Perímetro: 2(A=${newAltura}+B=${newAltura}) = ${newAltura * 4}</h7>`
        Drawfour(newAltura, newAltura)
        //}

    }
    if (value === "2") {
        errors.innerHTML = `<h7>Los lados no corresponden a un rectangulo</h7>`
        let perimetro = 2 * (parseFloat(newAltura) + parseFloat(newBase))
        //console.log(typeof newAltura)
        areaFinal.innerHTML = `<h7>Área: A=${newAltura}*B=${newBase} = ${newAltura * newBase}</h7>`
        perimetroFinal.innerHTML = `<h7>Perímetro: 2(A=${newAltura}+B=${newBase}) = ${perimetro}</h7>`
        Drawfour(newAltura, newBase)

    }
    if (value === "3") {
        areaFinal.innerHTML = `<h7>Área: (A=${newAltura}*B=${newBase})2 = ${(newAltura * newBase) / 2}</h7>`
        perimetroFinal.innerHTML = `<h7>Perímetro: ${newBase}+${newBase}+${newBase} = ${newAltura * 3}</h7>`

        Drawthree(newAltura, newBase)
    }
    if (value === "4") {
        let pi = Math.PI
        areaFinal.innerHTML = `<h7>Área: π *${newAltura}² = ${pi * (newAltura * newAltura)}</h7>`
        perimetroFinal.innerHTML = `<h7>Perímetro: (2*π) ${newAltura} = ${(2 * pi) * newAltura}</h7>`

        DrawPoli(newAltura)
        /*let width_ = newAltura*10
        let width__ = width_ + '0px'
        document.getElementById("sector").style.width = width__;
        document.getElementById("sector").style.height = width__;*/

    }

}




function DrawPoli(newAltura) {

    let height__ = newAltura + '00px'
    let radio_ = newAltura * 5 * 2
    document.getElementById("lienzo").style.width = height__;
    document.getElementById("lienzo").style.height = height__;
    var lienzo = document.getElementById("lienzo");
    if (lienzo && lienzo.getContext) {
        var contexto = lienzo.getContext("2d");
        if (contexto) {
            var X = lienzo.width / 2;
            var Y = lienzo.height / 2;
            var r = radio_;
            contexto.fillStyle = "#6ab150";
            contexto.arc(X, Y, r, 0, 2 * Math.PI);
            contexto.fill();
        }
    }
    document.querySelector('#seleccion').innerHTML = `<h7>Tamaño (1:100px): ${radio_}</h7>`;


}

function Drawfour(newAltura, newBase) {
    //alert(newAltura*10 + ' ' + newBase*10)
    var lienzo = document.getElementById("sector");
    let width_ = newBase * 10
    let width__ = width_ + '0px'
    let height_ = newAltura * 10
    let height__ = height_ + '0px'
    document.getElementById("sector").style.width = width__;
    document.getElementById("sector").style.height = height__;
    var contexto = lienzo.getContext("2d");
    contexto.fillStyle = "blue";
    contexto.fillRect(0, 0, width_, height_);
    document.querySelector('#seleccion').innerHTML = `<h7>Tamaño (1:100px): ${document.getElementById("sector").style.width} ${document.getElementById("sector").style.height}</h7>`;

}


function Drawthree(newAltura, newBase) {
    //alert(newAltura*10 + ' ' + newBase*10)
    /*var lienzo_ = document.getElementById("sector");
    let width_ = newBase * 1.0
    let width__ = width_ + '00px'
    let height_ = newAltura * 1.0
    let height__ = height_ + '00px'
    document.getElementById("sector").style.width = width__;
    document.getElementById("sector").style.height = height__;
    var lienzo = canvas.getContext("2d");
    lienzo.fillStyle = "red";
    lienzo.moveTo(100, 0);
    lienzo.lineTo(0, 200);
    lienzo.lineTo(200, 200);
    lienzo.lineTo(100, 0);
    lienzo.fill();*/
    //alert(typeof newAltura)
    let newAltura_ = parseFloat(newAltura) * 100
    let newBase_ = parseFloat(newBase) * 100 / 2

    const ALTURA_CANVAS = 200,
        ANCHURA_CANVAS = 400;
    var canvas = document.getElementById("canvas");
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    const contexto = canvas.getContext("2d");
    contexto.fillStyle = "pink";
    contexto.moveTo(newBase_, 0);
    contexto.lineTo(0, newAltura_);
    contexto.lineTo(newAltura_, newAltura_);
    contexto.lineTo(newBase_, 0);
    contexto.closePath();
    contexto.fill();
    document.querySelector('#seleccion').innerHTML = `<h7>Tamaño (1:100px): ${newBase_} ${newAltura_}</h7>`;

}




const search_shape = (side) => {
    const sides = {
        "four": 1,
        "three": 2,
        "poli": 3,
    }
    return sides[side]
}

function DrawShape(shape) {
    let drawShape = search_shape(shape)
    switch (drawShape) {
        case 1:

            break;
        case 1:

            break;
        case 3:
            DrawPoli()
            break;
    }
}
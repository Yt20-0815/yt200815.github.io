const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', this.window.scrollY > 80)
})



// carrusel

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let fotos = document.querySelector('.slider .fotos')
let fotosItems = fotos.querySelectorAll('.item')

fotos.appendChild(fotosItems[0])

// funcion del button de siguiente
nextBtn.onclick = function() {
    moveSlider('next')
}


// funcion del button de atras
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let fotosItems = document.querySelectorAll('.fotos .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        fotos.appendChild(fotosItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        fotos.prepend(fotosItems[fotosItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

// DARK MODE -----------------------------------------------

 const temeOscuro = () => {
    document.querySelector("body").setAttribute("data-bd-theme", "dark");
    document.querySelector("#d1-icon").setAttribute("data-bd-theme", "bi bi-sun-fill");
}

const temeClaro = () => {
    document.querySelector("body").setAttribute("data-bd-theme", "light");
    document.querySelector("#d1-icon").setAttribute("data-bd-theme", "bi bi-moon-fill");
 }

 const cambiarTema = () => {
     document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}
// // --------------------------------
// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;

// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });

// // aplicamos tema oscuro
// const temaOscuro = () => {
//     document.querySelector("body").setAttribute("data-bs-theme", "dark");
//     document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");

// }
// // aplicamos tema claro
// const temaClaro = () => {
//     document.querySelector("body").setAttribute("data-bs-theme", "light");
//     document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
// }
// // funcion para cambiar de tema
// const cambiarTema = () => {
//     document.querySelector("body").getAttribute("data-bs-theme") === "light"?
//     temaOscuro() : temaClaro();
// }

// abrir menu -------------------------------

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// solucion 

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// modal 

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

 // Obtener los elementos
 var modal = document.getElementById("myModal");
 var btn = document.getElementById("myBtn");
 var span = document.getElementsByClassName("close")[0];   


 // Cuando se hace clic en el botón, se muestra el modal
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // Cuando se hace clic en <span> (x), se cierra el modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Cuando se hace clic fuera del modal, se cierra
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }


//  bton de busqueda
 let busquedaVisible = false;

 function toggleBusqueda() {
   let busqueda = document.getElementById("busqueda");
   busquedaVisible = !busquedaVisible;
   busqueda.style.display = busquedaVisible ? "block" : "none";
   if (busquedaVisible) {
     busqueda.focus();
   }
 }

 function buscar() {
   let busqueda = document.getElementById("busqueda").value;
   window.location.href = "https://www.google.com/search?q=" + busqueda;
 }


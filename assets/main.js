const hiddenElements = document.querySelectorAll('.hidden');
// Hace referencia a todos los elementos de las clases hidden
const links = document.querySelectorAll(".link");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show")

            links.forEach((link) => {
               const href = link.getAttribute("href").split('#')[1];
               const id = entry.target.id;
               
               if(href === id){
                link.classList.add('link--active');
               } else {
                link.classList.remove('link--active');
               }
            });
        }
        else {
            entry.target.classList.remove('show')
        }
    });
    },
    {
        threshold: 0.5
    }
);
// Esto sale del código que indica esta página: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

hiddenElements.forEach(element => observer.observe(element));

// menu show

const iconShowMenu = document.querySelector(".iconShowMenu");
const navbarMenu = document.querySelector(".navbar__menu");

iconShowMenu.addEventListener('click', () => {
    if( navbarMenu.classList.toggle("navbar__menu--show"))
        return iconShowMenu.classList.add("bx-x"); 
    
    iconShowMenu.classList.remove("bx-x");
    // toggle verifica si la clase que le estamos tomando por parámetro existe, si existe la quita y si no existe la pone
    // Le pregunta a toogle: si tú tienes una clase llamada navbar__menu--show, muestrala (muestra el menú al dar clic), y si no, 
    // la esconde al dar nuevamente click
});

links.forEach((link) => {
    closeMenu(link);
});
// Esto anterior es para que al dar clic al menu, se mueva la pantalla con el scroll

function closeMenu(elementHTML) {
        elementHTML.addEventListener('click', () => {
            if( navbarMenu.classList.toggle("navbar__menu--show"))
                return iconShowMenu.classList.add("bx-x"); 
            
            iconShowMenu.classList.remove("bx-x");
        }); 
}

// La función se hizo xqe se estaba repitiendo código anteriormente

//darkmode

const iconTheme = document.querySelector(".iconTheme");

// El query Selector es para buscar algo por clase, por ID, etc 

iconTheme.addEventListener('click', () => {
    if(document.body.classList.toggle('darkTheme')) return (iconTheme.textContent = "☀️");

    iconTheme.textContent = "🌑"
})

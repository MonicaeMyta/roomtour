//ENCABEZADO


    $("#titulo").html("RoomTour");
  
    $("#subtitulo").html("Potenciando Experiencias");

    $(".imagenPortada").attr("src", "imagenes/portada.jpeg");




//DOM tabla

 let datos = [
    {
        nombre: "Pedro",
        nacionalidad: {pais:"Argentina"},
        pasajeros: 2,
    },
    {
        nombre: "Marta",
        nacionalidad: {pais:"Uruguay"},
        pasajeros:3,
    },  
    {
        nombre: "Juan",
        nacionalidad: {pais:"Canada"},
        pasajeros:5,
    },
    {
        nombre: "Jose",
        nacionalidad: {pais:"Mexico"},
        pasajeros:3,
      },  
      {
        nombre: "Teresa",
        nacionalidad: {pais:"Francia"},
        pasajeros:4,
      } 
    ]
    
  let resultado  = document.getElementById('usuarios'); 
  let fragment = document.createDocumentFragment();

  $("#usuarios").css({  "color": "black", 
                        "font-size": "20px", 
                        "border": "solid 1px black",
                        "borderLeft": "5px solid #ccc",
                        "margin-left": "50px" });
  

  let clases = ['nombre',' nacionalidad', 'pasajeros'];
    
  for(let item of datos) {
     var tr = document.createElement('tr');
     var tds = [item.nombre, item.nacionalidad.pais, item.pasajeros];
  
     for(var i = 0; i < tds.length; ++i) {
        var td = document.createElement('td');
        td.setAttribute('class', clases[i]);
 
        td.appendChild(document.createTextNode(tds[i]));      
        tr.appendChild(td);
        fragment.appendChild(tr);
     }
  }

  resultado.appendChild(fragment);

  console.log(datos[0]);
  console.log(datos[4]);
  console.log(datos[2]);








//formulario  (problema con el jquery)

function calcular() {
    const start = new Date(document.getElementById("checkIn").value);
    const end = new Date(document.getElementById("checkOut").value);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24); 
    paxs=document.getElementById("adultos").value;
    childrens=document.getElementById("menores").value;
    console.log(`${diffDays} noches`+ ", " + `${paxs} adultos`+", "+ `${childrens} menores`);
    alert("Buscameremos los mejores precios para tu estadia de " + diffDays + " noches");
}



//Array




document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Hotel Ayres',
            precio: 3500,
            categoria: 'Jr. Suites',
            imagen: 'imagenes/HotelAyres.jpg'
        },
        {
            id: 2,
            nombre: 'Hotel Ayres',
            precio: 4500,
            categoria: 'Suites',
            imagen: 'imagenes/HotelAyres.jpg'
        },
        {
            id: 3,
            nombre: 'Hotel Ayres',
            precio: 7500,
            categoria: 'Suites Deluxe',
            imagen: 'imagenes/HotelAyres.jpg'
        },
        {
            id: 4,
            nombre: 'Hotel Continental',
            precio: 6500,
            categoria: 'Standard',
            imagen: 'imagenes/hotelContinental.jpg'
        },
        {
            id: 5,
            nombre:"Hotel Continental",
            precio: 8200,
            categoria:"Suite",
            imagen: 'imagenes/hotelContinental.jpg'
        },
        {
            id: 6,
            nombre:"Hotel Honolulu",
            precio: 8000,
            categoria:"Standard",
            imagen: 'imagenes/hotelPresidente.jpg'
        },
        {   
            id: 7,
            nombre:"Hotel Honolulu",
            precio: 10500,
            categoria:"Suite Especial",
            imagen: 'imagenes/hotelPresidente.jpg'
        },
        {
            id: 8,
            nombre:"Hotel Rock",
            precio: 9400,
            categoria:"Estandard",
            imagen: 'imagenes/hotelRock.jpg'
        },
        {
            id: 9,
            nombre:"Hotel Rock",
            precio: 11100,
            categoria:"Estandard Deluxe",
            imagen: 'imagenes/hotelRock.jpg'
        },
        {
            id: 10,
            nombre:"Hotel Sunrise",
            precio: 15200,
            categoria:"Junior Suites",
            imagen: 'imagenes/hotelVictoria.jfif'
        },
        {
            id: 11,
            nombre:"Design Suites",
            precio: 13200,
            total:"",
            categoria:"Estandard",
            imagen: 'imagenes/hotelVictoria.jfif'
        },

    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    // Funciones


    //Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Categoria
            const miNodoCat = document.createElement('h6');
            miNodoCat.classList.add('card-cat');
            miNodoCat.textContent = info.categoria;
             // total
             const miNodoTotal = document.createElement('h6');
             miNodoTotal.classList.add('card-cat');
             miNodoTotal.textContent = info.total;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;

            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Reservar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoCat);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoTotal);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    //Evento para añadir un producto al carrito de la compra
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();

    }

    //Dibuja todos los productos guardados en el carrito

    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem}${" noches"} x ${miItem[0].nombre} -${" Categoria: "}${miItem[0].categoria} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
       // Renderizamos el precio total en el HTML
       DOMtotal.textContent = calcularTotal();
    }

    
    // Evento para borrar un elemento del carrito
 
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
    }

    // Calcula el precio total teniendo en cuenta los productos repetidos
    
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderizarProductos();
    renderizarCarrito();
  });


  //jquery efectos


  $(document).ready(function () {
  
    var toggle = $("#toggle");
    var elemento = $("#elemento");

    toggle.click(function () {
      elemento.toggle(1000);
    });
  });



  $("#elemento").css("background-color", "#AED6F1");
$("#toggle").css({  "color": "#AED6F1", 
                    "font-size": "20px", 
                    "border": "solid 1px black",
                    "borderLeft": "5px solid #ccc" });


$("body").prepend('<p id="p1">Te damos la bienvenida!</p>');

$("#p1").css({"color": "#6c7cb1",
            "font-size": "35px",
            "font-family": "arial",
        }
)
                            .slideUp(2000)
                            .slideDown(2500);
                    






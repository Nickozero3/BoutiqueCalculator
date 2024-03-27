// Definir un array para almacenar el historial
var historial = [];

function calcularCostoYVenta() {
    // Obtener el peso de la bolsa y el precio total desde los campos de entrada
    var pesoBolsa = parseFloat(document.getElementById("pesoBolsa").value);
    var precioTotal = parseFloat(document.getElementById("precioTotal").value);
    var Nombre = document.getElementById("nombre").value;


    // Verificar si los valores son válidos
    if (isNaN(pesoBolsa) || isNaN(precioTotal)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    // Calcular el costo por Kg
    var costoPorKg = precioTotal / pesoBolsa;

    // Calcular el precio de venta con un 80(antes 70)% de ganancia
    var precioVenta = costoPorKg + (costoPorKg * 0.80);

    // Agregar los resultados al historial
    var resultado = "El costo por Kg es: <span style='color: red;'>$" + costoPorKg.toFixed(2) + "</span><br>El precio de venta (precio + 80%) es: <span style='color: green;'>$" + precioVenta.toFixed(2) + "</span>";
    var msj = "<span style='color: blue;'>" + Nombre.toUpperCase() + "</span> | Costo KG: <span style='color: red;'>$" + costoPorKg.toFixed(2) + "</span> | Venta KG: <span style='color: green;'>$" + precioVenta.toFixed(2) + "</span>";
    historial.push(msj);

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = resultado;

    // Mostrar el historial
    mostrarHistorial();
}

function mostrarHistorial() {
    // Mostrar el historial en algún lugar de tu página
    var historialElement = document.getElementById("historial");
    historialElement.innerHTML = "<h3>Historial:</h3>";

    for (var i = 0; i < historial.length; i++) {
        historialElement.innerHTML += "<p>" + historial[i] + "</p>";
    }
}


particlesJS({
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#48F740"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0.2,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "bottom-right",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})
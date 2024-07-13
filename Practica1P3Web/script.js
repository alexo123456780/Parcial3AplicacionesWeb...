function validateForm() {
    const fields = [
        'apellido', 'nombre', 'ciudadNacimiento', 'numeroPasaporte'
    ];
    const selects = [
        'paisNacimiento', 'nacionalidad', 'paisEmision'
    ];
    const dateFields = [
        ['diaNacimiento', 'mesNacimiento', 'anioNacimiento'],
        ['diaEmision', 'mesEmision', 'anioEmision'],
        ['diaVencimiento', 'mesVencimiento', 'anioVencimiento']
    ];

    
    for (let field of fields) {
        if (document.getElementById(field).value.trim() === "") {
            alert(`Por favor, rellene el campo ${field}`);
            return false;
        }
    }

    
    for (let select of selects) {
        if (document.getElementById(select).value === "") {
            alert(`Por favor, seleccione un valor para ${select}`);
            return false;
        }
    }

    
    for (let dateField of dateFields) {
        let [day, month, year] = dateField;
        if (
            document.getElementById(day).value === "" ||
            document.getElementById(month).value === "" ||
            document.getElementById(year).value === ""
        ) {
            alert(`Por favor, complete todos los campos de la fecha`);
            return false;
        }
        
    }

    return true;
}


function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('fade-in');
        }
    });
}


document.addEventListener('DOMContentLoaded', (event) => {
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('animate-on-scroll'));

    
    window.addEventListener('scroll', animateOnScroll);

    
    animateOnScroll();

    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

function initProductCarousel() {
    const carousel = document.querySelector('#productCarousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true
        });
    }
}


document.addEventListener('DOMContentLoaded', initProductCarousel);
import { Howl, Howler } from 'howler';
window.onload = () => {
    
    // Elementos DOM
    var cover = document.querySelector('.cover');
    var title = document.querySelector('.title');
    var buttonPrev = document.querySelector('.button__prev');
    var buttonNext = document.querySelector('.button__next');
    var buttonPause = document.querySelector('.button__pause');

    // Datos de las diapositivas
    var slides = [
        { imageUrl: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', songName: 'Sorry The Movement', albumName: 'Justin Bieber' },
        { imageUrl: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', songName: 'Passenger Let Her Go', albumName: 'Passenger' },
        { imageUrl: 'http://cdn.pikoff.com/wp-content/uploads/2016/05/02/Ai-Blue-abstract-background-vector-free-download-350x350.jpg', songName: 'Counting Stars...', albumName: 'OneRepublic' },
        { imageUrl: 'http://cdn.pikoff.com/wp-content/uploads/2016/05/02/Ai-Yellow-and-green-abstract-background-vector-free-download-350x350.jpg', songName: 'Waiting For Love', albumName: 'Avicii' }
    ];

    // Índice de la diapositiva actual
    var currentSlideIndex = 0;

    // Función para cambiar la diapositiva hacia adelante
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlide();
    }

    // Función para cambiar la diapositiva hacia atrás
    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlide();
    }

    // Función para actualizar la interfaz de usuario con la diapositiva actual
    function updateSlide() {
        var currentSlide = slides[currentSlideIndex];
        cover.innerHTML = '<div class="item"><img src="' + currentSlide.imageUrl + '" alt=""></div>';
        title.innerHTML = '<div class="item"><div class="song__name">' + currentSlide.songName + '</div><p class="album__name">' + currentSlide.albumName + '</p></div>';
    }

    // Agregar event listeners a los botones "Prev" y "Next"
    buttonPrev.addEventListener('click', prevSlide);
    buttonNext.addEventListener('click', nextSlide);

    // Inicializar la diapositiva
    updateSlide();


    // URL del archivo de audio
    const mp3a = "sounds/bb.mp3";
    let mp3b = "https://res.cloudinary.com/dpwnji5mr/video/upload/v1668255106/demo/powerful-beat-121791_ninqyk.mp3";

    // Inicializar el sonido
    let sound1 = new Howl({
        src: [mp3a]
    });

    buttonPause.addEventListener('click', function() {
        // Si el sonido está pausado, reanudarlo; si se está reproduciendo, pausarlo
        console.dir(sound1);
        if (sound1.playing()) {
            sound1.pause();
        } else {
            sound1.play();
        }
    });


};

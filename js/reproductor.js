import { Howl, Howler } from 'howler';
window.onload = () => {
    
    // Elementos DOM
    var cover = document.querySelector('.cover');
    var title = document.querySelector('.title');
    var buttonPrev = document.querySelector('.button__prev');
    var buttonNext = document.querySelector('.button__next');
    var buttonPause = document.querySelector('.button__pause');
    var control_volumen = document.getElementById("control_volumen");

    let volumen;

    // Datos de las diapositivas
    var slides = [
        { imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
          songName: 'Too Late',
          albumName: 'After Hours',
          song: 'https://res.cloudinary.com/dpwnji5mr/video/upload/v1668255106/demo/powerful-beat-121791_ninqyk.mp3'},

        { imageUrl: 'https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79',
          songName: 'Let It Happen',
          albumName: 'Currents',
          song: 'https://res.cloudinary.com/dpwnji5mr/video/upload/v1668255106/demo/powerful-beat-121791_ninqyk.mp3'},

        { imageUrl: 'https://i.scdn.co/image/ab67616d0000b273f79b1ab5cd74db6a2d7c1fda',
          songName: 'No Me la Moleste',
          albumName: 'Playa Saturno',
          song: 'https://res.cloudinary.com/dpwnji5mr/video/upload/v1668255106/demo/powerful-beat-121791_ninqyk.mp3'},
        
        { imageUrl: 'https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242',
          songName: 'Luna',
          albumName: 'Ferxxocalipsis',
          song: 'https://res.cloudinary.com/dpwnji5mr/video/upload/v1668255106/demo/powerful-beat-121791_ninqyk.mp3'},
          
        { imageUrl: 'https://i.scdn.co/image/ab67616d0000b2733066581d697fbdee4303d685',
          songName: 'Cry Baby',
          albumName: 'Wiped Out',
          song: 'https://res.cloudinary.com/dpwnji5mr/video/upload/v1668255106/demo/powerful-beat-121791_ninqyk.mp3'},

        { imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface',
          songName: '505',
          albumName: 'Favourite Worst Nightmare',
          song: 'https://res.cloudinary.com/dpwnji5mr/video/upload/v1668255106/demo/powerful-beat-121791_ninqyk.mp3'},
    ];

    // Índice de la diapositiva actual
    var currentSlideIndex = 0;

    // Create a single Howl instance outside updateSlide
    let currentSound;

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

    function playButton(){
        if (currentSound.playing()) {
            currentSound.pause();

            if (buttonPause.classList.contains("play")) {
                buttonPause.classList.remove("play");
                buttonPause.classList.add("pause");}

        } else {
            currentSound.play();
            buttonPause.classList.remove("pause");
            buttonPause.classList.add("play");
        }
    }

    // Función para actualizar la interfaz de usuario con la diapositiva actual
    function updateSlide() {
        var currentSlide = slides[currentSlideIndex];
        cover.innerHTML = '<div class="item"><img class="img_cover" src="' + currentSlide.imageUrl + '" alt=""></div>';
        title.innerHTML = '<div class="item"><div class="song__name">' + currentSlide.songName + '</div><p class="album__name">' + currentSlide.albumName + '</p></div>';

        if (currentSound) {
            currentSound.stop(); // Stop any previously playing sound
        }

        currentSound = new Howl({
            src: [currentSlide.song, ], 
            volume:.2
            });
    }

    function actualizarVolumen(){
        volumen = evento.target.value;
        currentSound.volume(volumen);
      }
    

    // Agregar event listeners a los botones "Prev" y "Next"
    buttonPrev.addEventListener('click', prevSlide);
    buttonNext.addEventListener('click', nextSlide);
    buttonPause.addEventListener('click', playButton);

    // Inicializar la diapositiva
    updateSlide();
};

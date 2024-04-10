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
        { imageUrl: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          songName: 'Sorry The Movement',
          albumName: 'Justin Bieber',
          song: 'https://file-examples.com/storage/feed2327706616bd9a07caa/2017/11/file_example_MP3_700KB.mp3'},

        { imageUrl: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          songName: 'Passenger Let Her Go',
          albumName: 'Passenger',
          song: 'https://res.cloudinary.com/dpwnji5mr/video/upload/v1668255106/demo/powerful-beat-121791_ninqyk.mp3'},

        { imageUrl: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          songName: 'Song 3',
          albumName: 'Passenger',
          song: 'https://file-examples.com/storage/feed2327706616bd9a07caa/2017/11/file_example_MP3_700KB.mp3'},
        
        { imageUrl: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          songName: 'Song 4',
          albumName: 'Passenger',
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
        } else {
            currentSound.play();
        }
    }

    // Función para actualizar la interfaz de usuario con la diapositiva actual
    function updateSlide() {
        var currentSlide = slides[currentSlideIndex];
        cover.innerHTML = '<div class="item"><img src="' + currentSlide.imageUrl + '" alt=""></div>';
        title.innerHTML = '<div class="item"><div class="song__name">' + currentSlide.songName + '</div><p class="album__name">' + currentSlide.albumName + '</p></div>';

        if (currentSound) {
            currentSound.stop(); // Stop any previously playing sound
        }

        currentSound = new Howl({
            src: [currentSlide.song],
            });

        //buttonPause.addEventListener('click', playButton);
    }

    // Agregar event listeners a los botones "Prev" y "Next"
    buttonPrev.addEventListener('click', prevSlide);
    buttonNext.addEventListener('click', nextSlide);
    buttonPause.addEventListener('click', playButton);

    // Inicializar la diapositiva
    updateSlide();
};

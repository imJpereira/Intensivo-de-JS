const playPauseButton = document.getElementById('play-pause');
const sessionAudio = document.getElementById('session-audio');
const previousTrackButton = document.getElementById('previous')
const nextTrackButton = document.getElementById('next')
const session = document.getElementById('session');

const numeroDeCapitulos = 10;
let isPlaying = false;
let currentSession = 1;

function playTrack() {
    sessionAudio.play();
    playPauseButton.classList.remove('bi-play-circle-fill');
    playPauseButton.classList.add('bi-pause-circle-fill');
    playPauseButton.classList.add('pressed'); // Adiciona a classe para a animação de pressionar
}

function pauseTrack() {
    sessionAudio.pause();
    playPauseButton.classList.remove('bi-pause-circle-fill');
    playPauseButton.classList.add('bi-play-circle-fill');
    playPauseButton.classList.remove('pressed');
}

function playOrPause() {
    if (isPlaying === false) {
        playTrack();
        isPlaying = true;
    } else {
        pauseTrack();
        isPlaying = false;
    }

}

function sessionName() {
    session.innerText = `Sessão ${currentSession}`;
}

function nextTrack() {
    if (currentSession === 10) currentSession = 9
    currentSession += 1;

    sessionAudio.src = `./src/books/dom-casmurro/${currentSession}.mp3`;
    sessionName();
    playTrack();
}

function previousTrack() {
    if (currentSession === 1) currentSession = 2
    currentSession -= 1;

    sessionAudio.src = `./src/books/dom-casmurro/${currentSession}.mp3`;
    sessionName()
    playTrack();
}

playPauseButton.addEventListener('click', playOrPause);
nextTrackButton.addEventListener('click', nextTrack);
previousTrackButton.addEventListener('click', previousTrack);


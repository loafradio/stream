let playing = false;

PAUSE_TEXT = "<i class=\"fa fa-pause\" aria-hidden=\"true\"></i> Pause"
PLAY_TEXT = "<i class=\"fa fa-play\" aria-hidden=\"true\"></i> Play"

    const audio = new Audio('https://loaf.out.airtime.pro/loaf_a');

    let setAudioLevel = (audioLevel) => {
        if (audioLevel > 1 || audioLevel < 0) {
            return;
        }
        audio.volume = audioLevel;
    };


    let playAudio = () => {
        playing = true;
        setAudioLevel(100);
        document.getElementById('pause-button').innerHTML = PAUSE_TEXT;
    };

    let pauseAudio = () => {
        playing = false;
        setAudioLevel(0);
        document.getElementById('pause-button').innerHTML = PLAY_TEXT;
    };

    let toggleAudio = () => {
        if (playing) {
            pauseAudio();
        } else {
            playAudio();
        }
    };


    jQuery('#pause-button').on('click', () => {
        toggleAudio();
    });

    jQuery(document).on('keydown', event => {
        if (event.keyCode === 32) {
            toggleAudio();
        }
    });
jQuery(document).ready(function() {
    audio.play();
    playAudio();
})

var sounds = {
  'a':'clap',
  's': 'hihat',
  'd': 'kick',
  'f':'openhat',
  'g':'boom',
  'h':'ride',
  'j':'snare',
  'k':'tom',
  'l':'tink',
};

/**
 * Runs at the start of our script
 * Adds a eventlistner for all the keys
 */
(function() {
  document.addEventListener('keydown', function() {
    drumHandler(event)
  });
})();

/**
 * Controlls the drum sound and the highligth of the key
 * @param  {[obj]} event [The event object]
 */
function drumHandler(event) {
  if (sounds[event.key] != null) {
    playSound('sounds/' + sounds[event.key] + '.wav');
    highlight_key(event.which);
    setTimeout(function() {
      disable_highlite(event.which);
      console.log('done');
    }, 100);

  }
}

/**
 * Highlight the key
 * @param  {[int]} key_code [The code of the key]
 */
function highlight_key(key_code) {
  let key = document.querySelector('div[data-key="' + key_code + '"]');
    key.className = 'key playing';
}

/**
 * Removes the highlight from a key
 * @param  {[int]} key_code [The code of a key]
 */
function disable_highlite(key_code) {
  let key = document.querySelector('div[data-key="' + key_code + '"]');
    key.className = 'key';
}

/**
 * Plays the sound of the audio file
 * @param  {[string]} audio_file [The location of the audio file]
 */
function playSound(audio_file) {
    let audio = new Audio(audio_file);
    audio.play();
}

var keys;
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

(function() {
  keys = document.querySelectorAll('div[data-key]');
  for (var i = 0; i < keys.length; i++) {

  }
  document.addEventListener('keydown', function() {
    drumHandler(event)
  });
})();

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

function highlight_key(key_code) {
  let key = document.querySelector('div[data-key="' + key_code + '"]');

  if (key != null) {
    // We have a key
    key.className = 'key playing';
  }
}
function disable_highlite(key_code) {
  let key = document.querySelector('div[data-key="' + key_code + '"]');

  if (key != null) {
    // We have a key
    key.className = 'key';
  }
}

function playSound(audio_file) {
    let audio = new Audio(audio_file);
    audio.play();
}

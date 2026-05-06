// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const face = document.querySelector('#explore img');
  const smilingFace = 'assets/images/smiling.png';
  const talkingFace = 'assets/images/smiling-open.png';

  let voices = [];
  let voiceLoadAttempts = 0;

  function setDefaultVoiceOption(text) {
    voiceSelect.innerHTML = '';

    const option = document.createElement('option');
    option.value = 'select';
    option.disabled = true;
    option.selected = true;
    option.textContent = text;
    voiceSelect.appendChild(option);
  }

  function populateVoiceList() {
    voices = synth.getVoices();

    setDefaultVoiceOption(voices.length ? 'Select Voice:' : 'Loading voices...');

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });

    return voices.length > 0;
  }

  populateVoiceList();

  synth.addEventListener('voiceschanged', populateVoiceList);

  const voiceLoadInterval = setInterval(() => {
    voiceLoadAttempts += 1;

    if (populateVoiceList()) {
      clearInterval(voiceLoadInterval);
    } else if (voiceLoadAttempts >= 20) {
      setDefaultVoiceOption('No voices available');
      clearInterval(voiceLoadInterval);
    }
  }, 250);

  talkButton.addEventListener('click', () => {
    if (!textToSpeak.value.trim() || voiceSelect.value === 'select' || voices.length === 0) {
      return;
    }

    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    utterance.voice = voices[Number(voiceSelect.value)];
    utterance.onstart = () => {
      face.src = talkingFace;
      face.alt = 'Open mouth face';
    };
    utterance.onend = () => {
      face.src = smilingFace;
      face.alt = 'Smiling face';
    };
    utterance.onerror = () => {
      face.src = smilingFace;
      face.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}
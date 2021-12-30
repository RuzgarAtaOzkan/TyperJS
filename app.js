const words = ['Student', 'Programmer', 'Creator'];

function coolTyping(words, updateTime, latency) {
  if (!words || !updateTime || !latency) {
    return console.error('You have to provide all three arguments');
  }

  let wordsIndex = 0;
  let currentWordIndex = 0;
  let currentWord = words[wordsIndex];
  let backwardsToggle = false;
  let blinkerToggle = false;
  const configedLatency = parseInt(latency) ? parseInt(latency) : 0;
  const dom_div = document.querySelector('#word');

  setInterval(() => {
    blinkerToggle = !blinkerToggle;

    if (!backwardsToggle) {
      if (currentWordIndex >= currentWord.length + configedLatency) {
        backwardsToggle = !backwardsToggle;
      } else {
        currentWordIndex++;
      }
    } else {
      if (currentWordIndex < -configedLatency) {
        backwardsToggle = !backwardsToggle;

        if (wordsIndex + 1 >= words.length) {
          wordsIndex = 0;
          currentWord = words[wordsIndex];
        } else {
          wordsIndex++;
          currentWord = words[wordsIndex];
        }
      } else {
        currentWordIndex--;
      }
    }

    const displayWord = currentWord.substr(0, currentWordIndex);
    dom_div.textContent = `I am a ${displayWord ? displayWord : ''}|`;
  }, updateTime);
}

coolTyping(words, 90, 4);

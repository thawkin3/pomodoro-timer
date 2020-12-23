(function() {
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');

  var startPauseForm = document.getElementById('start-pause-form')
  var startButton = document.getElementById('start');
  var pauseButton = document.getElementById('pause');

  var changeMinutesForm = document.getElementById('change-minutes-form')
  var numMinInput = document.getElementById('num-min');
  var okButton = document.getElementById('ok');

  var timer;

  function startTimer() {
    startButton.disabled = true;
    okButton.disabled = true;
    numMinInput.disabled = true;
    pauseButton.disabled = false;

    timer = setInterval(function() {
      if (sec.innerHTML != 00) {
        sec.innerHTML = parseInt(sec.innerHTML) - 1;
        if (sec.innerHTML.length == 1) {
          sec.innerHTML = '0' + sec.innerHTML;
        }
      } else {
        if (min.innerHTML != 00) {
          sec.innerHTML = 59;
          min.innerHTML = parseInt(min.innerHTML) - 1;
          if (min.innerHTML.length == 1) {
            min.innerHTML = '0' + min.innerHTML;
          }
        } else {
          clearInterval(timer);
          sec.innerHTML = '00';
          min.innerHTML = '25';
          startButton.disabled = false;
          okButton.disabled = false;
          numMinInput.disabled = false;
          pauseButton.disabled = true;
          alert('Time is up!');
        }
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timer);
    startButton.disabled = false;
    okButton.disabled = false;
    numMinInput.disabled = false;
    pauseButton.disabled = true;
  }

  function changeMin(e) {
    e.preventDefault();
    
    min.innerHTML = numMinInput.value;
    if (min.innerHTML.length == 1) {
      min.innerHTML = '0' + min.innerHTML;
    }
    sec.innerHTML = '00';
  }

  function preventDefaultSubmission(e) {
    e.preventDefault();
  }

  startPauseForm.addEventListener('submit', preventDefaultSubmission);
  startButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  changeMinutesForm.addEventListener('submit', changeMin);
})();

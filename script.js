// Get the necessary elements from the HTML
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('.player__slider[name="volume"]');
const playbackSpeed = document.querySelector('.player__slider[name="playbackRate"]');
const skipButtons = document.querySelectorAll('.player__button[data-skip]');

// Function to toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚';
  } else {
    video.pause();
    toggle.textContent = '►';
  }
}

// Event listener for play/pause button
toggle.addEventListener('click', togglePlay);

// Function to update the progress bar
function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Event listener for video time update
video.addEventListener('timeupdate', updateProgressBar);

// Function to set volume and playback speed
function handleSliderChange() {
  video[this.name] = this.value;
}

// Event listeners for volume and playback speed sliders
volume.addEventListener('input', handleSliderChange);
playbackSpeed.addEventListener('input', handleSliderChange);

// Function to skip forward or backward
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Event listeners for skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
//const 선언은 블록 범위의 상수를 선언합니다. 상수의 값은 재할당할 수 없으며 다시 선언할 수도 없습니다.
//Document.getElementById() 메서드는 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환합니다. ID는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용합니다.

// Play & pause video
function toggleVideoStatus(){
  if (video.paused){
    video.play();
  } else{
    video.pause();
  }
  }

// update play/pause icon
function updatePlayIcon(){
  if (video.paused){
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } eles {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60 );
  if(mins < 10) {
    mins '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60 );
  if(secs < 10) {
    secs '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo(){
  video.currentTime = 0;
  video.pause();
}


// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

//EventTarget의 addEventListener() 메서드는 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정합니다. 일반적인 대상은 Element, Document, Window지만, XMLHttpRequest와 같이 이벤트를 지원하는 모든 객체를 대상으로 지정할 수 있습니다.
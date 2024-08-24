const video = document.querySelector('video');

document.addEventListener('keydown', function(event) {
  if (event.shiftKey && event.key === 'D') {  
    if (video) {
      video.currentTime += 60;  
    }
  }else if (event.shiftKey && event.key === 'A') {
    if (video) {
      video.currentTime -= 60;
    }
  }
});

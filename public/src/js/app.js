if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(
      (registration) => {
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        );
      },
      (err) => {
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}

if ('mediaSession' in navigator) {
  const audioElement = document.getElementById('audioPlayer');
  audioElement.src = './audio/headline.mp3';

  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Biden’s Budget and Mass Layoffs at R.N.C.',
    artist: 'The New York Times',
    album: 'The Headlines',
    artwork: [
      {
        src: 'images/headline.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  });

  navigator.mediaSession.setActionHandler('play', function () {
    audioElement.play();
    navigator.mediaSession.playbackState = 'playing';
  });
  navigator.mediaSession.setActionHandler('pause', function () {
    audioElement.pause();
    navigator.mediaSession.playbackState = 'paused'; // or 'none'
  });
  navigator.mediaSession.setActionHandler('stop', () => {
    audioElement.play();
    navigator.mediaSession.playbackState = 'playing';
  });
  navigator.mediaSession.setActionHandler('seekbackward', function () {
    audioElement.currentTime -= 5;
  });
  navigator.mediaSession.setActionHandler('seekforward', function () {
    audioElement.currentTime += 5;
  });
  navigator.mediaSession.setActionHandler('seekto', function (details) {
    audioElement.currentTime = details.seekTime;
  });
  navigator.mediaSession.setActionHandler('previoustrack', function () {
    // Set the previous track
  });
  navigator.mediaSession.setActionHandler('nexttrack', function () {
    // Set the next track
  });
  // Add other action handlers as needed, like nexttrack, previoustrack
}

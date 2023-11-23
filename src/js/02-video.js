import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', throttle((ev) => {
       localStorage.setItem('videoplayer-current-time', ev.seconds); 
    }, 1000));

window.addEventListener('DOMContentLoaded', () => {
    const time = localStorage.getItem('videoplayer-current-time');
    player.setCurrentTime(time);
});

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

//new code
const storedTime = localStorage.getItem('videoplayer-current-time');
const initialTime = storedTime ? parseFloat(storedTime) : 0;
player.setCurrentTime(initialTime);
//new code

player.on('timeupdate', throttle((ev) => {
       localStorage.setItem('videoplayer-current-time', ev.seconds); 
    }, 1000));

window.addEventListener('DOMContentLoaded', () => {
    const time = localStorage.getItem('videoplayer-current-time');
    console.log(time);
    player.setCurrentTime(time);
});

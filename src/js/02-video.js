import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Retrieve the stored current time from local storage
const storedTime = localStorage.getItem('videoplayer-current-time');

// Set a default initial time if there's no stored time (e.g., first load)
const initialTime = storedTime ? parseFloat(storedTime) : 0;

// Ensure that initialTime is a valid number, default to 0 if not
const validInitialTime = isNaN(initialTime) ? 0 : initialTime;

// Set the initial time for the player
player.setCurrentTime(validInitialTime);

player.on('timeupdate', throttle((ev) => {
    // Store the current time in local storage every 1000 milliseconds (1 second)
    localStorage.setItem('videoplayer-current-time', ev.seconds);
}, 1000));

window.addEventListener('DOMContentLoaded', async () => {
    // Retrieve the updated stored current time from local storage
    const time = localStorage.getItem('videoplayer-current-time');

    // Ensure that time is a valid number, default to 0 if not
    const validTime = isNaN(parseFloat(time)) ? 0 : parseFloat(time);

    // Wait for the player to be ready before setting the current time
    await player.ready();

    // Set the current time for the player
    player.setCurrentTime(validTime);
});
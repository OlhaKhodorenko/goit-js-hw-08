import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const storageKey = "videoplayer-current-time";

    player.on('timeupdate', throttle((data) =>
        localStorage.setItem(storageKey, JSON.stringify(data.seconds),1000)
    ));
       
      
    const seconds = localStorage.getItem("videoplayer-current-time");
        if(seconds){
            player.setCurrentTime(seconds);
        };
    
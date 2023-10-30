import { useState } from "react";
import drummer from '../sounds/free_drums.mp3';


const Drummer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Audio object
    const audio = new Audio(drummer);

    const playAudio = () => {
        // Check if audio is already playing
        if (!isPlaying) {
            audio.play();
            setIsPlaying(true);

            // When the audio ends, reset the state
            audio.addEventListener("ended", () => {
            setIsPlaying(false);
            });
        }
    }

    return (
        <div className='drummer'>
            <img 
                src='https://media.npr.org/assets/img/2020/03/31/gettyimages-993302198_wide-9275d0a11c1b4012d59a7d756909dd14e266f209.jpg' 
                alt='Questlove'
                onClick={playAudio}
            />
            <h4>[ Click The Photo Or A Letter ]</h4>
            <h1>funky drums</h1>
        </div>
    )
}

export default Drummer;
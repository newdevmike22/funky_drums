import { useEffect, useState } from "react";

const Drums = ({ letter, sound, name }) => {
    const [ playing, setPlaying ] = useState(false);
    const play = () => {
        setPlaying(true);

        new Audio(sound).play();

        setTimeout(() => {
            setPlaying(false);
        }, 200);
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.toLowerCase() === letter.toLowerCase()) {
                play();
            }
        };
    
        document.addEventListener("keydown", handleKeyDown);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
        <div className={`drums ${playing ? "playing" : ""}`} onClick={play}>
            <div className="key">
                {letter}<br/>
                <h2 className='sound'>{name}</h2>
            </div>
        </div>
        </>
    )
}

export default Drums;
"use client";

import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";

import "./Hero.css"; // подключаем отдельный CSS

function Hero() {
    const { i18n } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        // Если музыка ещё не играет, установить начальное время 28 секунд
        if (!isPlaying) {
            audioRef.current.currentTime = 28; // старт с 28-й секунды
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        setIsPlaying(!isPlaying);
    };


    return (
        <section className="hero-section">
            <div className="overlay"></div>

            <audio ref={audioRef} loop>
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>

            {/* <div className="hero-content">
                <h1>Құрметті қонақтар!</h1>
                <p>
                    Аяулы қызымыз <span className="highlight">Арайдың</span> ата-анасының
                    аялы алақанынан – құтты босағасына шығарып салу рәсіміне арналған
                    салтанатты дастарханымыздың қадірлі қонағы болуға шақырамыз!
                </p>
            </div> */}

            <div className="music-button-container">
                <button
                    className={`music-button ${isPlaying ? "playing" : ""}`}
                    onClick={toggleMusic}
                >
                    {!isPlaying ? (
                        <div className="play-icon"></div>
                    ) : (
                        <div className="pause-icon">
                            <span></span>
                            <span></span>
                        </div>
                    )}
                </button>
            </div>

            <div className="language-buttons">
                {["kk", "ru"].map((lang) => (
                    <button
                        key={lang}
                        className={i18n.language === lang ? "active" : ""}
                        onClick={() => changeLanguage(lang)}
                    >
                        {lang === "kk" ? "KZ" : "RUS"}
                    </button>
                ))}
            </div>

            <div className="particles">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`particle p${i + 1}`}></div>
                ))}
            </div>
        </section>
    );
}

export default Hero;

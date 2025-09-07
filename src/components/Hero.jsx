"use client"

import { useTranslation } from "react-i18next"
import { useState, useRef } from "react"
import { motion } from "framer-motion"

function Hero() {
    const { i18n } = useTranslation()
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    const toggleMusic = () => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <section
            className="h-screen relative flex items-center justify-center overflow-hidden mb+[-100px]" // Убираем нижний отступ
            style={{
                backgroundImage: "url('/photo2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "-100px" // Дополнительно убираем отступ
            }}
        >
            {/* Затемнение */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Аудио */}
            <audio ref={audioRef} loop>
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>

            <div className="absolute top-[80%] transform -translate-y-1/2 z-30">
                <div className="relative">
                    {/* Элегантная кнопка плеера с нежными градиентами */}
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0 20px 40px rgba(255, 182, 193, 0.4), 0 0 30px rgba(173, 216, 230, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleMusic}
                        className="relative w-20 h-20 rounded-full shadow-2xl 
                                 flex items-center justify-center transition-all duration-300
                                 border-2 border-white/30 backdrop-blur-sm"
                        style={{
                            background: isPlaying
                                ? "linear-gradient(135deg, #fce7f3 0%, #e0f2fe 50%, #f0f9ff 100%)"
                                : "linear-gradient(135deg, #fff1f2 0%, #f0f9ff 50%, #fdf2f8 100%)",
                        }}
                    >
                        {/* Внутренний светящийся круг */}
                        <div
                            className="absolute inset-2 rounded-full transition-all duration-300"
                            style={{
                                background: isPlaying
                                    ? "linear-gradient(135deg, #fbb6ce 0%, #7dd3fc 100%)"
                                    : "linear-gradient(135deg, #f9a8d4 0%, #a7f3d0 100%)",
                                boxShadow: isPlaying
                                    ? "inset 0 2px 8px rgba(251, 182, 206, 0.3)"
                                    : "inset 0 2px 8px rgba(249, 168, 212, 0.3)",
                            }}
                        />

                        {/* Символ внутри (Play/Pause) */}
                        <div className="relative z-10">
                            {!isPlaying ? (
                                // Нежный треугольник PLAY
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        width: 0,
                                        height: 0,
                                        borderTop: "8px solid transparent",
                                        borderBottom: "8px solid transparent",
                                        borderLeft: "12px solid #ec4899", // нежно-розовый
                                        marginLeft: "2px",
                                        filter: "drop-shadow(0 2px 4px rgba(236, 72, 153, 0.3))",
                                    }}
                                />
                            ) : (
                                // Нежные полоски PAUSE
                                <motion.div
                                    className="flex space-x-1.5"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div
                                        className="w-1.5 h-6 rounded-full"
                                        style={{
                                            background: "linear-gradient(180deg, #ec4899 0%, #06b6d4 100%)",
                                            filter: "drop-shadow(0 2px 4px rgba(236, 72, 153, 0.3))",
                                        }}
                                    />
                                    <div
                                        className="w-1.5 h-6 rounded-full"
                                        style={{
                                            background: "linear-gradient(180deg, #ec4899 0%, #06b6d4 100%)",
                                            filter: "drop-shadow(0 2px 4px rgba(236, 72, 153, 0.3))",
                                        }}
                                    />
                                </motion.div>
                            )}
                        </div>

                        {/* Пульсирующий эффект при воспроизведении */}
                        {isPlaying && (
                            <motion.div
                                className="absolute inset-0 rounded-full border-2"
                                style={{
                                    borderColor: "#fbb6ce",
                                }}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.7, 0, 0.7],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Кнопки языка с обновленным дизайном */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 40, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-[85%] flex space-x-8 z-30"
            >
                {["kk", "ru"].map((lang) => (
                    <motion.button
                        key={lang}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 8px 25px rgba(255, 182, 193, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => changeLanguage(lang)}
                        className={`px-5 py-2 rounded-full font-medium text-sm
                                  transition-all duration-300 shadow-lg backdrop-blur-sm
                                  border border-white/40`}
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: "500",
                            background:
                                i18n.language === lang
                                    ? "linear-gradient(135deg, #fbb6ce 0%, #a7f3d0 100%)"
                                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)",
                            color: i18n.language === lang ? "#1f2937" : "#374151",
                        }}
                    >
                        {lang === "kk" ? "KZ" : "RUS"}
                    </motion.button>
                ))}
            </motion.div>

            {/* Нежные плавающие частицы */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-40"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            background:
                                i % 2 === 0 ? "linear-gradient(45deg, #fbb6ce, #a7f3d0)" : "linear-gradient(45deg, #ddd6fe, #fce7f3)",
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 0.6, 0],
                            scale: [0.5, 1.2, 0.5],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

export default Hero

import { motion } from "framer-motion";

function WeddingHeader() {
    return (
        <header className="h-40 md:h-48 lg:h-56 relative flex items-center justify-center text-center overflow-hidden">
            {/* Фоновое изображение с проверкой пути */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/wed.png')" }}
            >
                {/* Легкое затемнение для контраста */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Основной контент */}
            <div className="relative z-10 w-full px-4">
                {/* Верхняя надпись "QYZ U'ZATU" - бордовый */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-3 md:mb-4"
                >
                    <h1 className="text-9xl md:text-5xl lg:text-6xl font-semibold tracking-[0.2em] uppercase"
                        style={{
                            color: '#133275ff',
                            fontFamily: "'Cormorant Garamond', serif",
                            textShadow: '2px 2px 3px rgba(255, 255, 255, 0.4)',
                            fontWeight: '600'
                        }}>
                        QYZ U'ZATU
                    </h1>
                </motion.div>

                {/* Дата - увеличенная до такого же размера */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em]"
                        style={{
                            color: '#133275ff',
                            fontFamily: "'Cormorant Garamond', serif",
                            textShadow: '2px 2px 3px rgba(255, 255, 255, 0.4)',
                            fontWeight: '900'
                        }}>
                        04 | 10 | 2025
                    </h2>
                </motion.div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Угловые элементы */}
                <div className="absolute top-4 left-4 w-8 h-8"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23800020'%3E%3Cpath d='M12 2L9 7 2 8l4 4-1 7 7-4 7 4-1-7 4-4-7-1z'/%3E%3C/svg%3E\")",
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.7
                    }}></div>
                <div className="absolute top-4 right-4 w-8 h-8"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23800020'%3E%3Cpath d='M12 2L15 7l7 1-4 4 1 7-7-4-7 4 1-7-4-4 7-1z'/%3E%3C/svg%3E\")",
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.7
                    }}></div>
            </div>
        </header>
    );
}

export default WeddingHeader;
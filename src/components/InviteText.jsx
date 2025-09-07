import { motion } from "framer-motion";

export default function Invitation() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden">
                {/* Header with wedding image - БЕЗ ОРНАМЕНТОВ */}
                <div className="relative h-96 overflow-hidden">
                    <img src="/de.png" alt="Wedding" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Текст поверх изображения на 2/10 высоты */}
                    <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 text-center z-10 w-full px-4">                        <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[0.15em] uppercase mb-6"
                        style={{
                            color: '#133275',
                            fontFamily: "'Cormorant Garamond', serif",
                            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
                            fontWeight: '600'
                        }}
                    >
                        Құрметті қонақтар!
                    </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed px-4"
                            style={{
                                color: '#133275',
                                fontFamily: "'Cormorant Garamond', serif",
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                fontWeight: '500',
                                lineHeight: '1.6'
                            }}
                        >
                            Аяулы қызымыз <span className="font-bold text-amber-600 text-2xl">Арайдың</span>{" "}
                            ата-анасының аялы алақанынан – құтты босағасына шығарып салу рәсіміне арналған салтанатты дастарханымыздың
                            қадірлі қонағы болуға шақырамыз!
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="border-t border-blue-50 pt-8"
                >
                    <p
                        className="text-blue-600 mb-3 text-2xl"
                        style={{ color: '#0b1c42ff', fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Той иелері
                    </p>
                    <p className="text-5xl font-bold" style={{ color: '#133275', fontFamily: "'Cormorant Garamond', serif" }}>
                        Арман – Айгүл
                    </p>

                    <div className="flex justify-center mt-6 space-x-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Main content - ИНТЕГРИРОВАННЫЙ ДИЗАЙН */}
                <div className="px-8 py-12">
                    {/* Date section - standalone */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center space-y-8 mb-16"
                    >
                        <div>
                            <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Күні:</p>
                            <h2
                                className="text-6xl md:text-8xl font-light text-blue-700 tracking-wider leading-none mb-6"
                                style={{
                                    fontFamily: "'Dancing Script', 'Cormorant Garamond', serif",
                                    color: '#133275'
                                }}
                            >
                                4 Qazan 18.00
                            </h2>
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent mt-6"></div>
                        </div>
                    </motion.div>

                    {/* Location section - standalone */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center space-y-8 mb-16"
                    >
                        <div>
                            <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Орны:</p>
                            <h2
                                className="text-3xl font-bold mb-8"
                                style={{
                                    color: '#133275',
                                    fontFamily: "'Dancing Script', 'Cormorant Garamond', serif",
                                }}
                            >
                                Life Garden Restaurant
                            </h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="rounded-2xl overflow-hidden shadow-lg mb-8"
                        >
                            <iframe
                                src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A42.359495%2C%22lon%22%3A69.520749%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22shymkent%22%7D%2C%22org%22%3A%2270000001082729768%22%7D"
                                width="100%"
                                height="400"
                                frameBorder="0"
                                className="w-full"
                                title="Life Garden Restaurant на карте"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="text-center"
                        >
                            {/* <a
                                href="https://2gis.kz/shymkent/geo/70000001082729768/69.520749,42.359495"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-3 no-underline text-sm text-white rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                                style={{
                                    backgroundColor: '#f6f9ffff',
                                    fontFamily: "'Cormorant Garamond', serif",
                                }}
                            >
                                Карта
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a> */}

                        </motion.div>

                    </motion.div>


                </div>
            </div>
        </div>
    )
}
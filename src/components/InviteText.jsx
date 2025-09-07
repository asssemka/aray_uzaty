import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import './Invitation.css';

export default function Invitation() {
    const { t } = useTranslation();
    return (
        <div className="invitation-container">
            <div className="invitation-card">
                <div className="invitation-header">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="header-title"
                    >
                        {t("headerTitle")}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="header-text"
                    >
                        <Trans i18nKey="inviteText" components={{ 1: <span className="highlight" /> }} />
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="hosts"
                >
                    <p className="hosts-label">{t("hostsLabel")}</p>
                    <p className="hosts-names">{t("hostsNames")}</p>
                    <div className="hosts-dots">
                        <span></span><span></span><span></span>
                    </div>
                </motion.div>

                <div className="main-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="date-section"
                    >
                        <p className="date-label">{t("dateLabel")}</p>
                        <h2 className="date-value">{t("dateValue")}</h2>
                        <div className="line"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="location-section"
                    >
                        <p className="location-label">{t("locationLabel")}</p>
                        <h2 className="location-value">Life Garden Restaurant</h2>
                        <iframe
                            src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A42.359495%2C%22lon%22%3A69.520749%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22shymkent%22%7D%2C%22org%22%3A%2270000001082729768%22%7D"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            title="Life Garden Restaurant"
                        />
                    </motion.div>
                </div>
            </div>

            <img src="/de.png" alt="Wedding Decorative" className="footer-image" />
        </div>
    )
}

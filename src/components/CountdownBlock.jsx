import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import bird1 from "../assets/1b.png";
import bird2 from "../assets/2b.png";

function CountdownBlock() {
    const { t } = useTranslation();
    const targetDate = new Date("2025-10-04T18:00:00");

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-12 text-center relative">
            {/* Птицы */}
            <img
                src={bird1}
                alt="bird top left"
                className="absolute"
                style={{ top: "-30px", left: "0px", width: "80px", height: "80px" }}
            />
            <img
                src={bird2}
                alt="bird bottom right"
                className="absolute"
                style={{ bottom: "-30px", right: "0px", width: "80px", height: "80px" }}
            />

            {/* Подпись таймера */}
            <h4
                className="text-7xl font-bold mb-8"
                style={{
                    color: "#133275",
                    fontFamily: "'Dancing Script', 'Cormorant Garamond', serif",
                }}
            >
                {t("Ұзату тойына дейін:")}
            </h4>

            {/* Таймер */}
            <h1
                className="text-3xl font-bold mb-8"
                style={{
                    color: "#133275",
                    fontFamily: "'Dancing Script', 'Cormorant Garamond', serif",
                }}
            >
                {String(timeLeft.days).padStart(2, "0")} күн :{" "}
                {String(timeLeft.hours).padStart(2, "0")} сағ :{" "}
                {String(timeLeft.minutes).padStart(2, "0")} мин :{" "}
                {String(timeLeft.seconds).padStart(2, "0")} с
            </h1>
        </section>
    );
}

export default CountdownBlock;

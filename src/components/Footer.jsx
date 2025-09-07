import { useTranslation } from "react-i18next";
import footerImage from "../assets/footer.jpg";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="relative w-full bg-gray-900 text-white">
            {/* Фон через div + background-image */}
            <div
                className="w-full min-h-[250px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${footerImage})` }}
            >
                {/* Полупрозрачный overlay для текста */}
                <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">

                </div>
            </div>
        </footer>
    );
}

export default Footer;

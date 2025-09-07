import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    Құрметті қонақтар! <br />
                    Тойымызға келіп, қуанышымызды бөліскеніңіз үшін рахмет. <br />
                    Сіздерге махаббат, бақыт және амандық тілейміз!
                </p>
            </div>
        </footer>
    );
}

export default Footer;

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// Подключаем шрифты
if (typeof document !== "undefined") {
    const link = document.createElement("link");
    link.href =
        "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Dancing+Script:wght@500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

export default function RSVPForm() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    const iframeRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        formRef.current.submit();
        setSubmitted(true);
    };

    const onIframeLoad = () => {
        if (!submitted) return;
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section className="rsvp-section">
            <div className="rsvp-container">
                <h2 className="rsvp-title">{t("rsvpTitle")}</h2>

                {submitted && <div className="rsvp-success">{t("rsvpSuccess")}</div>}

                <form
                    ref={formRef}
                    action="https://script.google.com/macros/s/AKfycbwtBU_sfbgW0nmw0k7z7KnlcTPzD5FcywKucdqUJJ-gCfqb75VauKXNxJDDhr2U0pmI/exec"
                    method="POST"
                    target="hidden_iframe"
                    onSubmit={onSubmit}
                    className="rsvp-form"
                >
                    <div className="form-group">
                        <label>{t("nameLabel")}</label>
                        <input
                            name="name"
                            type="text"
                            required
                            placeholder={t("namePlaceholder")}
                        />
                    </div>

                    <div className="form-group">
                        <label>{t("attendLabel")}</label>
                        <select name="attend" required>
                            <option value="">{t("chooseOption")}</option>
                            <option value="Иә, қатысамын">{t("attendYes")}</option>
                            <option value="Жоқ, қатыса алмаймын">{t("attendNo")}</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-btn">
                        {t("submit")}
                    </button>
                </form>
            </div>

            <iframe
                name="hidden_iframe"
                ref={iframeRef}
                onLoad={onIframeLoad}
                style={{ display: "none" }}
                title="hidden"
            />
        </section>
    );
}


/* CSS */
const styles = `
.rsvp-section {
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  padding: 50px 20px;
  display: flex;
  justify-content: center;
}

.rsvp-container {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  padding: 30px 25px;
  max-width: 450px;
  width: 100%;
}

.rsvp-title {
  font-family: 'Dancing Script', 'Cormorant Garamond', serif;
  font-size: 34px;
  text-align: center;
  margin-bottom: 25px;
  color: #2c3e50;
}

.rsvp-success {
  background: #e9f9ef;
  border: 1px solid #c6efce;
  color: #2e7d32;
  padding: 12px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
}

.rsvp-form .form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.rsvp-form label {
  margin-bottom: 8px;
  font-size: 18px;
  color: #34495e;
  font-family: 'Cormorant Garamond', serif;
}

.rsvp-form input,
.rsvp-form select {
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid #dcdfe3;
  border-radius: 12px;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  font-family: 'Cormorant Garamond', serif;
  background: #fafafa;
}

.rsvp-form input:focus,
.rsvp-form select:focus {
  border-color: #6c63ff;
  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.15);
}

.submit-btn {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg, #133275, #133275);
  color: #fff;
  font-size: 20px;
  font-family: 'Dancing Script', 'Cormorant Garamond', serif;
  cursor: pointer;
  transition: background 0.3s, transform 0.1s;
}

.submit-btn:hover {
  background: linear-gradient(90deg, #0f285a, #133275);
}

.submit-btn:active {
  transform: scale(0.98);
}

/* Mobile */
@media (max-width: 480px) {
  .rsvp-container {
    padding: 20px 18px;
  }
  .rsvp-title {
    font-size: 28px;
  }
  .rsvp-form input,
  .rsvp-form select {
    font-size: 15px;
  }
  .submit-btn {
    font-size: 18px;
    padding: 14px;
  }
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

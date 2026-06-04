import "./Link.css";

export default function Link() {
  return (
    <section className="doctor-cta-section">
      <img
        src="/images/purple-health-bg.jpg"
        alt=""
        className="doctor-cta-bg"
      />

      <div className="doctor-cta-overlay"></div>

      <div className="doctor-cta-content">
        <div className="doctor-cta-text">
          <h2>We Can Help You Take the Next Step</h2>

          <a href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.cloud.microsoft%2Fr%2FHMjH6BhxFA&data=05%7C02%7CAmy.Cheng%40unisonhcs.org%7C07c98cbf8e9e44920dfa08debb5096ca%7C3a25ac2e73fa46e092cb1a68a4d98258%7C0%7C0%7C639154152488369357%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=ML88hEjRr6rPiAZvBtdZpZbjdsIH6XkzTCjQCBcMx3o%3D&reserved=0" className="doctor-cta-button">
            Register Here
          </a>
        </div>

        <div className="doctor-cta-image-wrapper">
          <img
            src="/images/qr-code.png"
            alt="QR-CODE"
            className="doctor-cta-image"
          />
        </div>
      </div>
    </section>
  );
}
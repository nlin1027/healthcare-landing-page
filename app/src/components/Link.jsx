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
          <h2>To Help Get You Connected</h2>

          <a href="https://ocean.cognisantmd.com/eRequest/557cb0e5-8461-45a3-917b-e4a696050aa7" className="doctor-cta-button">
            Click Here to Register
          </a>
        </div>

        <div className="doctor-cta-image-wrapper">
          <img
            src="/images/qr-code-2.png"
            alt="QR-CODE"
            className="doctor-cta-image"
          />
        </div>
      </div>
    </section>
  );
}
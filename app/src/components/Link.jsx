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

          <p>
            Amy’s program helps individuals and families connect with available
            primary care options in the community. Visit our site to learn more
            and complete a simple request form.
          </p>

          <a href="https://example.com" className="doctor-cta-button">
            Visit the Site
          </a>
        </div>

        <div className="doctor-cta-image-wrapper">
          <img
            src="/images/doctor-transparent.png"
            alt="Doctor"
            className="doctor-cta-image"
          />
        </div>
      </div>
    </section>
  );
}
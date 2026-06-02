import "./Title.css";

export default function Title() {
  return (
    <section className="hero-title-card">
      <img
        src="/images/title-bg-image-1.jpg"
        alt=""
        className="hero-bg-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Your Partner in Health and Wellness</h1>
          <p>
            Compassionate care, trusted support, and accessible health services
            designed to help you and your family live well.
          </p>
        </div>

        <div className="hero-doctor-wrapper">
          <img
            src=""
            alt="Doctors"
            className="hero-doctor-image"
          />
        </div>
      </div>
    </section>
  );
}
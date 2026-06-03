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
          <h1>Primary Care Connect</h1>
          <p>
            A community initiative coordinated by Unison Health and Community Services, 
            healthcare and community partners to help connect people to family doctors, 
            nurse practitioners and primary care services across Northwest Toronto.
          </p>
        </div>

        <div className="hero-doctor-wrapper">
          <img
            src=""
            alt=""
            className="hero-doctor-image"
          />
        </div>
      </div>
    </section>
  );
}
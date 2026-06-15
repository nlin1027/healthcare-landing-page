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

          <h1>
            Are you looking for a family doctor or nurse practitioner?
          </h1>

          <p className="hero-description">
            A community initiative coordinated by{" "}
            <span>Unison Health and Community Services,</span> healthcare and
            community partners to help connect people to family doctors, nurse
            practitioners and primary health care services across Northwest
            Toronto.
          </p>
        </div>
      </div>
    </section>
  );
}
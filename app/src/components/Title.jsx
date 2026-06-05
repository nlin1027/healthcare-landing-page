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
          <h1>Connect to Care</h1>
          <p>
            A community initiative coordinated by <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Unison Health and Community Services,</p> 
            healthcare and community partners to help connect people to family doctors, 
            nurse practitioners and primary health care services across Northwest Toronto.
          </p>
        </div>
      </div>
    </section>
  );
}
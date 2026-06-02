import "./Location.css";

export default function Location() {
  return (
    <section className="location-section">
      <div className="location-card">
        <div className="location-image-wrapper">
          <img
            src="/images/location-placeholder.jpg"
            alt="Clinic location"
            className="location-image"
          />
        </div>

        <div className="location-content">
          <h2>CarePoint Health Centre</h2>

          <p className="location-description">
            Our clinic is conveniently located in the heart of the community,
            offering accessible health and wellness services for individuals and
            families.
          </p>

          <div className="location-info">
            <h3>Location</h3>
            <p>123 Wellness Avenue</p>
            <p>Toronto, ON M1A 2B3</p>
          </div>

          <div className="location-info">
            <h3>Operating Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
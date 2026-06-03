import "./Footer.css";

export default function Footer() {
  const logos = [
    {
      name: "Azar Medical Clinic",
      image: "/images/azar-logo.png",
    },
    {
      name: "Unison Health and Community Services",
      image: "/images/unison-logo.png",
    },
    {
      name: "Hennick Humber Hospital",
      image: "/images/humber-river-hospital-logo.png",
    }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-row">
            {logos.map((logo, index) => (
              <div className="footer-logo-item" key={index}>
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="footer-logo-image"
                />
                <p>{logo.name}</p>
              </div>
            ))}
          </div>

          <div className="footer-funded">
            <p>Funded by Ontario Health</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <h3>Primary Care Connect</h3>
            <p>
              Helping individuals and families connect with available family
              doctors and nurse practitioners in the community.
            </p>
          </div>
        </div>

        <div className="footer-copy">
          <p>© 2026 Primary Care Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
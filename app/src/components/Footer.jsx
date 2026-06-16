import "./Footer.css";

export default function Footer() {
  const logos = [
    {
      name: "Azar Medical Clinic",
      image: "/images/azar-logo.png",
      link: "https://www.azarmed.ca"
    },
    {
      name: "Unison Health and Community Services",
      image: "/images/unison-logo.png",
      link: "https://unisonhcs.org"
    },
    {
      name: "Hennick Humber Hospital",
      image: "/images/humber-river-hospital-logo.png",
      link: "https://www.hrh.ca/programs/schulich-family-medicine-teaching-unit/"
    }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-row">
            {logos.map((logo, index) => (
              <div className="footer-logo-item" key={index}>
                <a href={logo.link}>
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="footer-logo-image"
                    href
                  />
                </a>
                
                <p>{logo.name}</p>
              </div>
            ))}
          </div>

          <div className="footer-funded">
            <p>Funded by </p>
            <img className="on-health-logo" src="/images/on-health-logo.png"/>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <h3>Connect to Care</h3>
            <p>
              Helping individuals and families connect with available family
              doctors and nurse practitioners in the community.
            </p>
          </div>
        </div>

        <div className="footer-copy">
          <p>© 2026 Connect to Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
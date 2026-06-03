import "./Location.css";

export default function Location() {
  const locations = [
    {
      name: "Azar Medical Clinic - 7099 Yonge Street, Thornhill (Yonge & Steeles)",
      description:
        "Free parking, in-person and online appointments available, pediatrician and endocrinologist available.",
    },
    {
      name: "Humber River Hospital - Schulich Family Medicine - 1235 Wilson Ave, Toronto (Keele & Wilson)",
      description:
        "",
    },
    {
      name: "Unison's Bathurst and Finch site - 504 Finch Avenue West (Bathurst and Finch)",
      description:
        "",
    },
    {
      name: "Unison's Lawrence Heights - 12 Flemington Road (Lawrence & Allen Road)",
      description:
        "",
    },
    {
      name: "Unison's Jane and Trethewey location - 1541 Jane Street ( Jane & Trethewey)",
      description:
        "",
    },
    {
      name: "Unison's Oakwood Vaughan location - 501 Oakwood Avenue (Oakwood & Vaughan Road)",
      description:
        "",
    },
    {
      name: "Unison's Keele Rogers location - 1651 Keele Street (Keele & Rogers)",
      description:
        "",
    },
  ];

  return (
    <section className="location-section">
      <div className="location-card">
        <div className="location-image-wrapper">
          <img
            src="/images/map-image.png"
            alt="Map showing program locations"
            className="location-image"
          />
        </div>

        <div className="location-content">
          <h2>Program Locations</h2>

          <p className="location-description">
            Our family doctor connection program is available through several
            community locations across Northwest Toronto. <br/>
            * Indicates that free interpreter services are available and non-OHIP clients may qualify.
          </p>

          <div className="location-list">
            {locations.map((location, index) => (
              <div className="location-list-item" key={index}>
                <h3>{location.name}</h3>
                <p>{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
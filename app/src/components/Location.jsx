import "./Location.css";

export default function Location() {
  const locations = [
    {
      name: "Azar Medical Clinic - 7099 Yonge Street, Thornhill (Yonge & Steeles)",
      code: "AZ",
      borderRadius: "50%",
      description:
        "Free parking, in-person and online appointments available, pediatrician and endocrinologist available.",
      color: "#22b8cf",
    },
    {
      name: "Unison's Bathurst-Finch Hub - 504 Finch Avenue West (Bathurst and Finch)",
      code: "BF",
      borderRadius: "8px",
      description:
        "Free parking, free interpreter service, free health programs and services, and you may qualify even without OHIP.",
      color: "#4dabf7",
    },
    {
      name: "Humber River Hospital - Schulich Family Medicine Teaching Unit - 1235 Wilson Ave, Toronto (Keele & Wilson)",
      code: "HH",
      borderRadius: "50%",
      description:
        "Free interpreter service, access to social worker, dietitian, pharmacist, nurse practitioner, and nurses, evening and weekend walk-in visits available for urgent needs, reduced parking rate at $5 per day available.",
      color: "#ff6b6b",
    },
    {
      name: "Unison's Lawrence Heights - 12 Flemington Road (Lawrence & Allen Road)",
      code: "LH",
      borderRadius: "8px",
      description:
        "Free parking, free interpreter service, free health programs and services, and you may qualify even without OHIP.",
      color: "#845ef7",
    },
    {
      name: "Unison's Jane Street Hub - 1541 Jane Street (Jane & Trethewey)",
      code: "JT",
      borderRadius: "8px",
      description:
        "Free parking, free interpreter service, free health programs and services, and you may qualify even without OHIP.",
      color: "#f59f00",
    },
    {
      name: "Unison's Oakwood Vaughan location - 501 Oakwood Avenue (Oakwood & Vaughan Road)",
      code: "OV",
      borderRadius: "8px",
      description:
        "Free interpreter service, free health programs and services, and you may qualify even without OHIP.",
      color: "#e64980",
    },
    {
      name: "Unison's Keele Rogers location - 1651 Keele Street (Keele & Rogers)",
      code: "KR",
      borderRadius: "8px",
      description:
        "Free interpreter service, free health programs and services, and you may qualify even without OHIP.",
      color: "#51cf66",
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
          <h2>Clinic Locations</h2>

          <p className="location-description">
            Our primary care connection program is available through several
            community locations across Northwest Toronto.
          </p>

          <div className="location-list">
            {locations.map((location, index) => (
              <div
                className="location-list-item"
                key={index}
                style={{ "--location-color": location.color }}
              >
                <h3 className="location-title">
                  <span
                    className="location-logo"
                    style={{
                      backgroundColor: location.color,
                      borderRadius: location.borderRadius,
                    }}
                  >
                    {location.code}
                  </span>

                  <span>{location.name}</span>
                </h3>

                {location.description && <p>{location.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
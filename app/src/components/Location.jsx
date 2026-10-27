import "./Location.css";

function LocationTitle({ location }) {
  return (
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
  );
}

export default function Location() {
  const locations = [
    {
      name: "Hennick Humber Hospital - Schulich Family Medicine Teaching Unit - 1235 Wilson Ave, Toronto (Keele & Wilson)",
      code: "HH",
      borderRadius: "50%",
      description: [
        "Short wait time.",
        "Free interpreter service, access to social worker, dietitian, pharmacist, nurse practitioner, and nurses, evening and weekend hours available for urgent needs, easier access to specialists in the hospital, reduced parking rate available.",
        "OHIP required.",
      ],
      color: "#ff6b6b",
    },
    {
      name: "Azar Medical Clinic - 7099 Yonge Street, Thornhill (Yonge & Steeles)",
      code: "AZ",
      borderRadius: "50%",
      description: [
        "Short wait time.",
        "Free parking, in-person and online appointments available, pediatrician and endocrinologist available.",
        "OHIP and IFHP required.",
      ],
      color: "#22b8cf",
    },
  ];

  const unisonLocations = [
    {
      name: "Bathurst-Finch Hub - 504 Finch Avenue West (Bathurst and Finch)",
      code: "BF",
      borderRadius: "8px",
      color: "#4dabf7",
    },
    {
      name: "Lawrence Heights - 12 Flemington Road (Lawrence & Allen Road)",
      code: "LH",
      borderRadius: "8px",
      color: "#845ef7",
    },
    {
      name: "Jane Street Hub - 1541 Jane Street (Jane & Trethewey)",
      code: "JT",
      borderRadius: "8px",
      color: "#f59f00",
    },
    {
      name: "Oakwood Vaughan location - 501 Oakwood Avenue (Oakwood & Vaughan Road)",
      code: "OV",
      borderRadius: "8px",
      color: "#e64980",
    },
    {
      name: "Keele Rogers location - 1651 Keele Street (Keele & Rogers)",
      code: "KR",
      borderRadius: "8px",
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
            {locations.map((location) => (
              <div
                className="location-list-item"
                key={location.code}
                style={{ "--location-color": location.color }}
              >
                <LocationTitle location={location} />

                {location.description && (
                  <p>
                    {location.description.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < location.description.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}

            <details
              className="location-list-item location-group"
              style={{ "--location-color": "#0e8e9f" }}
            >
              <summary className="location-group-summary">
                <h3 className="location-title">
                  <img
                    src="/images/unison-logo.png"
                    alt=""
                    className="location-group-logo"
                  />

                  <span>Unison locations</span>
                </h3>

                <span className="location-group-hint">
                  <span className="hint-click">Click to see locations</span>
                  <span className="hint-tap">Tap to see locations</span>
                </span>

                <span className="location-group-count">
                  {unisonLocations.length} locations
                </span>

                <span className="location-chevron" aria-hidden="true"></span>
              </summary>

              <div className="location-group-list">
                <p className="location-group-wait">Long wait time</p>

                {unisonLocations.map((location) => (
                  <div
                    className="location-sub-item"
                    key={location.code}
                    style={{ "--location-color": location.color }}
                  >
                    <LocationTitle location={location} />

                    {location.description && <p>{location.description}</p>}
                  </div>
                ))}

                <p className="location-group-note">
                  Note: Uninsured may be eligible
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
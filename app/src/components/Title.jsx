import { useEffect, useState } from "react";
import "./Title.css";

const SLIDE_INTERVAL_MS = 15000;
const SLIDE_COUNT = 2;

const hospitalHighlights = [
  "Short wait time",
  "Free interpreter service",
  "Evening and weekend hours for urgent needs",
  "Easier access to specialists in the hospital",
  "Reduced parking rate available",
];

export default function Title() {
  const [current, setCurrent] = useState(0);

  // Re-runs whenever the slide changes, so any manual switch restarts the 15s timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % SLIDE_COUNT);
    }, SLIDE_INTERVAL_MS);

    return () => clearTimeout(timer);
  }, [current]);

  const hasPrev = current > 0;
  const hasNext = current < SLIDE_COUNT - 1;

  return (
    <div className="hero-carousel">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        <section
          className="hero-title-card"
          aria-hidden={current !== 0}
        >
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

        <section
          className="hero-title-card hero-slide-hospital"
          aria-hidden={current !== 1}
        >
          <div className="hospital-bg" aria-hidden="true"></div>

          <div className="hero-content hospital-layout">
            <div className="hospital-text">
              <p className="hospital-kicker">
                Schulich Family Medicine Teaching Unit
              </p>

              <h2>Hennick Humber Hospital</h2>

              <p className="hospital-address">
                1235 Wilson Ave, Toronto (Keele &amp; Wilson)
              </p>

              <p className="hospital-team">
                Access to a social worker, dietitian, pharmacist, nurse
                practitioner and nurses.
              </p>

              <ul className="hospital-tags">
                {hospitalHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <p className="hospital-badge">OHIP and IFH required</p>
            </div>

            <div className="hospital-visual">
              <div className="diamond-frame diamond-frame-outer"></div>
              <div className="diamond-frame diamond-frame-inner"></div>

              <div className="diamond-photo">
                <img
                  src="/images/hennick-humber-hospital-bg.jpg"
                  alt="Hennick Humber Hospital"
                />
              </div>

              <span className="hospital-plus hospital-plus-small" aria-hidden="true"></span>
              <span className="hospital-plus hospital-plus-large" aria-hidden="true"></span>
              <span className="hospital-dots" aria-hidden="true"></span>
            </div>
          </div>
        </section>
      </div>

      <button
        type="button"
        className={`hero-arrow hero-arrow-prev${hasPrev ? "" : " hidden"}`}
        onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
        aria-label="Previous slide"
        tabIndex={hasPrev ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>

      <button
        type="button"
        className={`hero-arrow hero-arrow-next${hasNext ? "" : " hidden"}`}
        onClick={() => setCurrent((prev) => Math.min(prev + 1, SLIDE_COUNT - 1))}
        aria-label="Next slide"
        tabIndex={hasNext ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="hero-dots">
        {Array.from({ length: SLIDE_COUNT }, (_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot${current === index ? " active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={current === index}
          />
        ))}
      </div>
    </div>
  );
}

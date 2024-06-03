import "./css/Section2.css";

function TopOfSection2() {
  return (
    <div className="topofsection2">
      <h1 className="colorwhite h1ofsec2">Not sure where to start?</h1>
      <div className="colorgrey">
        Programs offer day-to-day guidance on an interactive calendar to keep you on track.
      </div>
    </div>
  );
}

function Offer({ title, description, className }) {
  return (
    <div className={`offer ${className}`}>
      <div className="absolut">
        <h4 className="colorwhite">{title}</h4>
        <div className="offerword">
          <div className="opacity colorwhite">{description}</div>
          <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10.724L23.0588 10.724" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.3382 1.07604L24.2169 10.8028L14.3382 20.5295" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="section2 container">
      <TopOfSection2 />
      <div className="offers">
        <Offer
          title="Workout videos"
          description="Access to hundreds of free, full-length workout videos."
        />
        <Offer
          title="Workout Programs"
          description="Affordable and effective workout programs."
          className="offeruniq"
        />
        <Offer
          title="Meal Plans"
          description="Plans built with registered dietitians and nutritionists."
        />
        <Offer
          title="WO Plus ALL ACCESS"
          description="Add powerful features to your membership."
          className="offeruniq1"
        />
      </div>
    </div>
  );
}

export default Section2;
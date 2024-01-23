import React from "react";

export default function Timeline() {
  return (
    <div className="yellow">
      <h1>Timeline of the Event</h1>
      <div className="timeline">
        <div className="checkpoint">
          <div className="checkpoint--div">
            <h2 className="checkpoint--h2">
              Registrations Open!!
            </h2>
            <p className="checkpoint--p">
            Secure your spot now by completing the registration process before January 31st
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div className="checkpoint--div">
            <h2 className="checkpoint--h2">
              1st Round of State Level Hackathon Ideation Submissions [Till 2nd Feb 8pm]
            </h2>
            <p className="checkpoint--p">
            Kindly submit your comprehensive ideation in PowerPoint format and share a GitHub repository showcasing the basic features, accompanied by a brief video highlighting the key functionalities.
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div className="checkpoint--div">
            <h2 className="checkpoint--h2">
            2nd Round of State Level Hackathon Ideation Submissions [On the 4th of February,2024]
            </h2>
            <p className="checkpoint--p">
            Engage in a virtual interview with our esteemed panel of judges, where they will inquire about your project and its implemented features, assigning scores based on your presentation and responses
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div className="checkpoint--div">
            <h2 className="checkpoint--h2">
              Finals in Mumbai !!
            </h2>
            <p className="checkpoint--p">
            Participate in an exclusive 2-day onsite hackathon in Mumbai with sponsored accommodation, meals, and travel, and stand a chance to win enticing cash prizes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

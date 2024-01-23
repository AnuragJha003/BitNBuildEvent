import React from "react";
import { UilSchedule, UilMoneyBillStack, UilUser } from "@iconscout/react-unicons";

export default function Details() {
  return (
    <div className="details-container">
      <div className="details-content">
        <div className="details-info">
          <h1 className="animated-text">About the Event</h1>
          <p className="animated-text">
            Bit N Build is an international Hackathon conducted by Fr. Conceicao Rodrigues College of Engineering, Mumbai in collaboration with 25 national and international colleges. It promotes exposure and collaboration opportunities for students across various universities worldwide. It is an event that has gained immense popularity and success in its foremost edition. Last year, this was the best hackathon conducted by Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai, and it had 900+ Participants and 200+ teams. This year, Bit N Build is set to make waves internationally, showcasing its innovation on the global stage, while also solidifying its influence at the national level. In the first phase of the hackathon, participating colleges will host the hackathon in their respective states. The hackathon’s final round will feature the top teams from this phase, earning them an invitation to compete in Mumbai at Fr. Conceicao Rodrigues College of Engineering.
          </p>
          <div className="details-flexbox">
            <UilSchedule size={50} />
            <h3 className="details-text1">Registration Deadline :</h3>
            <p className="details-text1">31 Jan 24, 11:59 PM IST</p>
          </div>
          <div className="details-flexbox">
            <UilSchedule size={50} />
            <h3 className="details-text1">Grand Finale :</h3>
            <p className="details-text1">24-25 Feb 24</p>
          </div>
          <div className="details-flexbox">
            <UilMoneyBillStack size={50} />
            <h3 className="details-text1">Registration Fee :</h3>
            <p className="details-text1">Rs.400 per team</p>
          </div>
          <div className="details-flexbox">
            <UilUser size={68} />
            <h3 className="details-text1">Team Size :</h3>
            <p className="details-text1">
              2 to 4 members (Inter-College teams allowed. Individuals must be from the same state.)
            </p>
          </div>
        </div>
        <div className="event-poster">
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/65a4f1c39ae0d_bit-n-build-international-hackathon.png?d=1280x371" alt="Event Poster" />
        </div>
      </div>
    </div>
  );
}

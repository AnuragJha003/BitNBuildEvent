import React from "react";
import {
  UilSchedule,
  UilMoneyBillStack,
  UilUser,
} from "@iconscout/react-unicons";

export default function Details() {
  return (
    <div className="green">
      <h1>About the Event</h1>
      <div className="details--content">
        Bit N Build is an international Hackathon conducted by Fr. Conceicao
        Rodrigues College of Engineering, Mumbai in collaboration with 25
        national and international colleges. It promotes exposure and
        collaboration opportunities for students across various universities
        worldwide. It is an event that has gained immense popularity and success
        in its foremost edition. Last year, this was the best hackathon
        conducted by Fr. Conceicao Rodrigues College of Engineering, Bandra,
        Mumbai, and it had 900+ Participants and 200+ teams. This year, Bit N
        Build is set to make waves internationally, showcasing its innovation on
        the global stage, while also solidifying its influence at the national
        level. In the first phase of the hackathon, participating colleges will
        host the hackathon in their respective states. The hackathon’s final
        round will feature the top teams from this phase, earning them an
        invitation to compete in Mumbai at Fr. Conceicao Rodrigues College of
        Engineering.
        <br />
        <br />
        <div className="details--flexbox">
          <UilSchedule />
          <p className="details--text1">Registration Deadline :</p>
          <p className="details--text1">08 Feb 24, 11:59 PM IST</p>
        </div>
        <div className="details--flexbox">
          <UilSchedule />
          <p className="details--text1">Grand Finale :</p>
          <p className="details--text1">24 Feb 24, 10:00 AM IST</p>
        </div>
        <div className="details--flexbox">
          <UilMoneyBillStack />
          <p className="details--text1">Registration Fee :</p>
          <p className="details--text1">Rs.400 per team</p>
        </div>
        <div className="details--flexbox">
          <UilUser />
          <p className="details--text1">Team Size :</p>
          <p className="details--text1">
            2 to 4 members (Inter-College teams allowed. Individuals must be
            from the same state.)
          </p>
        </div>
      </div>
    </div>
  );
}

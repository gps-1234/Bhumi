import React from "react";
import CountUp from "react-countup";

function Countup() {
  return (
    <div className="cntup">
      <div className="cntup_inline">
        <CountUp start={0} end={32000} duration={3} className="counter" />
        <h5>Volunteers Engaged this Year</h5>
      </div>
      <div className="cntup_inline">
        <CountUp start={0} end={15} duration={3} className="counter" />
        <h5>Years of Service</h5>
      </div>
      <div className="cntup_inline">
        <CountUp start={0} end={250000} duration={3} className="counter" />
        <h5>Lives Impacted</h5>
      </div>
    </div>
  );
}
export default Countup;

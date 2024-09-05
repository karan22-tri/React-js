import React from "react";

function Scientific() {
  return (
    <div className="Scientific">
      <center>
        <br/><br/><br/>
      <b style={{color:"#ec616c"}}>AFFORDABLE PRICING PLANS</b>
      <h1>Choose one of our plans get <br/> access to plugins for free</h1>
      </center>
      <div className="plans">
        <div className="sub-plan">
            <h3>BASIC</h3>
            <p>BASIC FEATURES</p>
            <br/>
            <h1>$9.99 <b>Monthly</b></h1>
            <br/>
            <p><span>5</span> Domains</p>
            <hr/>
            <p><span>2 GB</span> File upload</p>
            <hr/>
            <p><span>20 GB</span> Secure storage</p>
            <hr/>
            <p><span>Unlimited </span> bandwidth</p>
            <button>CHOOSE PLAN</button>
        </div>
        <div className="sub-plan-po">
        <h3>STANDARD</h3>
            <p>MOST POPULAR</p>
            <br/>
            <h1>$9.99 <b>Monthly</b></h1>
            <br/>
            <p><span>10</span> Domains</p>
            <hr/>
            <p><span>2 GB</span> File upload</p>
            <hr/>
            <p><span>40 GB</span> Secure storage</p>
            <hr/>
            <p><span>Unlimited </span> bandwidth</p>
            <button>CHOOSE PLAN</button>
        </div>
        <div className="sub-plan">
        <h3>PREMIUM</h3>
            <p>ALL YOU MAY NEED</p>
            <br/>
            <h1>$9.99 <b>Monthly</b></h1>
            <br/>
            <p><span>20</span> Domains</p>
            <hr/>
            <p><span>4 GB</span> File upload</p>
            <hr/>
            <p><span>60 GB</span> Secure storage</p>
            <hr/>
            <p><span>Unlimited </span> bandwidth</p>
            <button>CHOOSE PLAN</button>
        </div>
      </div>
    </div>
  );
}

export default Scientific;

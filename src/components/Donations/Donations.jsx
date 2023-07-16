/*import React from "react";
import { useState } from "react";

const Donations = () => {
  const paymentDone = () => {
    alert("THANK YOU FOR DONATING");
  };

  const [donationAmount, setDonationAmount] = useState(0);

  return (
    <div className="donate ">
      <div>
        <img
          className="img-fluid thumbnail w-50"
          src="https://www.classy.org/wp-content/uploads/2022/03/quotes_mother-teresa_v2.jpg"
          alt="image"
        />
      </div>
      <div className="p-4 border">
        <button className="btn btn-primary btn-block">DONATE</button>
        <input
          type="number"
          className="form-control my-2 col-sm-6"
          min="500"
          step="500"
          placeholder="Enter donation amount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
        <div className="my-2">
          <h1 className="font-weight-bold">Payment method</h1>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="payTm"
            />
            <label className="form-check-label" htmlFor="payTm">
              PayTm
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="googlePay"
            />
            <label className="form-check-label" htmlFor="googlePay">
              GooglePay
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="phonePay"
            />
            <label className="form-check-label" htmlFor="phonePay">
              PhonePay
            </label>
          </div>
        </div>

        <button className="btn btn-success btn-block" onClick={paymentDone}>
          {" "}
          Complete the payment{" "}
        </button>
      </div>
    </div>
  );
};

export default Donations;
*/

import { useState } from "react";

const Donations = () => {
  const paymentDone = () => {
    alert("THANK YOU FOR DONATING");
  };

  const [donationAmount, setDonationAmount] = useState(0);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid thumbnail"
            src="https://www.classy.org/wp-content/uploads/2022/03/quotes_mother-teresa_v2.jpg"
            alt="image"
          />
        </div>
        <div className="col-md-6 ">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">DONATE</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="donationAmount">Donation Amount:</label>
                  <input
                    type="number"
                    className="form-control"
                    min="500"
                    step="500"
                    placeholder="Enter donation amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <h3 className="font-weight-bold">Payment method</h3>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="payTm"
                    />
                    <label className="form-check-label" htmlFor="payTm">
                      PayTm
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="googlePay"
                    />
                    <label className="form-check-label" htmlFor="googlePay">
                      GooglePay
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="phonePay"
                    />
                    <label className="form-check-label" htmlFor="phonePay">
                      PhonePay
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={paymentDone}
                >
                  Complete the payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;

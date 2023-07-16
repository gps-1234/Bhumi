import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// import { useHistory } from "react-router-dom";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");
  const [selectedMedia, setSelectedMedia] = useState("");
  // const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleAgeGroupChange = (event) => {
    setSelectedAgeGroup(event.target.value);
  };

  const handleMediaChange = (event) => {
    setSelectedMedia(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected City:", selectedCity);
    console.log("Selected Age Group:", selectedAgeGroup);
  };

  const city = selectedCity;
  const ageGroup = selectedAgeGroup;
  // history.push("/");
  return (
    <Modal
      class="mdl"
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        height: 30,
        width: 30,
      }}
    >
      <div className="popdiv">
        <h1>Help Us by Taking this Survey!</h1>
        <p>Take this survey before proceeding further. </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Select City:
            <select
              value={selectedCity}
              onChange={handleCityChange}
              class="form-select"
            >
              <option value="">-- Select a City --</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Kolkatta">Kolkatta</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Mangalore">Mangalore</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Select Age Group:
            <select
              value={selectedAgeGroup}
              onChange={handleAgeGroupChange}
              class="form-select"
            >
              <option value="">-- Select an Age Group --</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46-55">46-55</option>
              <option value="56-65">56-65</option>
              <option value="66-75">66-75</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Where Did You Hear About Us:
            <select
              value={selectedMedia}
              onChange={handleMediaChange}
              class="form-select"
            >
              <option value="">-- Where Did You Hear About Us --</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Twitter">Twitter</option>
              <option value="Threads">Threads</option>
              <option value="News">News</option>
              <option value="Friends and Family">Friends and Family</option>
            </select>
          </label>
          <br />
          <br />
          <br />
          <button
            type="submit"
            formaction="google.com"
            class="btn btn-success btn-rounded"
            onClick={handleClose}
          >
            Submit
          </button>
        </div>
      </form>
      <br />

      {/* <button onClick={handleClose} class="btn btn-danger btn-rounded">
        Close
      </button> */}
    </Modal>
  );
};

export default Popup;

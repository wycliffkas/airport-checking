import axios from "axios";
import React, { useContext, useState } from "react";
import { RegisterContext } from "../context/register";

const SearchFlight = (props) => {
  const [details, setDetails] = useState({ flight: "", lastName: "" });
  const { setPassager, passager } = useContext(RegisterContext);

  const handleChange = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.mocki.io/v1/300ef43e/flight/${details.flight}/lastName/${details.lastName}`
    );

    if (response.data.message) {
      alert("User or Flight not found!");
      setDetails({ flight: "", lastName: "" });
    } else {
      setDetails({ flight: "", lastName: "" });
      setPassager({
        ...passager,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      });
      props.history.push("/register");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 align-self-center">
          <h4 className="mb-4">Welcome to your web check-in</h4>
          <form onSubmit={handleSearch}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="flight"
                onChange={handleChange}
                value={details.flight}
                placeholder="Flight #"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={handleChange}
                value={details.lastName}
                placeholder="Last Name"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search Flight
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchFlight;

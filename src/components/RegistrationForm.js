import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { RegisterContext } from "../context/register";

const RegistrationForm = (props) => {
  const { passager, setPassager } = useContext(RegisterContext);
  let history = useHistory();

  const onChangeValue = (event) => {
    let name = event.target.name;
    setPassager({
      ...passager,
      [name]: event.target.value,
    });
  };

  const onContinue = (event) => {
    event.preventDefault();
    if (props.review) {
      history.push("/confirm");
      setPassager({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        nationality: "",
        birthDate: "",
        birthPlace: "",
        residencyCountry: "",
        residencyCity: "",
        residencyAddress: "",
        passportIssueDate: "",
        passportCountryIssue: "",
        passportCityIssue: "",
        passportExpiryDate: "",
      });
    } else {
      props.setReview(true);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 align-self-center">
          <h4 className="mb-4">
            {!props.review
              ? `Hi, Mr.${passager.lastName}`
              : "Please review your information"}
          </h4>
          <form onSubmit={onContinue}>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={passager.firstName}
                onChange={onChangeValue}
              />
            </div>
            <div className="mb-3">
              <input
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={passager.lastName}
                onChange={onChangeValue}
              />
            </div>
            <div className="mb-3">
              <select
                name="nationality"
                className="form-select"
                onChange={onChangeValue}
                required
              >
                <option value="">Select Nationality</option>
                <option value="Germany">Germany</option>
                <option value="Austria">Austria</option>
                <option value="Belgium">Belgium</option>
                <option value="France">France</option>
                <option value="Greece">Greece</option>
                <option value="Spain">Spain</option>
                <option value="USA">USA</option>
              </select>
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={onChangeValue}
                value={passager.email}
                name="email"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                name="phone"
                value={passager.phone}
                onChange={onChangeValue}
                required
              />
            </div>

            {passager.nationality === "France" ||
            passager.nationality === "Belgium" ? (
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Birth Date (mm/dd/yyyy)"
                    onChange={onChangeValue}
                    name="birthDate"
                    value={passager.birthDate}
                  />
                </div>
              </>
            ) : null}

            {passager.nationality === "France" ? (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Birth Place"
                  onChange={onChangeValue}
                  name="birthPlace"
                  value={passager.birthPlace}
                />
              </div>
            ) : null}

            {passager.nationality === "France" ||
            passager.nationality === "Austria" ||
            passager.nationality === "Belgium" ? (
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Residence(country)"
                    onChange={onChangeValue}
                    name="residencyCountry"
                    value={passager.residencyCountry}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Residence(city)"
                    onChange={onChangeValue}
                    name="residencyCity"
                    value={passager.residencyCity}
                  />
                </div>
              </>
            ) : null}

            {passager.nationality === "Spain" ||
            passager.nationality === "Belgium" ? (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Residence(address only)"
                  onChange={onChangeValue}
                  name="residencyAddress"
                  value={passager.residencyAddress}
                />
              </div>
            ) : null}

            {passager.nationality === "Greece" ? (
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Passport date of issue(mm/dd/yyyy)"
                    onChange={onChangeValue}
                    name="passportIssueDate"
                    value={passager.PassportIssueDate}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Passport country of issue"
                    onChange={onChangeValue}
                    name="passportCountryIssue"
                    value={passager.PassportCountryIssue}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Passport city of issue"
                    onChange={onChangeValue}
                    name="passportCityIssue"
                    value={passager.PassportCityIssue}
                  />
                </div>
              </>
            ) : null}

            {passager.nationality === "Greece" ||
            passager.nationality === "Austria" ? (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Passport expiry date(mm/dd/yyyy)"
                  onChange={onChangeValue}
                  name="passportExpiryDate"
                  value={passager.passportExpiryDate}
                />
              </div>
            ) : null}

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Passport #"
                name="passportNbr"
                value={passager.passportNbr}
                onChange={onChangeValue}
                required
              />
            </div>

            {!props.review ? (
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label class="form-check-label" htmlFor="exampleCheck1">
                  Accepts T&C
                </label>
              </div>
            ) : null}

              <button type="submit" className="btn btn-primary btn-block">
                Continue
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

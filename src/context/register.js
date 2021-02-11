import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterContextProvider = (props) => {
  const [passager, setPassager] = useState({
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
    passportExpiryDate: ""
  });

  return (
    <RegisterContext.Provider value={{ passager, setPassager }}>
      {props.children}
    </RegisterContext.Provider>
  );
};

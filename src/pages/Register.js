import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";

const Register = () => {
  const [review, setReview] = useState(false);
  return <RegistrationForm review={review} setReview={setReview} />;
};

export default Register;

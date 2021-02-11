import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import RegistrationForm from "../../components/RegistrationForm";

Enzyme.configure({ adapter: new Adapter() });

describe("RegistrationForm component Tests", () => {
  const wrapper = shallow(<RegistrationForm />);
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Confirm from "../../components/Confirm";

Enzyme.configure({ adapter: new Adapter() });

describe("Confirm component Tests", () => {
  const wrapper = shallow(<Confirm />);
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

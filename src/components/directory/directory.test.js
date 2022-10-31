import { shallow } from "enzyme";
import Directory from "./directory.component";

describe("Directory Component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Directory />);

    expect(wrapper).toMatchSnapshot();
  });
});

import { shallow } from "enzyme";
import FormInput from "./form-input.component";

describe("Form input component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<FormInput />);

    expect(wrapper).toMatchSnapshot();
  });
});

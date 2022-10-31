import { shallow } from "enzyme";
import CategoryPreview from "./category-preview.component";

describe("Category Preview Component", () => {
  it("should match snapshot", () => {
    const mockProps = {
      title: "",
      products: [],
    };
    const wrapper = shallow(<CategoryPreview {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

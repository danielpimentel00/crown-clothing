import { shallow } from "enzyme";
import DirectoryItem from "./directory-item.component";
import { BrowserRouter as Router } from "react-router-dom";

describe("Directory Item Component", () => {
  it("should match snapshot", () => {
    const mockProps = {
      title: "",
      imageUrl: "",
      route: "../",
    };
    const wrapper = shallow(
      <Router>
        <DirectoryItem category={mockProps} />
      </Router>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

import { shallow } from "enzyme";
import Button from "./button.component";

it("should render custom button component", () => {
  expect(shallow(<Button />)).toMatchSnapshot();
});

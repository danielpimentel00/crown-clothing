import { shallow } from "enzyme";
import CartItem from "./cart-item.component";

describe("Cart Item Component", () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      name: "tShirt",
      imageUrl: "https://www.sss.com",
      quantity: 0,
      price: 50,
    };
    wrapper = shallow(<CartItem cartItem={mockProps} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("check if price is right", () => {
    const quantity = 5;
    const price = 100;
    mockProps.quantity = quantity;
    mockProps.price = price;
    const wrapper2 = shallow(<CartItem cartItem={mockProps} />);

    expect(wrapper2.find(".price").getElement().props.children).toEqual([
      quantity,
      " x $",
      price,
    ]);
  });
});

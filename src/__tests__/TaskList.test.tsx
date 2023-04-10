import Enzyme, { shallow } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import toJson from "enzyme-to-json";
import { TodoList } from "@/pages/Todos";
Enzyme.configure({ adapter: new Adapter() });


describe("Test List", () => {
  it("Task List should mount without problem", () => {
    const wrapper = shallow(<TodoList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

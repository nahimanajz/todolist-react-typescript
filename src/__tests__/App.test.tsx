import Enzyme, { shallow } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import toJson from "enzyme-to-json";
import App from "App";


Enzyme.configure({ adapter: new Adapter() });

describe("test whole app", () => {
  it("App Should mount without problem", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("Should have App slogan ", () => {
    const wrapper = shallow(<App />);
    
    expect(
      wrapper.contains(
        <div className="w-1/5 bg-blue-600 text-white text-center font-extrabold">
          Productivity Tracker
        </div>
      )
    ).toEqual(true);
  });
});

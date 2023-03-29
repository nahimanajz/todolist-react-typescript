import Enzyme, { shallow } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import toJson from "enzyme-to-json";
import TodoItem from "components/ui/TodoItem";
import {Priority} from'models/Todo'


const clickFn = jest.fn()

Enzyme.configure({ adapter: new Adapter() });

const todo = {
    id: "2383f2f3-3e85-47ff-b37b-13990178281a",
    name: "Tomorrow",
    dueDate: new Date(),
    done: false,
    priority: Priority.Medium ,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex, quidem perspiciatis at minima nihil tempora? Harum autem saepe cum officiis assumenda hic. Quas eaque facilis necessitatibus labore earum tenetur saepe nesciunt!"
  }
const wrapper = shallow(<TodoItem todo={todo} deleteTodo={clickFn}/>);

describe("test whole app", () => {
    it("App Should mount without problem", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it("should click delete button", ()=> {
        wrapper
        wrapper.find('TrashIcon').simulate('click')
        wrapper.instance();

        expect(clickFn).toHaveBeenCalled();

    })
})
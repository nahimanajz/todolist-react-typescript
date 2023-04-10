
import moment from "moment";
import AddTodo from "./components/AddTodo";

export default {
  title: "Forms/AddTodo",
  argTypes: { onClick: { action: "onClick" } },
  component: AddTodo,
};

const Template = (args) => <AddTodo {...args} />;

export const NewTodo = Template.bind({});
NewTodo.args={
    dueDate:moment().format("yyy-MM-dd"),
    name:"New Task",
    priority:"Medium",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis labore totam quos quibusdam maxime laborum nihil molestia"
}

export const EmptyTodo = Template.bind({});
EmptyTodo.args={
    dueDate:"",
    name:"",
    priority:"",
    text:""
}

export const HighPriorityTodo = Template.bind({});
HighPriorityTodo.args={
    dueDate:moment().format("yyy-MM-dd"),
    name:"New Task",
    priority:"High",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis labore totam quos quibusdam maxime laborum nihil molestia"
}

export const MediumPriorityTodo = Template.bind({});
MediumPriorityTodo.args={
    dueDate:moment().format("yyy-MM-dd"),
    name:"New Task",
    priority:"Medium",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis labore totam quos quibusdam maxime laborum nihil molestia"
}

export const LowPriorityTodo = Template.bind({});
LowPriorityTodo.args={
    dueDate:moment().format("yyy-MM-dd"),
    name:"New Task",
    priority:"Low",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis labore totam quos quibusdam maxime laborum nihil molestia"
}


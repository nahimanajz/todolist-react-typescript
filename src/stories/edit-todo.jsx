import { EditTodo } from "components/form/EditTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default {
  title: "Forms/EditTodo",
  component: EditTodo,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
],
};

const Template = (args) => <EditTodo {...args} />;
export const EditTodoForm = Template.bind({});


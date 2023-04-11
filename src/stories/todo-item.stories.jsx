import TodoItem from "components/ui/TodoItem";
import { BrowserRouter as Router } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const todo = {
  id: "6B29FC40-CA47-1067-B31D-00DD010662DA".toLocaleLowerCase(),
  dueDate: "04-04-2023",
  name: "New Task",
  priority: "High",
  done: false,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis labore totam quos quibusdam maxime laborum nihil molestia",
};

export default {
  title: "Components/TodoItem",
  component: TodoItem,
  decorators: [
    (Story) => (
      <Router>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </Router>
    ),
  ],
};

const Template = (args) => <TodoItem {...args} />;

export const HighItem = Template.bind({});
HighItem.args = { todo };

export const LowItem = Template.bind({});
const low = { ...todo, priority: "Low" };
LowItem.args = { todo:low };


export const MediumItem = Template.bind({});
const medium = { ...todo, priority: "Medium" };
MediumItem.args = { todo: medium };

export const DoneItem = Template.bind({});
const done = { ...todo, done: true };
DoneItem.args = {todo: done};


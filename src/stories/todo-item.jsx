import TodoItem from "components/ui/TodoItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


export default {
    title:"Components/TodoItem",
    component: TodoItem,
    decorators:[
        (Story)=>(
            <Router>
                <Story/>
            </Router>
        )
    ]
}

const Template = args => <TodoItem {...args} />

export const NormalItem = Template.bind({})
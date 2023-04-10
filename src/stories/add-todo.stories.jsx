import { AddTodo } from "pages/AddTodo";
import { Router } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataSchema } from "utils/validations";


export default {
    title:"Forms/AddTodo",
    component: AddTodo,
    parameters:{
        controls: {hideNoControlsWarning: true}
    },
    decorators:[
        (Story)=>(
            <Router>
                <Story/>
            </Router>
        )
    ]
}

export const Template = args => <AddTodo {...args} />

// export const NewTodo = Template.bind({})

// NewTodo.args = {
//     resolver:zodResolver(DataSchema),
//     onSubmit:(data)=> console.log(data)
// }

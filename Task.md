

# TodoList

Todo list is project to attain skills in react combined with typescript 

# resources 
- https://medium.com/@devops.fazley.kholil/learning-typescript-77875209cef6


# TODO App

## Setup project 
- Create project skeleton using [Create React App](https://create-react-app.dev/). Application should use TypeScript (for CRA use switch `npx create-react-app my-app --template typescript`). If you are familiar with other tools e.g. [Vite](https://vitejs.dev/) you can use those tools.
- Application should use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests.
## Backend 
We want to focus on frontend work, so for backend we will use JSON Server [JSON Server GitHub page](https://github.com/typicode/json-server). It is a fake REST API Server. 
## Backlog

### Data model
#### ToDo Item
- done (boolean true/false)
- Name (short text)
- priority (Low, Normal, High)
- Due date
- text (long text)
### Items list screen
On this screen user should be able to see list of to do items and its state.
### Delete item
Add delete button to each item on list list screen. Using this button user should be able to remove ToDo item. 
### Add to do item
#### Create add ToDo item form
Using this screen user should be able to add new ToDo item.
At the beginning please create a form using just React.  
We need to collect all the data about ToDo item (See Data model section).
#### Use libraries to handle the form and validation
Use [React Hook Form](https://react-hook-form.com/) to handle form and [Zod](https://github.com/colinhacks/zod) for validation.
### Edit existing item
Modify create ToDoItem screen to allow user editing existing item. Add edit button to Items list screen that will redirect user to edit form.

#### Nice to have
- Unit tests
- [Storybook](https://storybook.js.org/)
- [React Query](https://react-query-v3.tanstack.com/)
- Eslint
- test coverage


# zod for validations
# create create-react-form

TASK
=------
- Fix auto reload 
- fix test 
- learn storybook
- Read why did you render 

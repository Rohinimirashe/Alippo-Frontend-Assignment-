Alippo Frontend Assignment Documentation

About Us:
We are a hybrid upskilling platform focussing on women to help them learn new skills
and set up their home businesses across various categories. We offer education and
upskilling content in categories but not limited to Baking, Cooking, Product Formulation,
Home Business upscaling and more.
Skills Required:
We give everyone a chance to learn and upskill into the stack we use, but it definitely
requires basic understanding for some core competencies listed below
1. HTML, CSS and Javascript/Typescript:
a. Semantic HTML
b. Box model, positioning, flexbox layouts , grid layouts
c. Closures, Prototypal Inheritance, Promises, Lexical Scopes/Dyamic
Scopes, “this” keyword
d. Static typing and writing typesafe code with Typescript.
2. Knowlede of a frontend library (React/Vue/Solid/Svelte):
a. The WHY, WHEN, advantages/disadvantages
b. Working principles of the library
3. Knowledge of a Frontend Framework (Next.js/Nuxt.js,SolidStart/SvelkitKit)
a. THE WHY, WHEN , advantages/disadvantages
b. Working principles of the frameworks
4. Build Tools and Package Managers (Webpack/Babel/npm/yarn)
a. Basic understanding of what they do, and why they are needed
5. Dev Tooling for code Quality
a. Basic understanding of code formatters (Prettier), linters (Eslint), commit
hooks
6. Understanding RESTful API’s
a. Understanding HTTP status codes
b. Why API’s are needed and how to work with them from client
7. UI/UX design principles
a. Technical communication with designers
b. Collaboration with designers for features
8. Basic understanding of Accessibility/ Cross Browser Support/ Debugging
skills
Our tech stack on Frontend Website includes: React, Next.js, TypeScript, React Query,
Jotai, Stitches, Radix UI
Note: Please feel free to take the assignment, even if you do not meet all the skill
mentioned boave, we do not expect anybody to meet 100% of the requirements.
Task : Show Data in Table
Description:
In this assignment, you will be tasked to create a dashboard which lists the data from a
external API source.
Objective:
The main object of this task is to understand you knowledge on API, state management
and UX principles.
Deliverables:
- You are supposed to create a react application using Typescript/JavaScript which
can meet the requirements mentioned below
- You should commit your code and submit to Github and share the link after
completion
- Make sure to mark the repository as public, so we can view it.
- Maintain good code quality and readability based on your understanding
- Project can README to help understand folder structure or mention any pointers
that you want to bring into the attention of the reviewer.
Skills Tested For:
- React (library)
- Typescript/JavaScript (language)
- Working with API’s (client server communication)
- Ability to manage state in the application (react internals)
- Code Quality (developer experience)
- Component API Composition in React (developer experience)
Contact:
For any doubts or confusions, reach out to abhushan@alippo.com or
chandwanidisha19@gmail.com
Requirements:
You are required to make a table component, which can take in a data and display it as
follows:
- Handle null /empty cases in data
- Handle erors in API
You can use the following API to get your data:
https://assets.alippo.com/catalog/static/data.json
- Each row on the table will be a entry of data provided by the API
- Each column will be a entry for the properties on the data.
There are two special columns (SL.NO) and Actions whose functional is described
below
- SL.No column must display the position of row starting from (1,2,3….)
- Actions column has a button group with two actions (Edit and Delete) actions
“EDIT” action button:
- The action button when pressed, should display a modal/dialog which gives
users a option to edit the entry present in column1
- User can either make edits on the entry and submit or cancel
- If the user submits the entry, it must reflect on the table correctly
- If the user cancels, then table should not have the updated entry.
The input box inside the edit modal/dialog should always show the value
- if it exists in the column use the value as default value of input
- if null show a empty state (pick the empty state to be either ‘’ (empty string) or ‘-’
(dash). Fields will are null, should be considered as empty state
“REMOVE or DELETE” action button:
- The action when pressed, should display a modal/edit similar to edit action
- If the user cancels, then nothing should change on table
- If the user saves, then the entry must be removed from the table.
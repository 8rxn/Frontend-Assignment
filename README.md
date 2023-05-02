
# React UI-Schema Previewer

This project is a React application that allows users to paste a UI-Schema on the left side of the screen and preview the rendered form on the right-hand side. The application has a single screen that is divided into two equal sections next to each other. On the left section is a JSON editor to paste the UI-Schema, and on the right section, a form is automatically rendered based on the pasted UI-Schema.

## Getting Started

To run this project on your local machine, follow the steps below:

1. Clone this repository to your local machine.
2. Open your terminal and navigate to the project directory.
3. Install the project dependencies by running the following command:

   ```
   npm install
   ```

4. Start the development server by running the following command:

   ```
   npm run dev
   ```

   This will start the development server and open the application in your default browser.

## How to use the application

1. On the left-hand side of the screen, you will see a JSON editor.
2. Paste your UI-Schema in the editor.
3. On the right-hand side of the screen, you will see a preview of the rendered form based on the UI-Schema.
4. You can make changes to the UI-Schema and see the changes reflected in the rendered form.

[https://asset.cloudinary.com/dlpvfuhpn/0848a40334f01f16869b119d573a80cc] Explanation

[Example UI Schema](https://drive.google.com/file/d/19_E6dSDUbiDR31wNSSvUARHxh1HeT6L4/view)  - Pizza Schema

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [JSON Editor](https://github.com/json-editor/json-editor) - A JSON Schema based editor.
- [React JSON Schema Form](https://github.com/mozilla-services/react-jsonschema-form) - A React component for building Web forms from JSON Schema.

## How The Code Works

### Explanation of React Code for Editor Component

This is a functional React component called `Editor` which represents the JSON editor displayed on the left side of the UI. The component takes three props:

- `value`: The value of the JSON schema entered in the editor.
- `handler`: A function that is called when the user clicks the "Preview Form" button.
- `setUiSchemaString`: A function that is used to update the state of the parent component with the updated JSON schema.

The component returns a `div` that contains two child elements:

- A `div` element containing the heading "Enter Your JSON Schema Here:" and a `textarea` element where the user can enter the JSON schema.
- A `button` element that triggers the `handler` function when clicked.

- The `textarea` element is styled using tailwind CSS classes. It has a default value of the pasta schema and can be updated by the user. The updated JSON schema is passed to the parent component using the `setUiSchemaString` function.

- Finally, the `Editor` component is exported as a default export to be used in other parts of the application.

### Explanation for Form Component



This React code defines a component called `Form` that is used to render a dynamic form based on a JSON schema. The form is rendered on the right side of a UI.

The `Form` component receives several props, including `schema`, `formData`, `setFormData`, `currentTab`, `setCurrentTab`, `advanced`, `setResultToggle`, `setAdvanced`, and `setJsonBackend`. These props are used throughout the code to handle various aspects of the form's functionality.

The `Form` component defines several functions, including `handleSubmit`, `filterFormData`, `handleSwitchChange`, `handleChange`, and `renderField`. 

- The `Form` component renders a dynamic form based on the `schema` prop. It maps through the `schema` array and calls the `renderField` function to render each field. The `Form` component also passes the `handleSwitchChange` and `handleChange` functions as props to the child components.


- The `handleSubmit` function is called when the form is submitted. It prevents the default form submission, sets the `jsonBackend` state to the current form data, and sets the `resultToggle` state to `true`. This will display a modal that contains the Data that is sent to the backend

- The `handleSwitchChange` function is called when a switch component is toggled. It updates the `formData` state by setting the value of the toggled switch.

- The `handleChange` function is called when an input component's value changes. It updates the `formData` state based on the changed value.

- The `renderField` function is used to render each field in the JSON schema. It checks the `uiType` property of each field and renders the corresponding component, including `Input`, `Group`, `Select`, and `Radio`. The `renderField` function recursively calls itself to render nested fields. The function also checks if the `advanced` property is set for a group field and shows or hides the advanced options based on the toggle. The `ignore` parameter is a list of current level `uiType` `ignore` fields whose value is to be deleted and re added for a Tab into the `formData` everytime a field of another tab of the same level is clicked. 

### ResultModal Component
The ResultModal component is a modal that displays the JSON file that would be sent to the backend on Click of the submit button.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
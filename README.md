
### This Part is still under process
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

The `textarea` element is styled using tailwind CSS classes. It has a default value of the pasta schema and can be updated by the user. The updated JSON schema is passed to the parent component using the `setUiSchemaString` function.

Finally, the `Editor` component is exported as a default export to be used in other parts of the application.




## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
import React, { useState } from "react";
import { pastaSchema } from "./constants";
import { Form, Editor, ResultModal } from "./components";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [uiSchemaString, setUiSchemaString] = useState("");
  const [uiSchema, setUiSchema] = useState(pastaSchema);
  const [resultToggle, setResultToggle] = useState(false);
  const [jsonBackend, setJsonBackend] = useState({});
  const [formData, setFormData] = useState({});
  const [currentTab, setCurrentTab] = useState("");
  const [advanced, setAdvanced] = useState({ all: false });

  const handlePreview = () => {
    const json = JSON.parse(uiSchemaString);
    setUiSchema(json);
  };

  useEffect(() => {
    console.log(uiSchema);
  }, [uiSchema]);

  return (
    <>
      <div className="h-screen w-screen grid place-items-center">
        {resultToggle && <ResultModal json={jsonBackend} toggle={setResultToggle} />}
        <div className="flex justify-evenly items-center w-[100%] flex-col  gap-10 sm:flex-row ">
          <div className="h-[100vh] w-[fit] px-10 bg-red grid place-items-center">
            <Editor
              value={uiSchemaString}
              handler={handlePreview}
              setUiSchemaString={setUiSchemaString}
            ></Editor>
          </div>
          <div className="h-[100vh] w-[45vw] bg-red grid place-items-center">
            <Form
              schema={uiSchema}
              formData={formData}
              setFormData={setFormData}
              setAdvanced={setAdvanced}
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              advanced={advanced}
              setJsonBackend={setJsonBackend}
              setResultToggle={setResultToggle}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

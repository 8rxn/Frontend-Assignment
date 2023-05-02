import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

const Form = ({
  schema,
  formData,
  setFormData,
  currentTab,
  setCurrentTab,
  advanced,
  setResultToggle,
  setAdvanced,
  setJsonBackend,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setJsonBackend(formData);
    setResultToggle(true);
    
  };
  const filterFormData = (selectedType) => {
    const currentType = schema.find((field) => field.jsonKey === 'type');
    
    if (!currentType || !currentType.subParameters) {
      return formData;
    }
  
    const subParameters = currentType.subParameters.find(
      (param) => param.conditions[0].value === selectedType
    );
  
    if (!subParameters || !subParameters.subParameters) {
      return formData;
    }
  
    const allowedKeys = subParameters.subParameters.map((param) => param.jsonKey);
    allowedKeys.push('type');
  
    const filteredFormData = Object.keys(formData).reduce((result, key) => {
      if (allowedKeys.includes(key)) {
        result[key] = formData[key];
      }
      return result;
    }, {});
  
    return filteredFormData;
  };
  
  

  const handleSwitchChange = (e, jsonKey) => {
    setFormData({ ...formData, [jsonKey]: e.target.checked });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    
  
    if (name === 'type') {
      setFormData({ type: value });
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };
  

  const renderField = (field,ignore) => {
    // console.log(field);
    const {
      sort,
      label,
      description,
      validate,
      jsonKey,
      uiType,
      icon,
      level,
      placeholder,
      subParameters,
      conditions,
      disable,
    } = field;

    switch (uiType) {
      case "Input":
        return (
          
          <>
          {!disable && <div key={jsonKey} className="w-full flex gap-2 justify-evenly bg-gray-700/40 p-5 rounded-lg border-2"> 
            
                <label htmlFor={jsonKey} className="w-[50%]">{label}{validate.required && <span className="text-red-500 pl-1">*</span> } </label>
                <input
                  type="text"
                  name={jsonKey}
                  id={jsonKey}
                  placeholder={placeholder}
                  value={formData[jsonKey] || ""}
                  onChange={(e)=>{handleChange(e); ignore && ignore.map((item)=>{delete formData[item.jsonKey]; console.log("delete",item.jsonKey)})} }
                  className="w-[50%] rounded-md px-2 py-1"
                  required={validate?.required}
                
                />

          </div>
          }    </>
        );

      case "Group":
        return (
          <div key={jsonKey} className="w-full bg-gray-700/40 p-5 rounded-lg border-2">
            <h2 className="border-b-2 border-gray-500 mb-4">{label}{validate.required && <span className="text-red-500 pl-1">*</span> } </h2>

            {!advanced[jsonKey] &&
              subParameters?.map(
                (subField) =>
                  subField.validate.required && renderField(subField)
              )}
            {advanced[jsonKey] &&
              subParameters?.map((subField) => renderField(subField))}
            <div>
              {

                <Checkbox onClick={() => {
                  setAdvanced({
                    ...advanced,
                    [jsonKey]: false || !advanced[jsonKey],
                  });}}>{advanced[jsonKey]?"Show Advanced Option":"Hide Advanced Option"} 

                </Checkbox>
              }
            </div>
          </div>
        );

      case "Select":
        return (
          <div key={jsonKey} className="mb-3 w-[100%] flex gap-10 justify-between">
            <label htmlFor={jsonKey} className="w-[50%]">{label}{validate.required && <span className="text-red-500 pl-1">*</span> } </label>
            <select 
              className="w-[50%] px-2 py-1 rounded-md"
              name={jsonKey}
              id={jsonKey}
              // value={"select"}
              onChange={(e)=>{handleChange(e); ignore && ignore.map((item)=>{delete formData[item.jsonKey]; console.log("delete",item.jsonKey)})} }
              required={validate?.required}
            >
              <option className="hidden"></option>
              {validate?.options?.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        );

  case "Radio":
  return (
    <div className="flex w-full relative gap-10 mb-3" key={jsonKey}>
      <div className="flex justify-center w-[100%] gap-4 mb-3">
        {validate.options.map((item) => {
          useEffect(() => {
            setCurrentTab(item.value);
            setFormData({ ...filterFormData(item.value), [jsonKey]: item.value });

          }, []);

          return (
            <div className="w-[100%]" key={item.value}>
              <div
                onClick={() => {
                  setCurrentTab(item.value);
                  setFormData({ ...filterFormData(item.value), [jsonKey]: item.value });
                }}
                className={`bg-white/10 cursor-pointer border-2 border-white px-2 py-1 rounded-lg ${
                  currentTab === item.value ? "bg-gray-800" : "bg-transparent"
                }`}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );


        case "Switch":
          return (
            <div className="flex gap-2 mb-3" key={jsonKey}>
              <input
                type="checkbox"
                className="scale-125"
                name={jsonKey}
                id={jsonKey}
                checked={formData[jsonKey] || validate?.defaultValue}
                onChange={(e) => {handleSwitchChange(e, jsonKey); ignore && ignore.map((item)=>{delete formData[item.jsonKey]; console.log("delete",item.jsonKey)})} }


              />
              <p>{label}</p>
            </div>
          );
      case "Ignore":
        const ignoreTabs= subParameters?.map((subField)=>subField);
        console.log(ignoreTabs)
        return (
          <div className="mb-3"  key={jsonKey}>
            {currentTab === conditions[0].value &&
              subParameters?.map((subField) => renderField(subField,ignoreTabs))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/20 p-6 rounded-2xl text-lg font-semibold">
      <h2 className="w-full border-b-2 border-gray-500 mb-3 font-bold text-xl ">New Form</h2>
      <div className="flex flex-col gap-4">
      {schema?.map((field) => renderField(field))}
      </div>
      <div className="flex justify-between w-[40vw] ">
      <div className="flex items-center">
      <Checkbox>Show Advanced Fields</Checkbox>
      </div>
      <div className="flex gap-4">
      <button
        type="submit"
        className="rounded-lg py-1 px-5 border-gray-700 border-2 font-semibold"
      >
        Cancel
      </button>
        <button type="submit" className="rounded-lg py-1 px-5 bg-gray-700 font-semibold">Submit</button>
      </div>

      </div>
    </form>
  );
};

export default Form;

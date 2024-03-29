import React, {useState} from "react";
import './App.css';
import FormGeneratorThemeContextProvider from "../form-generator-theme/FormGeneratorThemeContextProvider";
import FormGeneratorThemeContext from "../form-generator-theme/FormGeneratorThemeContext";
import {Button} from "@mui/material";
import {Tab, Tabs} from "react-bootstrap";
import DictionaryFieldTest from "./DictionaryFieldTest";
import TextFieldTest from "./TextFieldTest";
import TagsFieldTest from "./TagsFieldTest";
import EmbeddedFieldTest from "./EmbeddedFieldTest";
import SelectFieldTest from "./SelectFieldTest";
import FormFieldTest from "./FormFieldTest";
import FileFieldTest from "./FileFieldTest";
import NumberFieldTest from "./NumberFieldTest";
import DateFieldTest from "./DateFieldTest";
import CollectionFieldTest from "./CollectionFieldTest";

function App() {
  const [activeTab, setActiveTab] = useState("text")

  return <div className="mx-5 px-5">
          <FormGeneratorThemeContextProvider theme="bootstrap">
              <FormGeneratorThemeContext.Consumer>
                  {
                      ({theme, setTheme})=>{
                          return <>
                              <div>
                                  <Button disabled={theme === "bootstrap"} onClick={()=>{setTheme("bootstrap")}}>Bootstrap</Button>
                                  <Button disabled={theme === "material-ui"} onClick={()=>{setTheme("material-ui")}}>Material - UI</Button>
                                  <Tabs
                                      activeKey={activeTab}
                                      defaultActiveKey="collection"
                                      onSelect={(k) => {if(k) setActiveTab(k)}}
                                      className="mb-3"
                                  >
                                      <Tab eventKey="text" title="Text">
                                          <TextFieldTest/>
                                      </Tab>
                                      <Tab eventKey="number" title="Number">
                                          <NumberFieldTest/>
                                      </Tab>
                                      <Tab eventKey="select" title="Select">
                                          <SelectFieldTest/>
                                      </Tab>
                                      <Tab eventKey="date" title="Date">
                                          <DateFieldTest/>
                                      </Tab>
                                      <Tab eventKey="collection" title="Collection">
                                          <CollectionFieldTest/>
                                      </Tab>
                                      <Tab eventKey="dictionary" title="Dictionary">
                                          <DictionaryFieldTest/>
                                      </Tab>
                                      <Tab eventKey="tags" title="Tags">
                                          <TagsFieldTest/>
                                      </Tab>
                                      <Tab eventKey="embedded" title="Embedded">
                                          <EmbeddedFieldTest/>
                                      </Tab>
                                      <Tab eventKey="form" title="Form">
                                          <FormFieldTest/>
                                      </Tab>
                                      <Tab eventKey="file" title="File">
                                          <FileFieldTest/>
                                      </Tab>
                                  </Tabs>
                              </div>
                          </>
                      }
                  }
              </FormGeneratorThemeContext.Consumer>
          </FormGeneratorThemeContextProvider>
  </div>
}

export default App;

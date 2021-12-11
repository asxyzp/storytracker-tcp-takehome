//IMPORTING PACKAGES
import React, { useState, createContext } from 'react';
import './Styles/style.css';
import { Route } from 'react-router-dom';
import SideBar from './Components/SideBar';
import StoryDisplay from './Components/StoryDisplay';
import StoryCreator from './Components/StoryCreator';

//USING CONTEXT API FOR STATE MGMT
export const Context = createContext();

/**
 * FUNCTION : App COMPONENT 
 * FUNCTIONALITY : ENTRY POINT TO THE PROGRAM
 * @param {*} props : COMPONENT PROPS
 * @returns : <App/> (JSX)
 */
const App = (props) => {

  const [stories, setStories] = useState([]);

  //CONTEXT VALUES PASSED TO ALL COMPONENTS
  const ContextVal = {
    stories: stories,
    setStories: setStories
  };

  return (
    <div className="vw-100 vh-100 d-flex">
      <Context.Provider value={ContextVal}>
        <SideBar />
        <Route path="/" exact component={StoryDisplay} />
        <Route path="/create" component={StoryCreator} />
      </Context.Provider>
    </div>
  );
}

export default App;
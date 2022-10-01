//IMPORTING PACKAGES
import { Context } from '../App';
import Taken from '../Assets/taken.svg';
import React, { useContext } from 'react';

/**
 * 
 * @param {*} props 
 * @returns 
 */
const StoryDisplay = (props) => {

    //USING CONTEXT HOOK TO GET STATE VALUES
    const ContextVal = useContext(Context);
    const stories = ContextVal["stories"];

    return (
        <div className="flex-grow d-flex">
            {
                stories.length === 0 ?
                <div className="h-100 flex-grow d-flex flex-column justify-content-center align-items-center w-100 h-100">
                    <img src={Taken} className="w-25" alt="Aliens taking something"/>
                    <span className="h4 fw-bold mt-3">No stories to see here</span>
                </div> :
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stories.map((story, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{story.username}</td>
                                        <td>{story.title}</td>
                                        <td>{story.description}</td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    );
};

export default StoryDisplay

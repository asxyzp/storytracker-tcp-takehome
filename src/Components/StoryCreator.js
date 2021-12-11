import { Context } from '../App';
import React, { useContext, useState } from 'react';

/**
 * FUNCTION : StoryCreator COMPONENT
 * FUNCTIONALITY : CONTAINS FORM FOR CREATING NEW STORIES
 * @param {*} props : COMPONENT PROPS
 * @returns : <StoryCreator/>
 */
const StoryCreator = (props) => {

    //STATE HOOKS
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    //USING CONTEXT HOOK TO GET STATE VALUES
    const ContextVal = useContext(Context);
    const stories = ContextVal["stories"];
    const setStories = ContextVal["setStories"];

    /**
     * FUNCTION : submit(event)
     * FUNCTIONALITY : PERFORMS REQUIRED OPERATION WHEN THE FORM IS SUBMITTED
     * @param {*} event EVENT OBJECT
     * @returns UNDEFINED
     */
    const submit = (event) => {
        event.preventDefault();

        //STORY TO BE SET IN STATE AND SENT AS PART OF REQUEST TO API
        const newStory = {
            username: username,
            title: title,
            description: description
        };

        //SETTING STATE
        setStories([...stories, newStory]);
        
        //RESETTING STATE VALUES
        setUsername("");
        setTitle("");
        setDescription("");
    };

    return (
        <div className="flex-grow d-flex justify-content-center align-items-center">
            <form className="border rounded shadow w-75 p-3" onSubmit={submit}>

                <label
                    htmlFor="username"
                    className="text-dark small fw-bold">
                    Username&nbsp;<span className="text-danger">*</span>
                </label>
                <input
                    id="username"
                    value={username}
                    onInput={(event) => setUsername(event.target.value)}
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter username (e.g. asxyzp)"
                    minLength="5" required />

                <label
                    htmlFor="title"
                    className="text-dark small fw-bold">
                    Title&nbsp;<span className="text-danger">*</span>
                </label>
                <input
                    id="title"
                    value={title}
                    onInput={(event) => setTitle(event.target.value)}
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter title of the story"
                    minLength="15" required />

                <label
                    htmlFor="desc"
                    className="text-dark small fw-bold">
                    Description
                </label>
                <textarea
                    id="desc"
                    value={description}
                    onInput={(event) => setDescription(event.target.value)}
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter title of the story"></textarea>

                <button className="btn btn-dark w-100">Submit</button>
            </form>
        </div>
    );
};

export default StoryCreator

import React from 'react'
import userStory1 from '../../../../src/images/user-story1.jpg';
import userStory2 from '../../../../src/images/user-story2.jpg';

import './UserExamples.css'
import '../../../App.css';

var UserExamples = () => {
    return (
        <div className="container example-container">
            <div className="row">
                <div className="header col">
                    <h2>
                        <em className="div-title">User Examples</em>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col imgcol">
                    <img
                        className="story-images"
                        src={userStory1}
                        alt="placeholder"
                    />
                </div>
                <div className="col imgcol">
                    <img
                        className="story-images"
                        src={userStory2}
                        alt="placeholder"
                    />
                </div>
            </div>
        </div>
    )
}
export default UserExamples

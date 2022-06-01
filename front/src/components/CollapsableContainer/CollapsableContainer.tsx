import React from "react";
import "./CollapsableContainer.css";

class CollapsableContainer extends React.Component {
    render() {
        return (
            <div className="collapsablecontainer">
                <div className="ccheader">
                    <p>this is a header</p>
                </div>
                <div className="ccbody">
                    <p>this is the new body</p>
                    <p>this is the new body</p>
                    <p>this is the new body</p>
                    <p>this is the new body</p>
                    <p>this is the new body</p>
                </div>
            </div>
        );
    }
}

export default CollapsableContainer;

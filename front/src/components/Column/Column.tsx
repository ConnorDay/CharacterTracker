import React from "react";
import "./Column.css";

type Props = {
    children?: React.ReactNode[] | React.ReactElement<any, any>;
};

function Column(props: Props) {
    const { children } = props;

    //The spans are there for when we have to implement resizing the columns.
    //Because we can add on click methods to them :)
    return (
        <div className="column-supercontainer">
            <span></span>
            <div className="column-container">{children}</div>
            <span></span>
        </div>
    );
}

export default Column;

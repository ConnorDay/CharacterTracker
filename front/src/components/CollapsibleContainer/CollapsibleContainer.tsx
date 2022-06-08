import React, { useState } from "react";
import "./CollapsibleContainer.css";

type Props = {
    children?: React.ReactNode[] | React.ReactElement<any, any>;
    header: string;
};

function CollapsibleContainer(props: Props) {
    const { children, header } = props;
    const [isHidden, setHidden] = useState(false);

    let bodyClass = "ccbody";
    if (isHidden) {
        bodyClass += "-hidden";
    }

    return (
        <div className="collapsiblecontainer">
            <p className="ccheader" onClick={() => setHidden(!isHidden)}>
                {header}
            </p>
            <div className={bodyClass}>{children}</div>
        </div>
    );
}

export default CollapsibleContainer;

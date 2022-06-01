import React from "react";
import "./CollapsibleContainer.css";

type Props = {
    children?: React.ReactNode;
};

class CollapsibleContainer extends React.Component<Props> {
    render() {
        const { children } = this.props;
        return <div className="collapsiblecontainer">{children}</div>;
    }
}

export default CollapsibleContainer;

import React from "react";
import "./CollapsibleContainer.css";

type Props = {
    children?: React.ReactNode[] | React.ReactElement<any, any>;
    header: string;
};
type State = {
    isHidden: boolean;
};

class CollapsibleContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isHidden: false,
        };
    }

    toggleHidden() {
        const { isHidden } = this.state;
        this.setState({
            isHidden: !isHidden,
        });
    }

    render() {
        const { children, header } = this.props;
        const { isHidden } = this.state;

        let bodyClass = "ccbody";
        if (isHidden) {
            bodyClass += "-hidden";
        }

        return (
            <div className="collapsiblecontainer">
                <p className="ccheader" onClick={() => this.toggleHidden()}>
                    {header}
                </p>
                <div className={bodyClass}>{children}</div>
            </div>
        );
    }
}

export default CollapsibleContainer;

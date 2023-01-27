import {Component} from "react"
class Container extends Component {
    constructor(props) {
        super(props);
        // this.props = props;
    }
    render() {
        return (
            <div className="mt-5">
                <div className="container">{this.props.children}</div>
            </div>
        )
    }
}

export default Container;
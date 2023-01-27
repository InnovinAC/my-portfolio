import React from "react"
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let footer;
        this.props.footer && (footer = <div className="card-footer">{this.props.footer}</div>);
        return (
            <div className="card">
                <div className={`text-white card-header bg-${this.props.header_color}`}>{this.props.header}</div>
                <div className="card-body">
                    {this.props.children}
                </div>
            {footer}
                
            </div>
        )
    }
}
export default Card;
class DebateBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            more: "More Information"
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
        if (this.state.menu) {
            this.setState({ more: "More Information" })
        } else {
            this.setState({ more: "Less Information" })
        }
    }

    render() {

        const show = (this.state.menu) ? "show" : "";
        return (
            <div>
                <div className="card border-primary mb-3">
                    <div className="card-header">{this.props.pos}</div>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.summary}</p>
                        <button type="button" className="btn btn-outline-info" onClick={this.toggleMenu}>
                            <span>{this.state.more}</span>
                        </button>
                        <div className={"collapse" + show}>
                            <br />
                            <h5>{this.props.title} - Extended</h5>
                            <p>{this.props.p1}</p>
                            <p>{this.props.p2}</p>
                            <p>{this.props.p3}</p>
                        </div>
                    </div>
                </div>

            </div>




        );
    }
}

export default DebateBox;
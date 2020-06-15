import Link from 'next/link';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }
    render() { 
        const show = (this.state.menu) ? "show" : "";

        return ( <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        
        <div className="container">
    <Link href="/"><a className="navbar-brand"><img src="data:image/png;base64,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" alt="logo" /></a></Link>
            <button className="navbar-toggler" type="button" onClick={this.toggleMenu} aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>
           <div className={"collapse navbar-collapse " + show} id="navbarColor01">
           <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link href="/currentcontroversies"><a className="nav-link">Current Controversies</a></Link>
                    </li> */}
                    <li className="nav-item">
                        <Link href="/persistentcontroversies"><a className="nav-link">Persistent Controversies</a></Link>
                    </li>
               
                </ul>
           </div>
        </div>
   </nav> );
    }
}
 
export default NavBar;

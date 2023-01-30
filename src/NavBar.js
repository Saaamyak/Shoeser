import './header.css';

function NavBar(props){
    return (
        <nav id="header" className="helloheader">
            <div className="logo">Shoeser</div>
            <ul className="nav-links">
                <li><a style={{color:props.product.color}} href="/">Home</a></li>
                <li><a style={{color:props.product.color}} href="/">About</a></li>
                <li><a style={{color:props.product.color}} href="/">Contact</a></li>
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default NavBar
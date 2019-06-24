/*
* Navbar Component, switches between mobile and desktop modes
*/
import Logo from '../../static/svg/logo.svg';
import Link from 'next/link';

export default () => {
    const [hamburger, setHam] = React.useState(false);
    const isActive = 'hamburger hamburger--elastic is-active';
    const isNotActive = 'hamburger hamburger--elastic';


    return(
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{position: "", width:"100%", background:"none"}}>
            <div className="container">
                <div className="navbar-brand">
                    <a style={{height: 115, width: 75}}>
                        <Link href="/">
                            <Logo />                           
                        </Link>
                    </a>
              
                    <span className="hamburger-custom" data-target="navMenu">
                        <button className={hamburger ? isActive : isNotActive} type="button" style={{outline:0}} onClick={()=> hamburger ? setHam(false) : setHam(true)}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>                        
                        </button>
                    </span>
                </div>
                <div id="navMenu" className={hamburger ? 'navbar-menu is-active': 'navbar-menu'}>
                    <div className="navbar-end">
                        <Link href="/"><a className="nav-button">Home</a></Link>
                        <Link href="/frequently-asked"><a className="nav-button">FAQs</a></Link>                       
                        <Link href="/process"><a className="nav-button">Process</a></Link>
                        <Link href="/contact"><a className="nav-button with-border">Hire Me</a></Link>                        
                    </div>
                </div>
            </div>
        </nav>
    )
}
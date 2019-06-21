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
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{position: "absolute", width:"100%", background:"none"}}>
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
                        <a href="#" className="navbar-item">Item1</a>
                        <a href="#" className="navbar-item">Item2</a>
                        <a href="#" className="navbar-item">Item3</a>
                        <a href="#" className="navbar-item">Item4</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
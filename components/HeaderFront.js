/*
*   Header
*/
import Link from 'next/link'
import { useState } from 'react';


function HeaderFront(){
    const [hamburger, setHam] = useState(false);


    return(
        <header className="hero is-fullheight "  >
            <nav className="navbar" role="navigation" aria-label="main navigation" style={{position: "absolute", width: "100%"}}>
                <div className="container">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a className="navbar-item">
                                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                            </a>
                        </Link>

                        <span className="hamburger-custom" data-target="navMenu">
                            <button className={hamburger ? 'hamburger hamburger--elastic is-active' : 'hamburger hamburger--elastic'} 
                                    type="button" style={{outline:0}}  onClick={()=> hamburger ? setHam(false) : setHam(true)}>
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </span>
                    </div>
                    <div id="navMenu" className={hamburger ? 'navbar-menu is-active' : 'navbar-menu'}>
                        <div className="navbar-end">
                            <a href="#" className="navbar-item">Item1</a>
                            <a href="#" className="navbar-item">Item2</a>
                            <a href="#" className="navbar-item">Item3</a>
                            <a href="#" className="navbar-item">Item4</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="columns">
            
                <div className="column is-three-fifths" style={{padding: '4rem'}} >
                    <h1 className="main-title">
                       London's Most Exclusive Freelance Web Design
                    </h1>
                    <Link href="/contact">
                        <a className="button is-medium is-rounded button-wider">Contact Me!</a>
                    </Link>
                </div>
                <div className="column">
                    Right
                </div>
            </div>
            
        </header>
    )
}

export default HeaderFront;
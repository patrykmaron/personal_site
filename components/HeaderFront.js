/*
*   Header
*/
import Link from 'next/link'
import { useState } from 'react';
import AzureSVG from '../static/azure.svg';
import AzureLight from '../static/azure_light.svg';
import Logo from '../static/logo.svg';
import BigBlob from '../static/big_blob.svg';
import BigBlobLight from '../static/big_blob_light.svg';


function HeaderFront(){
    const [hamburger, setHam] = useState(false);
    

    return(
        <header className="hero is-fullheight "  >
            <div className="svg-container">
            
            <BigBlob width="35%" height="35%" className="big-blob" />
            <BigBlobLight width="38%" height="38%" className="big-blob-light" />

            <AzureSVG width="80%" height="80%" className="blue-azure" />
            <AzureLight  width="83%" height="83%" className="blue-azure-light" />
            


            </div>  
            <nav className="navbar" role="navigation" aria-label="main navigation" style={{position: "absolute", width: "100%"}}>
                <div className="container">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a style={{height: 115, width: 75}}>
                            <Logo width="100%" height="100%" />
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
        <div className="container">
        <div className="columns">
            
            <div className="column is-6" style={{marginTop: "7rem"}} >
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
        </div>
            
            
        </header>
    )
}

export default HeaderFront;
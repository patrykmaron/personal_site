/*
* Landing Header
*/

import Link from 'next/link';

export default () => {

    return(
        <header className="hero is-fullheight" style={{overflow:"hidden"}}>
            
            <div className="container">
                <div className="columns">
                    <div className="column mobile-friendly is-6" >
                        <h1 className="main-title">
                            London's Most Exclusive Freelance Web Design
                        </h1>
                        <Link href="/contact">
                            <a className="button is-large is-rounded is-primary ">Contact Me!</a>
                        </Link>
                    </div>
                    <div className="column">
                    <img src="../../static/png/webdesign.png" className="img-webdesign" />
                    </div>
                </div>
            </div>
            
        </header>
    )
}
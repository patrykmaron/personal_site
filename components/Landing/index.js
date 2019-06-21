/*
* Landing Header
*/
import BackgroundSVG from '../BackgroundSVG';
import Link from 'next/link';


export default () => {

    return(
        <header className="hero is-fullheight">
            <BackgroundSVG />
            <div className="container">
                <div className="columns">
                    <div className="column is-6" style={{marginTop: "7rem"}}>
                        <h1 className="main-title">
                            London's Most Exclusive Freelance Web Design
                        </h1>
                        <Link href="/contact">
                            <a className="button is-medium is-rounded button-wider">Contact Me!</a>
                        </Link>
                    </div>
                    <div className="column">
                        
                    </div>
                </div>
            </div>

        </header>
    )
}
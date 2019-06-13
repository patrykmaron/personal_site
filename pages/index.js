import Layout from '../components/Layout'
import HeaderFront from '../components/HeaderFront'
import anime from 'animejs';


// uninstall popmotion and animejs 


class Home extends React.Component {

    componentDidMount(){
        var el = document.getElementsByClassName('big_blob_svg__bigblobpath')
        anime({
            targets: el,
            d: [{value: 'M1.68,92.92C6.44,26.39,70.33,2.57,108.61.25c58.85-3.56,137.82,30.89,156.83,87.92,9.08,27.24-19.77,115.43-38,133.07-27.55,26.62-116,41.33-154.45,30.89C-7,230.41-2,143.86,1.68,92.92Z'}],
            duration: 2000,
            direction: 'alternate',
            autoplay: true,
            loop: true
        })

    }

    render(){
        return(
            <Layout title="Patryk Maron | Personal Website">
            
                <HeaderFront />

              <section className="section">
                    <div className="container">
                        <h1 className="title" style={{textAlign: "center", fontSize: "3.5rem", fontFamily: "'Montserrat', sans-serif"}}>
                            Let's Work Together
                        </h1>
                        <h2 className="subtitle" style={{textAlign: "center", fontSize: "1.5rem", fontFamily: "'Montserrat', sans-serif"}}>
                           
                        </h2>
                        <div className="columns backgroundMe" style={{paddingLeft: "3rem", paddingRight: "3rem", paddingTop: "6rem",paddingBottom: "6rem"}}>
                            <div className="column is-4">

                            </div>
                            <div className="column is-7" >
                                <div className="content" >
                                     <p style={{fontSize: "1.5rem", fontWeight: "bold", zIndex: 100,} }>I'm Patryk, an award-winning web developer thats been crafting awesome websites and apps from South London since 2012! I’m fiercely dedicated to designing the best websites I possibly can, for clients just like you. Websites that not only look beautiful but leave your competitors in the dust and help your business grow.</p>
                                     <a className="button is-medium is-rounded button-wider-2">Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section> 

                <section className="section">
                    <div className="container">
                    <h1 className="title" style={{textAlign: "center", fontSize: "3.5rem", fontFamily: "'Montserrat', sans-serif"}}>
                            Services
                        </h1>
                        <h2 className="subtitle" style={{textAlign: "center", fontSize: "1.5rem", fontFamily: "'Montserrat', sans-serif"}}>
                            Turning your ideas into reality
                        </h2>
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-8">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical">
                                        <article className="tile is-child notification gradient-blue">
                                            <p className="title">Vertical...</p>
                                            <p className="subtitle">Top tile</p>
                                        </article>
                                        <article className="tile is-child notification gradient-green">
                                            <p className="title">SEO Optimazinations</p>
                                            <p className="subtitle">Are you battling the Google bots? We can help you get your page indexed correctly!</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent" >
                                        <article className="tile is-child notification gradient-red">
                                            <p className="title">Web Design</p>
                                            <p className="subtitle">Do you need just an landing page for your start up? Or a fancy blog to keep the world updated? Contact us!</p>
                                            <figure className="image is-4by3">
                                               
                                            </figure>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent" >
                                    <article className="tile is-child notification gradient-cherry">
                                        <p className="title">Wide tile</p>
                                        <p className="subtitle">Aligned with the right tile</p>
                                        <div className="content">
                                    
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification gradient-purple">
                                <div className="content">
                                    <p className="title">Mobile App Development</p>
                                    <p className="subtitle">Do you need iOS or Android app for your business? Worry no more!</p>
                                    <div className="content">
                                    </div>
                                </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
          

                <section className="hero is-primary is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-2">Let's Work Together!</h1>
                            <h2 className="subtitle is-4">Contact me today for a free consultation</h2>
                            <a className="button is-medium is-rounded button-wider-2">Contact Me</a>
                        </div>
                    </div>
                    
                </section>

                <footer className="footer" >
                    <div className="container">
                        <div className="columns is-variable is-8">
                                <div className="column">
                                    <div className="content">
                                        <h1>What I do</h1>
                                        <p>
                                        I'm a Freelance Web Designer based in London. I specialise in creating marketing websites for great individuals and small-medium sized businesses, helping them to market their product or services successfully on the web.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="column">
                                   <div className="content">
                                        <h1>Site Links</h1>
                                        <ul>
                                            <li>Home</li>
                                            <li>Contact</li>
                                            <li>FAQs</li>
                                            <li>My Process</li>
                                        </ul>
                                   </div>
                                </div>
                                
                                <div className="column">
                                    <div className="content">
                                            <h1>Contact</h1>
                                            <p>hello@patrykmaron.com</p>

                                    </div>
                                </div>
                            </div>
                            <div className="is-divider" ></div>
                            <div className="content has-text-centered">
                                <p>
                                by <a href="https://www.patrykmaron.com">Patryk Maron</a>, 2019. All rights reserved Trademarks and brands are the property of their respective owners.
                                </p>
                            </div>
                    </div>
                    
                </footer>
            </Layout>
        )
    }
}
  
export default Home;
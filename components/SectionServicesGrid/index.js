export default () => (
    <section className="section">
        <style jsx>
            {`
                h1 {
                    text-align: center;
                    font-size: 3.5rem;
                    font-family: 'Montserrat', sans-serif;
                }
                h2 {
                    text-align: center;
                    font-size: 1.5rem;
                    font-family: 'Montserrat', sans-serif;
                }
            `}
        </style>
        <div className="container">
            <h1 className="title">
                {'Services'}
            </h1>
            <h2 className="subtitle">
                {'Turning your ideas into reality'}
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
)
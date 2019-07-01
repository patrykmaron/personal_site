import Link from 'next/link';

export default () => (
    <section className="section">
    <style jsx>
            {`
                h1 {
                    text-align: center;
                    font-size: 3.5rem;
                    font-family: 'Montserrat', sans-serif;
                    color: #3457b4;

                   
                }
                h2 {
                    text-align: center;
                    font-size: 1.5rem;
                    font-family: 'Montserrat', sans-serif;
                }

                .content {
                    padding: 3rem;
                }
              
                

                .columns {
                    margin-bottom: 2.5rem;
                }
              
               
            `}
    </style>
        <div className="container">
            <h1 className="title">Services</h1>
            <h2 className="subtitle">Turning your ideas into reality</h2>
            <div className="columns is-appdev">
                <div className="column is-4">
                    <img src="../../static/png/appdevelopment.png" />
                </div>
                <div className="column is-8">
                    <div className="content">
                        <h3 className="">App Development</h3>
                        <p>Are you looking to elevate your business with an native iOS or Android app? Or you have a brilliant idea for an App but you don't know where to start? Look no more!</p>
                        <Link href="/app-development"><a className="button is-rounded is-primary is-medium">Find out more</a></Link>                        
                    </div>
                </div>

            </div>

            <div className="columns is-appdev is-reversed">
                <div className="column is-8">
                    <div className="content">
                        <h3 className="">E-Commerce</h3>
                        <p>Take your boutique business into the online realm! I will help you set up the most effective online presence and bring your products for the mass audience!</p>
                        <Link href="/ecommerce"><a className="button is-rounded is-primary is-medium">Find out more</a></Link>                        
                    </div>
                </div>
                <div className="column is-4">
                    <img src="../../static/png/ecommerce.png" />
                </div>
                
            </div>

            <div className="columns is-appdev">
                <div className="column is-4">
                    <img src="../../static/png/webcraft.png" />
                </div>
                <div className="column is-8">
                    <div className="content">
                        <h3 className="">Web Design</h3>
                        <p>In need of a simple landing page? Or a wordpress blog? Or just wanting to establish some online presence but you're not sure yet how? Contact me today for a free consultation!</p>
                        <Link href="/web-design"><a className="button is-rounded is-primary is-medium">Find out more</a></Link>                        
                    </div>
                </div>

            </div>

            <div className="columns is-appdev is-reversed">
                <div className="column is-8">
                    <div className="content">
                        <h3 className="">{'SEO & Content Optimazination'}</h3>
                        <p>You're already established but your content isn't getting any visiblity? I will look into pushing your website in the search results and make it friendly for Google robots to crawl through it!</p>
                        <Link href="/seo"><a className="button is-rounded is-primary is-medium">Find out more</a></Link>
        
                    </div>
                </div>
                <div className="column is-4">
                    <img src="../../static/png/seocontent.png" />
                </div>
                
            </div>
        </div>
    </section>
)
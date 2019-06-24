import Layout from '../../components/Layout';
import HeroPage from '../../components/HeroPage';
import Link from 'next/link';



export default () => (
    <Layout>
        <HeroPage
                Title="E-Commerce"
                Subtitle="I will help you open your online boutique!"
            />

        <style jsx>
            {`
                .is-special {
                    background: #f8faff;
                    padding: 2rem;
                    border-radius: 75px;
                }

                p {
                    font-size: 1.3rem;
                }
            `}
        </style>

        <section className="section">
            <div className="container">
                <div className="columns is-special">
                    <div className="column is-6">
                        <img src="../../static/png/ecommerce.png" />
                    </div>
                    <div className="column">
                       <div className="content">
                       <p>Starting an online shop is really daunting, however it is incredibly beneficial to any business of any size.</p>
                       <p>I will guide and assist you in the entire process of starting an online store for your product, and make sure you enter the world-wide-web with an unique branding that will stand out in the rich online market.</p>
                       <p>We can start your journey simple, and build up the web page/ app when features are begin to be needed to minify the development cost!</p>
                       <Link href="/contact"><a className="button is-rounded is-medium is-primary">Contact Me</a></Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)
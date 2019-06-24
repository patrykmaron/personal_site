import Layout from '../../components/Layout';
import HeroPage from '../../components/HeroPage';
import Link from 'next/link';



export default () => (
    <Layout>
        <HeroPage
                Title={'SEO & Content Optimazination'}
                Subtitle="Your troubles with Google crawlers ends here"
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
                        <img src="../../static/png/seocontent.png" />
                    </div>
                    <div className="column">
                       <div className="content">
                        <p>Confused why your web page isn't coming up in the Google searches? Or your analytics dashboard tells you all your content been excluded from indexes? No worries, I will investigate the issues associated getting your content out there in front of your customers!</p>
                        <p>Google likes to complicate things, let it be my job to simplify it for you.</p>

                        <Link href="/contact"><a className="button is-rounded is-medium is-primary">Contact Me</a></Link>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)
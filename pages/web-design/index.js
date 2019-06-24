import Layout from '../../components/Layout';
import HeroPage from '../../components/HeroPage';
import Link from 'next/link';



export default () => (
    <Layout>
        <HeroPage
                Title="Web Design"
                Subtitle="From landing pages to rich Wordpress sites!"
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
                        <img src="../../static/png/webcraft.png" />
                    </div>
                    <div className="column">
                       <div className="content">
                        <p>Are you a Start-up in need of a landing page? Or a established business who needs a face-lift? Even a individual who needs an online presence? I can design and develop any type of a site you desire! A full on CMS or simple HTML page, no matter the scale of the project I promise you I will deliver breath-taking content!</p>
                        <p>I specialize in Web Apps written in JS, and custom Wordpress themes!</p>
                        <p>If you already have a design, I can make it functional and vice-versa!</p>
                        <Link href="/contact"><a className="button is-rounded is-medium is-primary">Contact Me</a></Link>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)
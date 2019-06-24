import Layout from '../../components/Layout';
import HeroPage from '../../components/HeroPage';
import Link from 'next/link';


export default () => (
    <Layout>
        <HeroPage
                Title="App Development"
                Subtitle="Elevate your business with an native app!"
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
                        <img src="../../static/png/appdevelopment.png" />
                    </div>
                    <div className="column">
                       <div className="content">
                            <p>People want to create an app for either two reasons, to save money or to make money. It is important to understand your goals and why do you need this App.</p>
                            <p>Absolutely free of charge I will consult you and find the best solution for you, I will explore each variable of your product or business and propose the best route to take with the development.</p>
                            <p>You can be as involved as you like in the entire process, I will take care of all techie issues in the front of the app and back end logic. I can develop both iOS and Android apps which are either cloud powered or with simple static data!</p>
                            <Link href="/contact"><a className="button is-rounded is-medium is-primary">Contact Me</a></Link>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)
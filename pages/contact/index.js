import Layout from '../../components/Layout';
import HeroPage from '../../components/HeroPage';
import ContactForm from '../../components/ContactForm';

export default () => {
    return(
        <Layout>
            <style jsx>
                {`
                    .content {
                        background: #ebe1f6;
                        padding: 2rem;
                        border-radius: 1.5rem;
                    }
                    h1 {
                        font-size: 2.5rem;
                        font-weight: bold;
                    }

                    p {
                        font-size: 1.5rem;
                        font-weight: 500;
                        
                    }
                `}
            </style>
            <HeroPage
                Title="Contact Me"
                Subtitle="Your online presence begins here..."
            />
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-8">
                            <div className="content">
                                <h1>
                                    Fill out the simple form below!
                                </h1>
                                <p>
                                    Simply complete the quick form below or email me directly at hello@patrykmaron.com and I'll reply within 1 working day to discuss your requirements and business goals.
                                </p>
                                <p>
                                    Let's get rolling! 🚀
                                </p>

                                <ContactForm />
                            </div>
                        </div>
                        <div className="column">
                            <aside>
                                <div className="content">
                                    <h2>Do you have any questions?</h2>
                                    <p>Check out the FAQs page to get some anwsers! If you still need more information contact me!</p>
                                </div>

                                <div className="content">
                                    <h2>Unsure about what you need?</h2>
                                    <p>No worries, I provide free consultation. Ping me an email at hello@patrykmaron.com and we can discuss your bespoke solution!</p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
import Link from 'next/link';

export default () => (
    <footer className="footer">
        <div className="container">
            <div className="columns is-variable is-8">
                <div className="column">
                    <div className="content">
                        <h1>What I Do</h1>
                        <p>
                            I'm a Freelance Web Designer based in London. I specialise in creating marketing websites for great individuals and small-medium sized businesses, helping them to market their product or services successfully on the web.
                        </p>
                    </div>
                </div>

                <div className="column">
                    <div className="content">
                        <h1>Site Links</h1>
                        <ul>
                            <Link href="/"><li><a>Home</a></li></Link>
                            <Link href="/contact"><li><a>Contact</a></li></Link>
                            <Link href="/frequently-asked"><li><a>FAQs</a></li></Link>
                            <Link href="/app-development"><li><a>App Development</a></li></Link>
                            <Link href="/ecommerce"><li><a>E Commerce</a></li></Link>
                            <Link href="/web-design"><li><a>Web Design</a></li></Link>
                            <Link href="/seo"><li><a>{'SEO & Content Optimazination'}</a></li></Link>
                            
                        </ul>
                    </div>
                </div>

                <div className="column">
                    <div className="content">
                        <h1>Contact</h1>
                        <p>info@patrykmaron.com</p>
                    </div>
                </div>
            </div>
            <div className="is-divider"></div>
            <div className="content has-text-centered">
                <p>
                    by <a href="https://www.patrykmaron.com">Patryk Maron</a>, 2019. All rights reserved Trademarks and brands are the property of their respective owners.
                </p>
            </div>
        </div>
    </footer>
)
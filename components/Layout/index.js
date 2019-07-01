import Head from 'next/head';
import Footer from '../Footer';
import Nav from '../Nav';

import '../../styles/style.scss';

export default ({ Title="Patryk Maron | Web Design | App Development | London Freelance", Description="London's top freelance web design and app development! My name is Patryk Maron, award-winning developer who specializes in all web things!", children }) => (
    <div>
        <Head>
            <title>{Title}</title>
            <meta name="description" content={Description} />
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Nav />

        {children}

        <Footer />
    </div>
)
import Head from 'next/head';
import Footer from '../Footer';
import Nav from '../Nav';

import '../../styles/style.scss';

export default ({ children }) => (
    <div>
        <Head>
            <title>Title</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Nav />

        {children}

        <Footer />
    </div>
)
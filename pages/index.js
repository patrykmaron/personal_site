import '../styles/style.scss';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import SectionWorkTogether from '../components/SectionWorkTogether';
import SectionServices from '../components/SectionServices';
import SectionHero from '../components/SectionHero';

export default () => {

    React.useEffect(()=>{
        console.log("mounted")
    },[])

    return(
        <Layout>

           <Landing />

           <SectionWorkTogether />
           
           <SectionServices />

           <SectionHero
                Title="Let's Work Together!"
                Subtitle="Contact me today for a free consultation"
                ButtonName="Contact Me"
           />
        </Layout>
    )
}

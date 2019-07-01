import Layout from '../../components/Layout';
import HeroPage from '../../components/HeroPage';
import Accordion from '../../components/Accordion';

const FAQs = [
    {title: "How much does it cost?", 
    context:`
        <p>
        This really depends on the service, an simple HTML landing page would cost you up to £500.
        </p>
        <p>
        However a CMS or blog system would cost around £500 to £1500, Ecommerce page starting from £1000 and lastly an native App would cost from £700 and upwards. Obviously all
        pricing depends on features needed and complexity of the end product. I always aim for most efficient and best value for my customers! 
        </p>
            `},
    {title: "How long does the project take?",
    context:`
        <p>
        Again, this really depends on what has been agreed to be delivered. I always provide free consultation which includes planning out the time scale of the product. 
        If it's a simple landing page for your start-up, or just to get your business out there. If it's not too complex I can deliver within a day or two! Anything more complex like an App or Ecommerce page I will take minimum of 1-2 months.
        However I do charge an fee for express delivery.
        </p>
    `},
    {title: "What do I need to provide you with to get started?",context: `
        <p>
        As much of information as possible would be highly appreciated! I do need a draft copy of content on the website, for example, if you need a landing page I will need text content and images you would like to use! And if there is more pages involved, I will need your plan and content to be ready.
        Any branding that you have, logos, colors etc. I will need a vector version of those (ai, eps, pdf or svg). As much supporting assets you can provide me with, the quicker we can get this done!
        </p>
    `},
    {title: "How much input do I get?", context:`
        <p>
        I highly encourage as much input as possible! I will set you up with a live demo of the work in progess, and any ideas you will have during the development phase are always welcome.
        </p>
    `},
    {title: "I already have a design, and need a developer", context:`
        <p>
        That's ok! I like to work from a given design and that's something I can definetly do. I will need you to provide me with source files and I can get going in no time :)
        </p>
    `},
    {title: "How soon can we get started?", context: `
        <p>
        As soon as we have agreed the end product and amount due. Then once I have received the deposit payment I will immedietally start the work! This usually takes about a day, or a week depending on the scale of the project.
        </p>
    `},
    {title: "Will I be able to modify my website once it's finished?", context: `
        <p>
        You will have access to all source files so yes, if you're looking for Content Management System, I charge extra for those so please contact me for more details!
        </p>
    `},
    {title: "Will my website be SEO friendly?", context: `
        <p>
        Of course! No matter the service chosen, I will always ensure your online presence is strong!
        </p>
    `},
    {title: "I need Ecommerce website", context:`
        <p>
        Great! I provide complete design in the front-end and back-end! Contact me for enquiries.
        </p>
    `},
    {title: "Do you provide hosting/ domain purchases?", context: `
        <p>
        I do not, I believe that my customers should have full control of their system and I will not lease them with this service. However I do help to fully set up a professional hosting / domain plan.
        I will guide you or do it all for you, I recommned using Amazon's Web Services. Once I have set it all up to you, I will then pass on all the credentials over. 
        </p>
    `},
    {title: "Do I need SLL Certificate?", context: `
        <p>
        It is highly recommended, yes. Luckikly I can provide this for free for you for start-up needs. Later on I can set up a SLL certificate with AWS for you. 
        </p>
    `},

]

export default () => (
    <Layout>
        <HeroPage
                Title="Frequently Asked Questions"
                Subtitle="Your questions anwsered here!"
            />

        <section className="section">
            <div className="container">
                <div className="content">
                  {FAQs.map((item,i)=>(
                      <Accordion Title={item.title} key={i}>
                        {item.context}
                      </Accordion>
                  ))}
                </div>
            </div>
        </section>
    </Layout>
)
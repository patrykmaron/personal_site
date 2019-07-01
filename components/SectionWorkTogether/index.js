import Link from 'next/link';
export default () => (
    <div className="section">
        <style jsx>
        {`
            h1 {
                text-align: center;
                font-size: 3.5rem;
                font-family: 'Montserrat', sans-serif
            }

            

            
        `}
        </style>
        <div className="container">
            <h1 className="title">
                Let's Work Together
            </h1>

            <div className="columns backgroundMe patrykmobile">
                <div className="column is-4">

                </div>
                <div className="column is-7  ">
                    <p >
                    {"I'm Patryk, an award-winning web developer thats been crafting awesome websites and apps from South London since 2012! I’m fiercely dedicated to designing the best websites I possibly can, for clients just like you. Websites that not only look beautiful but leave your competitors in the dust and help your business grow."}
                    </p>
                    <Link href="/contact"><a className="button is-large is-rounded is-primary">{"Contact Me"}</a></Link>
                </div>
            </div>
        </div>
    </div>
)
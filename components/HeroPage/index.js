export default (props) => (
    <section className="hero is-medium">
        <style jsx>
            {`
                h1 {
                    text-align: center;
                    font-size: 3.5rem;
                    font-family: 'Montserrat', sans-serif;
                }
                h2 {
                    text-align: center;
                    font-size: 1.5rem;
                    font-family: 'Montserrat', sans-serif;
                }
            `}
        </style>
        <div className="hero-body">
            <div className="container">
                <h1 className="title">{props.Title}</h1>
                <h2 className="subtitle">{props.Subtitle}</h2>
            </div>
        </div>
    </section>
)
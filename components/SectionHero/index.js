export default (props) => (
    <section className="hero is-primary is-bold">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title is-2">{props.Title}</h1>
                <h2 className="subtitle is-4">{props.Subtitle}</h2>
                <a className="button is-medium is-rounded button-wider-2">{props.ButtonName}</a>
            </div>
        </div>
    </section>
)
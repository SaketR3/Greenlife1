export default function Info(props) {
    return (<>
        <div className="info">
            <div className="info-image-container">
                <img width="200px" height="200px" className="info-image" src={props.image} alt={props.alttext} />
            </div>
            <div className="info-body">
                <h2 className="info-header">{props.header}</h2>
                {props.isGreenLife
                ? <p className="info-paragraph">Greenlife uses generative AI to create a personalized climate guide for you. Simply fill out a few questions, wait a moment, and Greenlife will show you a series of <em>relevant steps</em> with <em>actionable items</em> you can take to decrease your carbon footprint <em>right now</em>. For free.</p>
                : <p className="info-paragraph">{props.paragraph}</p>}
            </div>
        </div>
    </>)
}
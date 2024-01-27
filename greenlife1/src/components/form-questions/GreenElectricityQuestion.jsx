export default function GreenElectricityQuestion(props) {
    return(<>
        <div className="centered-question">
            <label htmlFor="green-electricity" className="question-instruction">What percentage of your electricity comes from renewable sources (e.g. solar, wind, geothermal, etc.)? A rough estimate is fine.</label>
            <div className="question-response slider-question-response">
                <div className="slider">
                    <span>0%</span> 
                    <input type="range" id="green-electricity" className="slider-element" name="green-electricity" value={props.greenElectricity} onChange={props.onGreenElectricityChange}/>
                    <span>100%</span>
                </div>
                <span>{props.greenElectricity}% </span>
            </div>
        </div>
    </>)
}
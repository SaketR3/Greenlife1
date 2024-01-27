export default function ElectricityAmountQuestion(props) {
    return (<>
        <div className="question">
            <label className="question-instruction">How much electricity do you use?</label>
            <div className="question-response mcq-question-response">
                <div className="mcq-answer-choice">
                    <input type="radio" id="little-electricity" className="radio-button" name="electricity-amount" value="I only use a little electricity (only necessary appliances). " onChange={props.onElectricityAmountChange} defaultChecked/>
                    <label htmlFor="little-electricity">A little (only necessary appliances such as lights, microwave, fridge, etc.)</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="medium-electricity" className="radio-button" name="electricity-amount" value="I use a fair amount of electricity (a few appliances & devices). " onChange={props.onElectricityAmountChange}/>
                    <label htmlFor="medium-electricity">A fair amount (necessary appliances as well as a few more electronic devices or appliances plugged in for long periods of time)</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="much-electricity" className="radio-button" name="electricity-amount" value="I use a lot of electricity (many appliances & devices). " onChange={props.onElectricityAmountChange}/>
                    <label htmlFor="much-electricity">A lot (many appliances and electronic devices)</label>
                </div>
            </div>
        </div>
    </>)
}
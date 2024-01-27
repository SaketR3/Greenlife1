export default function FlyingAmountQuestion(props) {
    return (<>
        <div className="centered-question">
            <label htmlFor="flying-amount" className="question-instruction">About how many hours do you travel by plane each year? </label>
            <span className="question-response text-box-container"><input type="number" id="flying-amount" className="text-box" name="flying-amount" value={props.flyingAmount} onChange={props.onFlyingAmountChange}/> hours each year</span>
        </div>
    </>)
}
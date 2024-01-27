export default function DrivingAmountQuestion(props) {
    return (<>
        <div className="centered-question">
            <label htmlFor="driving-amount" className="question-instruction driving-amount-question">About how much do you travel by car (or motorcycle/scooter) weekly? </label>
            <span className="question-response text-box-container"><input type="number" id="driving-amount" className="text-box" name="driving-amount" value={props.drivingAmount} onChange={props.onDrivingAmountChange}/> miles each week</span>
        </div>
    </>)
}
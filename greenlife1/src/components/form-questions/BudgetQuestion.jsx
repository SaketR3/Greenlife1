export default function BudgetQuestion(props) {
    return (<>
        <div className="question">
            <label className="question-instruction">How much money are you willing to spend on decreasing your emissions?</label>
            <div className="question-response mcq-question-response">
                <div className="mcq-answer-choice">
                    <input type="radio" id="little-money" className="radio-button" name="budget" value="I want to spend little to no money on decreasing my emissions. " onChange={props.onBudgetChange} defaultChecked/>
                    <label htmlFor="little-money">Little to no money</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="medium-money" className="radio-button" name="budget" value="I am willing to set aside a budget for decreasing my emissions. " onChange={props.onBudgetChange}/>
                    <label htmlFor="medium-money">Willing to set aside a budget</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="much-money" className="radio-button" name="budget" value="I am willing to spend any amount of money on decreasing my emissions. " onChange={props.onBudgetChange}/>
                    <label htmlFor="much-money">Any amount of money necessary</label>
                </div>
            </div>
        </div>
    </>)
}
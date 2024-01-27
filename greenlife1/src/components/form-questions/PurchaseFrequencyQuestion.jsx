export default function PurchaseFrequencyQuestion(props) {
    return (<>
        <div className="centered-question">
            <label htmlFor="purchase-frequency" className="question-instruction">Considering items like electronics, clothing, etc., how much do you purchase brand-new? </label>
            <div className="question-response slider-question-response">
                <div className="slider">
                    <span id="purchase-frequency-first-label">A few new items per <em>year</em></span>
                    <input type="range" id="purchase-frequency" className="slider-element" name="purchase-frequency" value={props.purchaseFrequency} onChange={props.onPurchaseFrequencyChange}/>
                    <span>Many new items per <em>month</em></span>
                </div>
            </div>
        </div>
    </>)
}
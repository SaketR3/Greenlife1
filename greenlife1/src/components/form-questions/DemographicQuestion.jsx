export default function DemographicQuestion(props) {
    return (<>
        <div className="question">
            <label className="question-instruction">Which of the following best describes you?</label>
            <div className="question-response mcq-question-response">
                <div className="mcq-answer-choice">
                    <input type="radio" id="young-18-22-college" className="radio-button" name="demographic" value="Young Adult, 18-22 Years Old, College Student" onChange={props.onDemographicChange} defaultChecked/>
                    <label htmlFor="young-18-22-college">Young Adult, 18-22 Years Old, College Student</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="young-18-22-not-in-college" className="radio-button" name="demographic" value="Young Adult, 18-22 Years Old, Not in College" onChange={props.onDemographicChange}/>
                    <label htmlFor="young-18-22-not-in-college">Young Adult, 18-22 Years Old, Not in College</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="young-22-30" className="radio-button" name="demographic" value="Young Adult, 22-30 Years Old" onChange={props.onDemographicChange}/>
                    <label htmlFor="young-22-30">Young Adult, 22-30 Years Old</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="adult-30-single" className="radio-button" name="demographic" value="Adult, Over 30, Single" onChange={props.onDemographicChange}/>
                    <label htmlFor="adult-30-single">Adult, Over 30, Single</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="adult-30-married" className="radio-button" name="demographic" value="Adult, Over 30, Married" onChange={props.onDemographicChange}/>
                    <label htmlFor="adult-30-married">Adult, Over 30, Married</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="adult-30-parent" className="radio-button" name="demographic" value="Adult, Over 30, Parent with Kids" onChange={props.onDemographicChange}/>
                    <label htmlFor="adult-30-parent">Adult, Over 30, Parent</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="adult-65" className="radio-button" name="demographic" value="Adult Over 65" onChange={props.onDemographicChange}/>
                    <label htmlFor="adult-65">Adult, Over 65</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="high-school-student" className="radio-button" name="demographic" value="High School Student" onChange={props.onDemographicChange}/>
                    <label htmlFor="high-school-student">High School Student</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="elem-middle-student" className="radio-button" name="demographic" value="Elementary or Middle School Student" onChange={props.onDemographicChange}/>
                    <label htmlFor="elem-middle-student">Elementary or Middle School Student</label>
                </div>
            </div>
        </div>
    </>)
}
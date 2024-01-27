export default function HomeQuestion(props) {
    return (<>
        <div className="question">
            <label className="question-instruction">What type of home do you live in?</label>
            <div className="question-response mcq-question-response">
                <div className="mcq-answer-choice">
                    <input type="radio" id="house" className="radio-button" name="home" value="a house" onChange={props.onHomeChange} defaultChecked/>
                    <label htmlFor="house">House</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="lg-house-mansion" className="radio-button" name="home" value="a large house or mansion" onChange={props.onHomeChange}/>
                    <label htmlFor="lg-house-mansion">Large house or mansion</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="apt-dorm-family" className="radio-button" name="home" value="an apartment with my family" onChange={props.onHomeChange}/>
                    <label htmlFor="apt-dorm-family">Apartment, with family</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="apt-dorm-single" className="radio-button" name="home" value="an apartment or dorm without a roommate" onChange={props.onHomeChange}/>
                    <label htmlFor="apt-dorm-single">Apartment or dorm, without roommate</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="apt-dorm-with-roommate" className="radio-button" name="home" value="an apartment or dorm with a roommate" onChange={props.onHomeChange}/>
                    <label htmlFor="apt-dorm-with-roommate">Apartment or dorm, with roommate</label>
                </div>
                <div className="mcq-answer-choice">
                    <input type="radio" id="retirement-home" className="radio-button" name="home" value="a retirement home" onChange={props.onHomeChange}/>
                    <label htmlFor="retirement-home">Retirement home</label>
                </div>
            </div>
        </div>
    </>)
}
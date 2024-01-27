export default function HeatingMethodQuestion(props) {
    return (<>
        <div className="question">
            <label htmlFor="heating-method" className="question-instruction">How is your home heated? </label>
            <select id="heating-method" className="question-response" name="heating-method" value={props.heatingMethod} onChange={props.onHeatingMethodChange}>
                <option value="Electricity">Electricity</option>
                <option value="Propane">Propane</option>
                <option value="Natural Gas">Natural Gas</option>
                <option value="Heating Oil">Heating Oil</option>
                <option value="Other">Other / I don't know</option>
            </select>
        </div>
    </>)
}
export default function TransportationTypeQuestion(props) {
    return (<>
        <div className="question">
            <label htmlFor="transportation-type" className="question-instruction">What type of transportation do you use? </label>
            <select id="transportation-type" className="question-response" name="transportation-type" value={props.transportationType} onChange={props.onTransportationTypeChange}>
                <option value="Gas Car">Gas Car</option>
                <option value="Electric Car">Electric Car</option>
                <option value="Hybrid Car">Hybrid Car</option>
                <option value="Gas Motorcycle/Scooter">Gas Motorcycle / Scooter</option>
                <option value="Electric Motorcycle/Scooter">Electric Motorcycle / Scooter</option>
                <option value="Carpool">Carpool</option>
                <option value="Bike">Bike or Similar</option>
                <option value="Walking">Walking</option>
                <option value="Public Transportation">Public Transportation</option>
            </select>
        </div>
    </>)
}
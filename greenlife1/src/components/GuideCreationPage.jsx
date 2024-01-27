import {useState} from "react";
import Guide from './Guide';
import Form from './Form';

export default function GuideCreationPage() {
    const [heatingMethod, setHeatingMethod] = useState("Electricity");
    const [electricityAmount, setElectricityAmount] = useState("I only use a little electricity (only necessary appliances). ");
    const [greenElectricity, setGreenElectricity] = useState(0);
    const [demographic, setDemographic] = useState("Young Adult, 18-22 Years Old, College Student");
    const [purchaseFrequency, setPurchaseFrequency] = useState(0);
    const [transportationType, setTransportationType] = useState("Gas Car");
    const [drivingAmount, setDrivingAmount] = useState(0);
    const [flyingAmount, setFlyingAmount] = useState(0);
    const [home, setHome] = useState("a house");
    const [budget, setBudget] = useState("I want to spend little to no money on decreasing my emissions. ");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showResubmit, setShowResubmit] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    function handleHeatingMethodChange(e) {
      setHeatingMethod(e.target.value);
    }

    function handleElectricityAmountChange(e) {
      setElectricityAmount(e.target.value);
    }
    
    function handleGreenElectricityChange(e) {
      setGreenElectricity(e.target.value);
    }

    function handleDemographicChange(e) {
      setDemographic(e.target.value);
    }

    function handlePurchaseFrequencyChange(e) {
      setPurchaseFrequency(e.target.value);
    }

    function handleTransportationTypeChange(e) {
      setTransportationType(e.target.value);
    }

    function handleDrivingAmountChange(e) {
      setDrivingAmount(e.target.value);
    }

    function handleFlyingAmountChange(e) {
      setFlyingAmount(e.target.value);
    }

    function handleHomeChange(e) {
      setHome(e.target.value);
    }

    function handleBudgetChange(e) {
      setBudget(e.target.value);
    }
    
    document.title = "Greenlife - Create";

    function handleFormSubmit(e) {
      e.preventDefault();
      console.log(demographic,
                  heatingMethod, 
                  electricityAmount, 
                  greenElectricity, 
                  purchaseFrequency, 
                  transportationType,
                  drivingAmount,
                  flyingAmount,
                  home,
                  budget);
      setFormSubmitted(false);            
      setTimeout(() => {setFormSubmitted(true)}, 0);
    }

    function showResubmitButton() {
      setShowResubmit(true);
    }

    return (<>
        <div className="banner guide-creation-banner">
          <h1 className="banner-heading">Create Your Guide</h1>
        </div>
        <Form 
            heatingMethod={heatingMethod}
            onHeatingMethodChange={handleHeatingMethodChange}

            electricityAmount={electricityAmount}
            onElectricityAmountChange={handleElectricityAmountChange}

            greenElectricity={greenElectricity}
            onGreenElectricityChange={handleGreenElectricityChange}

            demographic={demographic}
            onDemographicChange={handleDemographicChange}

            purchaseFrequency={purchaseFrequency}
            onPurchaseFrequencyChange={handlePurchaseFrequencyChange}

            transportationType={transportationType}
            onTransportationTypeChange={handleTransportationTypeChange}

            drivingAmount={drivingAmount}
            onDrivingAmountChange={handleDrivingAmountChange}

            flyingAmount={flyingAmount}
            onFlyingAmountChange={handleFlyingAmountChange}

            home={home}
            onHomeChange={handleHomeChange}

            budget={budget}
            onBudgetChange={handleBudgetChange}

            onFormSubmit={handleFormSubmit}
            showResubmit={showResubmit}
            disableButton={disableButton} />
        {formSubmitted && <Guide 
            heatingMethod={heatingMethod}
            electricityAmount={electricityAmount}
            greenElectricity={greenElectricity}
            demographic={demographic}
            purchaseFrequency={purchaseFrequency}
            transportationType={transportationType}
            drivingAmount={drivingAmount}
            flyingAmount={flyingAmount}
            home={home}
            budget={budget}

            showResubmitButton={showResubmitButton}
            disableFormButton={setDisableButton} />}
    </>)
}
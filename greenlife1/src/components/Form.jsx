import HeatingMethodQuestion from './form-questions/HeatingMethodQuestion';
import ElectricityAmountQuestion from './form-questions/ElectricityAmountQuestion';
import GreenElectricityQuestion from './form-questions/GreenElectricityQuestion';
import DemographicQuestion from './form-questions/DemographicQuestion';
import PurchaseFrequencyQuestion from './form-questions/PurchaseFrequencyQuestion';
import TransportationTypeQuestion from './form-questions/TransportationTypeQuestion';
import DrivingAmountQuestion from './form-questions/DrivingAmountQuestion';
import FlyingAmountQuestion from './form-questions/FlyingAmountQuestion';
import HomeQuestion from './form-questions/HomeQuestion';
import BudgetQuestion from './form-questions/BudgetQuestion';

export default function Form(props) {
    return (<>
        <section aria-labelledby="guide-creation-page-form">
            <div className="container">
                <p className="guide-creator-instructions guide-creator-instructions-header" id="guide-creation-page-form">Simply answer a few questions, submit, and your guide will be generated.</p>
                <p className="guide-creator-instructions guide-creator-instructions-body">If you aren't sure about the answer to a question, just give your best guess.</p>
                <p className="guide-creator-instructions guide-creator-instructions-body"><strong>None of your responses are stored in any way.</strong></p>
            </div>
            <div id="form-background">
                <div className="container">
                    <form onSubmit={props.onFormSubmit} className="box">
                        <HeatingMethodQuestion heatingMethod={props.heatingMethod} onHeatingMethodChange={props.onHeatingMethodChange} />
                        <ElectricityAmountQuestion onElectricityAmountChange={props.onElectricityAmountChange} />
                        <GreenElectricityQuestion greenElectricity={props.greenElectricity} onGreenElectricityChange={props.onGreenElectricityChange} />           
                        <DemographicQuestion onDemographicChange={props.onDemographicChange} />
                        <PurchaseFrequencyQuestion purchaseFrequency={props.purchaseFrequency} onPurchaseFrequencyChange={props.onPurchaseFrequencyChange} />
                        <TransportationTypeQuestion transportationType={props.transportationType} onTransportationTypeChange={props.onTransportationTypeChange} />
                        <DrivingAmountQuestion drivingAmount={props.drivingAmount} onDrivingAmountChange={props.onDrivingAmountChange} />
                        <FlyingAmountQuestion flyingAmount={props.flyingAmount} onFlyingAmountChange={props.onFlyingAmountChange} />
                        <HomeQuestion onHomeChange={props.onHomeChange} />
                        <BudgetQuestion onBudgetChange={props.onBudgetChange} />            
                        <div id="submit-area">
                            <input type="submit" id="submit" value={props.showResubmit ? "Resubmit" : "Submit"} disabled={props.disableButton}/>
                            {props.showResubmit && <p><strong>Resubmitting will clear your current guide and generate a new guide.</strong></p>}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>)
}


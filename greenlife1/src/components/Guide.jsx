import React from "react";
import { useState, useEffect } from "react";
import OpenAI from 'openai';
import "dotenv"
import './App.css';
import Collapsible from './Collapsible';

//config()

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true
});

export default function Guide(props) {
  let prompt = "";
  const [steps, setSteps] = useState([""]); 
  const [showSteps, setShowSteps] = useState(false);

  function createPrompt() {
    prompt = "Write me a step-by-step guide on how I can decrease my carbon emissions. ";
    
    // Demographic
    prompt += "I'm a " + props.demographic + ". ";

    // Heating Method
    if (props.heatingMethod !== "Other") {
      prompt += "I heat my home primarily with " + props.heatingMethod + ". ";
    }

    // Electricity Amount 
    prompt += props.electricityAmount;

    // Green Electricity 
    if (props.greenElectricity === '100') {
      prompt += "I already use 100% green electricity. ";
    } else if (props.greenElectricity === '0') {
      prompt += "I don't use any green electricity. ";
    } else {
      prompt += "The amount of my electricity that comes from renewable sources is about " + props.greenElectricity + "%. ";
    }

    // Purchase Frequency
    if (props.purchaseFrequency >= 0 && props.purchaseFrequency < 25) {
      prompt += "I only purchase a few new items per year. ";
    } else if (props.purchaseFrequency >= 25 && props.purchaseFrequency < 50) {
      prompt += "I purchase a new item about once a month. ";
    } else if (props.purchaseFrequency >= 50 && props.purchaseFrequency < 75) {
      prompt += "I purchase a new item a couple of times per month. ";
    } else {
      prompt += "I purchase many new items every month. ";
    }

    // Transportation Type
    prompt += "My mode of transportation is " + props.transportationType + ". ";

    // Driving Amount
    if (props.drivingAmount === "0") {
      prompt += "I don't travel by car at all. ";
    } else {
      prompt += "I travel by car " + props.drivingAmount + " miles per week. ";
    }

    // Flying Amount
    if (props.flyingAmount === "0") {
      prompt += "I don't fly at all. ";
    } else {
      prompt += "I fly " + props.flyingAmount + " hours per year. ";
    }

    // Home
    prompt += "I live in " + props.home + ". ";

    // Budget 
    prompt += props.budget; 

    prompt += "Separate each step with the word 'Step'. ";
    prompt += "For each step, provide a few substeps and explain each substep. "
    prompt += "Separate each sub-step with a hyphen (-). "
    prompt += "Don't give generic recommendations. "
    prompt += "Be conversational! "
    prompt += "Don't include any concluding sentences."
  }

  useEffect(() => {
    (async () => {
      props.disableFormButton(true);
      createPrompt();

      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
      });
      const apiResponse = chatCompletion.choices[0].message.content;

      setSteps(apiResponse.split("Step"));
      setShowSteps(true);
      props.disableFormButton(false);
      props.showResubmitButton();
    })();
  }, []);

  return(<>
    <section aria-labelledby="guide-creation-page-guide">
      <div id="guide-background"> 
        <div className="container">
          <div className="box">
            {showSteps ? 
              <div>
                <p className="guide-header" id="guide-creation-page-guide">Your Guide</p>
                <p className="guide-footer">Click each card to see steps you can take!</p>
                <p className="guide-footer">If you'd like to change your responses or generate a new guide, you can click "Resubmit" above.</p>
                {steps.slice(1).map((step, index) => 
                  <Collapsible key={index} stepName={step.split("- ")[0]} substeps={step.split("- ").slice(1)} />
                )}
              </div>
              : 
              <div>
                <p className="guide-footer">Loading...</p>
                <p className="guide-footer">Your guide is being generated. This may take a few moments.</p>
              </div>}
            </div>
        </div>
      </div>
    </section>
  </>)
}


import {Link} from "react-router-dom";
import Info from './Info';

export default function LandingPage() {
    document.title = "Greenlife";

    return(<>
        <div className="banner landing-page-banner">
          <div>
            <h1 className="banner-heading">The climate crisis is real.</h1>
            <p className="banner-paragraph">We all need to take action if we want to save the planet.</p>
          </div>
        </div>

        <div className="container">
            <Info 
                header="Climate change is a massive threat."
                paragraph="The effects of climate change include more extreme droughts, forest fires, floods, and more. The problem grows larger every year, and we're still failing to take action."
                image="https://images.unsplash.com/photo-1549885606-bbc17accf949?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alttext="Cracked desert" />

            <Info 
                header="Action must be taken on the individual level."
                paragraph="Climate change seems like a massive topic; it's hard for people to see what an individual can do to help. Additionally, many people simply expect their government to take steps towards fixing climate change and do not take action themselves. Ultimately, however, the ability to stop climate change lies only in our hands—we have to capitalize on that."
                image="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alttext="Cupped hands holding dirt for a plant" />

            <Info 
                header="Everyone's situation is different."
                paragraph="While there's lots of advice online about how people can decrease their emissions, too much of it isn't relevant to a person's specific situation. For example, people who bike to work don't need to drive less. And not everyone can afford to buy solar panels. It's too difficult to find advice that works for you."
                image="https://images.unsplash.com/photo-1590628859371-fd173cca5742?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alttext="Person doing bike trick in forest" />

            <Info 
                header="Introducing Greenlife."
                isGreenLife={true}
                image="https://images.unsplash.com/photo-1525695230005-efd074980869?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alttext="Plants hanging on wall" />
        </div>

        <div id="call-to-action-background">
            <div id="call-to-action-container">
                <h2 id="call-to-action-header">Use generative AI to generate your personalized climate guide now.</h2>
                <Link to="/create" id="guide-creation-link-bottom" onClick={() => window.scroll(0, 0)}>Create Your Guide</Link>
            </div>
        </div>

        <div className="container">
            <div id="quote-container">
                <q id="quote">Start where you are. Use what you have. Do what you can.</q>
                <p id="credit">- Arthur Ashe</p>
            </div>
        </div>
    </>)
}
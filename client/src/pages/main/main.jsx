import React from "react";
import "../../utils/GlobalStyling.scss";
import circus from "../../images/42977.jpg"
import Button from "../../components/Buttons/button"

function Main() {
    return (
        <div className="mainContainer">
            <h1>Welcome in Wildcode wonderland!</h1>
            <div className="welcome-container">
                <div className="text-button-container">
                    <h2>We are looking for some new talents</h2>
                    <p className="text-container">
                        Would you like to be a part of our team ?
                        Have you got a performance and a courage to show it for us ?
                    </p>
                    <h2 style={{ color: "#7A1B1B", fontWeight: "800" }}>NOW YOU HAVE A CHANCE!</h2>
                    <p>We are looking for someone who have motivation, who would like to make people happy with performance.</p>
                    <Button variant="outline" to={"/talents"}>Let's join us!</Button>
                </div>
                <div>
                    <img src={circus} alt="circus" width="400px" />
                </div>
            </div>
        </div>
    );
}

export default Main;

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
                    <p className="text-container">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Button to={"/circus"}> See shows</Button>
                </div>
                <div>
                    <img src={circus} alt="circus" width="400px" />
                </div>
            </div>
        </div>
    );
}

export default Main;

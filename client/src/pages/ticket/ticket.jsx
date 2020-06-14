import React from "react";
import "../../utils/GlobalStyling.scss";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction"

function Ticket() {
  const { handleSubmit } = useForm();
  const [circus, setCircus] = React.useState([{
    title: "",
    date: "",
    tickets: [{
      email: "",
      ticket: ""
    }]
  }]);
  const [loading, setLoading] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [ticket, setTicket] = React.useState("");
  const [errors, setErrors] = React.useState("");
  const { action } = useStateMachine(updateAction);
  const { state } = useStateMachine(updateAction);

  const fetchData = React.useCallback(() => {
    fetch("/circus")
      .then((res) => res.json())
      .then((data) => {
        setCircus(data.result);
        console.log("Fetch a circusról", data.result);
        setLoading(false);
      });
  });
  React.useEffect(() => {
    fetchData();
    console.log(circus)
  }, []);

  const patchItem = async (data, event, itemId) => {
    event.preventDefault();
    await fetch(`/circus/${itemId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "patch",
      body: JSON.stringify({
        /*  title: title,
         date: date, */
        email: data.email,
        ticket: data.ticket,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => {
        fetchData();
      })
      .catch((err) => setErrors(err));
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (

      <div className="mainContainer">
        <h1>Tickets </h1>
        {circus.map((t, index) => {
          return (
            <div key={index}>
              <h2>Booking a ticket</h2>
              <ul key={index}>
                <li key={index}>Show: {t.title}</li>
                <li>Date: {t.date}</li>
              </ul>


              <form onSubmit={handleSubmit(patchItem)}>
                <div className="input-container">
                  <label>Email: </label>
                  <input
                    type="text"
                    placeholder="your email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                  />
                </div>
                <div className="input-container">
                  <label>Ticket: </label>
                  <input
                    type="text"
                    placeholder="how many ticket u want"
                    value={ticket}
                    onChange={(event) =>
                      setTicket(event.target.value)
                    }
                  />
                </div>
                <button type="submit" onClick={() => patchItem(circus._id)}>
                  Send
          </button>
              </form>
            </div>
          );
        })}
      </div>
    );
}

export default Ticket;

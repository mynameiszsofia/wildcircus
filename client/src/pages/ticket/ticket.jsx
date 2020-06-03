import React from "react";
import "../../utils/GlobalStyling.scss";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Ticket() {
  const [circus, setCircus] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [allticket, setallTicket] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [ticket, setTicket] = React.useState("");
  const [errors, setErrors] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");

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
  }, []);

  /*   const fetch2Data = React.useCallback(() => {
    fetch("/ticket")
      .then((res) => res.json())
      .then((data) => {
        setallTicket(data.result);
        console.log("Fetch a ticketről", data.result);
      });
  });
  React.useEffect(() => {
    fetch2Data();
  }, []);  */

  const handleSubmit = (event, itemId) => {
    event.preventDefault();
    fetch(`/circus/${itemId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "put",
      body: JSON.stringify({
        title: title,
        date: date,
        email: email,
        ticket: ticket,
      }),
    })
      .then(() => {
        setEmail("");
        setTicket("");
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
            <div>
              <div className="table-rows">
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{
                      backgroundColor: "#D96459",
                      border: "1px solid black",
                    }}
                  >
                    <Typography component={"span"} variant={"body2"}>
                      <ul key={index}>
                        <li key={index}>Show: {t.title}</li>
                        <li>Date: {t.date}</li>
                      </ul>
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ border: "1px solid black" }}>
                    <Typography component={"span"} variant={"body2"}>
                      <div>
                        <div className="form-container">
                          <form onSubmit={handleSubmit}>
                            <h2>Booking a ticket</h2>
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
                            <button onClick={() => handleSubmit(t._id)}>
                              Send
                            </button>
                          </form>
                        </div>
                      </div>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Ticket;

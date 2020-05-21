import React, { useEffect, useState } from "react";
import "../../utils/GlobalStyling.scss"
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 50,
        margin: "10px",
    }
}));

function Ticket() {
    const [circus, setCircus] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [expanded, setExpanded] = React.useState(false);
    const [allticket, setallTicket] = React.useState([]);
    const [email, setEmail] = React.useState("");
    const [ticket, setTicket] = React.useState("");
    const [errors, setErrors] = React.useState("");
    const classes = useStyles();

    const fetchData = React.useCallback(() => {
        fetch("/circus")
            .then((res) => res.json())
            .then((data) => {
                setCircus(data.result);
                console.log(data.result)
                setLoading(false);
            });
    });
    React.useEffect(() => {
        fetchData();
    }, []);

    const fetch2Data = React.useCallback(() => {
        fetch("/ticket")
            .then((res) => res.json())
            .then((data) => {
                setallTicket(data.result);
                console.log(data.result)
            });
    });
    React.useEffect(() => {
        fetch2Data();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/ticket", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify({ email: email, ticket: ticket }),
        })
            .then(() => {
                setEmail("");
                setTicket("");
                fetchData();
            })
            .catch((err) => setErrors(err));
    }

    return loading ? (
        <h1>Loading...</h1>
    ) : (
            <div className="mainContainer">
                <h1>Tickets </h1>
                {circus.map((t, index) => {
                    return <>
                        <div>
                            <div className="table-rows">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        style={{ backgroundColor: "#D96459", border: "1px solid black" }}
                                    >
                                        <Typography >

                                            <ul>
                                                <li key={index}>Show: {t.title}</li>
                                                <li>Date: {t.date}</li>
                                            </ul>

                                        </Typography>

                                    </ExpansionPanelSummary >
                                    <ExpansionPanelDetails style={{ border: "1px solid black" }}>
                                        <Typography >
                                            <div >
                                                <div className="form-container">
                                                    <form onSubmit={handleSubmit}>
                                                        <h2>Booking a ticket</h2>
                                                        <div className="input-container">
                                                            <label>Email: </label>
                                                            <input
                                                                type="text"
                                                                placeholder="your email"
                                                                value={email}
                                                                onChange={(event) => setEmail(event.target.value)}
                                                            />
                                                        </div>
                                                        <div className="input-container">
                                                            <label>Ticket: </label>
                                                            <input
                                                                type="text"
                                                                placeholder="how many ticket u want"
                                                                value={ticket}
                                                                onChange={(event) => setTicket(event.target.value)}
                                                            />
                                                        </div>
                                                        <button type="submit">Send</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                            </div>
                        </div>
                    </>
                })}
                {/*   </table> */}
            </div>
        );
}

export default Ticket;
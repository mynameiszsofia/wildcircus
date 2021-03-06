import React from "react";
import "../../utils/GlobalStyling.scss";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Button from "../../components/Buttons/button"

function Arts() {
  const [circus, setCircus] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [errors, setErrors] = React.useState("");

  const fetchData = React.useCallback(() => {
    fetch("/circus")
      .then((res) => res.json())
      .then((data) => {
        setCircus(data.result);
        console.log(data.result);
        setLoading(false);
      });
  });
  React.useEffect(() => {
    fetchData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/circus", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ title: title, date: date }),
    })
      .then(() => {
        setTitle("");
        setDate("");
        fetchData();
      })
      .catch((err) => setErrors(err));
  }

  const deleteItem = (itemId) => {
    setLoading(true);
    fetch(`/circus/${itemId}`, { method: "delete" })
      .then((res) => res.json())
      .then(setLoading(false))
      .then((data) => console.log(data))
      .then(fetchData());
  };
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#D96459",
      color: "#000",
    },
    body: {
      fontSize: 14,
    },
    margin: "1em",
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#F8C5C1",
      },
      "&:nth-of-type(even)": {
        backgroundColor: "#fee7e6",
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      width: "90%",
    },
  });
  const classes = useStyles();

  return loading ? (
    <h1>Loading...</h1>
  ) : (
      <div className="mainContainer">
        <h1>Shows </h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Would you like to be a part of our team?</h2>
            <h3>Add your show name, and the date when you would like to perform, we will contant you!</h3>
            <div className="input-container">
              <label>Title: </label>
              <input
                type="text"
                placeholder="name of your show"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Date: </label>
              <input
                type="text"
                placeholder="date of your show"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <Button variant="outline" type="submit">Send</Button>
          </form>
        </div>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {circus.map((t, index) => {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {t.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">{t.date}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Button variant="outline" onClick={() => deleteItem(t._id)}>Delete</Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}

export default Arts;

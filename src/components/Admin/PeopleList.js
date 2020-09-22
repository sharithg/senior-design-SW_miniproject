import { Divider, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./PeopleList.css";
import "./Counter.css";
import { formatDateStr } from "../../common/formatDate";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PeopleList({ users, responseUsers, adminUsers }) {
  const [people, setPeople] = useState([null]);
  const [perc, setPerc] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    if (users && responseUsers) {
      console.log(users);
      console.log(responseUsers);
      var peopleArr = [];
      var numHas = 0;
      for (const [userKey, userValue] of Object.entries(users)) {
        var hasResponded = false;
        var num_symptoms = 0;
        for (const [resKey, resValue] of Object.entries(responseUsers)) {
          if (resKey === userKey) {
            hasResponded = true;
            num_symptoms = resValue.num_symptoms;
            if (resValue.num_symptoms > 0) numHas++;
          }
        }
        peopleArr.push({ email: userValue.email, hasResponded, num_symptoms });
      }
      setPerc((numHas / peopleArr.length) * 100);
      setPeople(peopleArr);
    }
  }, [users, responseUsers]);

  // if (people[0] == null) return <Loader />;

  return (
    <div className="main-container">
      <Typography variant="h2">Admin Panel</Typography>
      <br />
      <br />
      <br />
      <Typography variant="h4">
        User responses for {formatDateStr(new Date())}
      </Typography>
      <div className="peopleList-container">
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Form submitted today?</TableCell>
                <TableCell align="left">Number of symptoms</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {people[0] != null && people.length > 0 ? (
                <React.Fragment>
                  {people.map((person, index) => (
                    <TableRow key={index}>
                      <TableCell align="left">
                        {adminUsers.includes(person.email)
                          ? `${person.email} (Admin)`
                          : person.email}
                      </TableCell>
                      <TableCell align="left">
                        {person.hasResponded ? "Yes" : "No"}
                      </TableCell>
                      <TableCell align="left">
                        {!person.hasResponded ? (
                          <React.Fragment />
                        ) : (
                          <Typography>{person.num_symptoms}</Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ) : (
                <Typography variant="h6">No users responded today</Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="counter-container">
        <div className="counter-text">
          <Typography variant="h4">
            Percentage of people that have symptoms{" "}
          </Typography>
        </div>
        <Divider className="divider" />
        <div className="alt-text">
          {people[0] != null && people.length > 0 ? (
            <React.Fragment>
              <Typography variant="h2">{perc.toFixed(0)}%</Typography>
            </React.Fragment>
          ) : (
            <Typography variant="h6">No users responded today</Typography>
          )}
        </div>
      </div>
    </div>
  );
}

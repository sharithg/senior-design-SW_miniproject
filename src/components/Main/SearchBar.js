import { TextField, Button, Grid } from "@material-ui/core";
import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
    console.log(e.target.value);
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div style={{ margin: "2rem 0 2rem 0", width: "30%" }}>
        <form onSubmit={this.onFormSubmit}>
          <div className="field" style={{ display: "inline-block" }}>
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  inputProps={{ min: 0, style: { textAlign: "center" } }}
                  id="standard-basic"
                  label="Search for a country"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

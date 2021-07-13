import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Licenses from "./Licenses";
import Licenses2 from "./Licenses2";
import foto4 from "./png/Polygon 4@2x.png";
const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0,0,0,.125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  },
  expanded: {
    margin: "auto",
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "#1a1c1e",
    padding: "0",
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
      margin: "0",
    "&$expanded": {
      margin: "0",
    },
  },
  expanded: {},
})((props) => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = "ExpansionPanelSummary";

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    background: "#1F2224",
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class CustomizedExpansionPanel extends React.Component {
  state = {
    expanded: "panel1",
  };

  handleChange = (panel) => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <ExpansionPanel
        square
        expanded={expanded === "panel1"}
        onChange={this.handleChange("panel1")}
      >
        <ExpansionPanelSummary>
          <div className="JamesMainMackbook">
            <div>
              <img src={foto4} />
            </div>
            <div>
              <h3>James-Main-Mackbook</h3>
            </div>
            <div>
              <h3>91520</h3>
            </div>{" "}
            <div>
              <h3>01 Jan 2019</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <button className="addL">Add License</button>
              <button className="addL1">Remove</button>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="boss">
            <Licenses />
            <Licenses2 />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default CustomizedExpansionPanel;

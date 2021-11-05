import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navBar";
import Station from "./components/station";
import Vechicle from "./components/vechicle";
import StationForm from "./components/stationForm";
import "./App.css";
import Home from "./components/home";
import VechicleForm from "./components/vechicleForm";

class App extends React.Component {
  state = {
    vechicle: [],
    station: [],
  };

  componentDidMount = async () => {
    const sta = await fetch("/api/station");
    const vech = await fetch("/api/vechicle");
    let station = await sta.json();
    station = [...station];
    let vechicle = await vech.json();
    vechicle = [...vechicle];
    this.setState({
      station,
      vechicle,
    });
  };

  handleDeleteVechicle = async (data) => {
    let { vechicle } = this.state;
    const vech = await fetch(`/api/vechicle/${data._id}`, { method: "DELETE" });
    vechicle = vechicle.filter((item) => item !== data);
    this.setState({
      vechicle,
    });
  };
  handleDeleteStation = async (data) => {
    let { station } = this.state;
    const sta = await fetch(`/api/station/${data._id}`, { method: "DELETE" });
    station = station.filter((item) => item._id !== data._id);
    this.setState({
      station,
    });
  };

  handleDataVechicle = (data) => {
    let vechicle = [...this.state.vechicle, data.vechicle];
    this.setState({
      vechicle,
    });
    console.log(vechicle);
  };
  handleDataStation = (data) => {
    let station = [...this.state.station, data.station];
    this.setState({
      station,
    });
    console.log(station);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/station"
            render={(props) => (
              <Station
                station={this.state.station}
                onDelete={this.handleDeleteStation}
                {...props}
              />
            )}
          />
          <Route
            path="/stationform"
            render={(props) => (
              <StationForm handleData={this.handleDataStation} {...props} />
            )}
          />
          <Route
            path="/vechicle"
            render={(props) => (
              <Vechicle
                vechicle={this.state.vechicle}
                onDelete={this.handleDeleteVechicle}
                {...props}
              />
            )}
          />
          <Route
            path="/vechicleform"
            render={(props) => (
              <VechicleForm handleData={this.handleDataVechicle} {...props} />
            )}
          />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

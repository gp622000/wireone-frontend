import React from "react";

class StationForm extends React.Component {
  state = {
    station: {
      stationName: "",
      stationCode: "",
      latitude: "",
      longitude: "",
      city: "",
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.handleData(this.state);

    // console.log("Submitted");
    const { stationName, stationCode, latitude, longitude, city } =
      this.state.station;
    const res = await fetch("/api/station", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stationName,
        stationCode,
        latitude,
        longitude,
        city,
      }),
    });
    console.log("submitted");
    // const data = await res.json();
    // console.log(data);
    this.props.history.replace("/station");
  };

  handleChange = (e) => {
    const station = { ...this.state.station };
    station[e.target.name] = e.target.value;
    this.setState({
      station,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Station Name</label>
            <input
              onChange={this.handleChange}
              name="stationName"
              value={this.state.station.stationName}
              id="name"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="scode">stationCode</label>
            <input
              onChange={this.handleChange}
              id="scode"
              name="stationCode"
              value={this.state.station.stationCode}
              type="Number"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="latitude">Latitude</label>
            <input
              onChange={this.handleChange}
              id="latitude"
              name="latitude"
              value={this.state.station.latitude}
              type="Number"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="longitude">longitude</label>
            <input
              className="form-control"
              type="Number"
              name="longitude"
              id="longitude"
              onChange={this.handleChange}
              value={this.state.station.longitude}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="city">City</label>
            <input
              className="form-control"
              name="city"
              id="city"
              type="text"
              onChange={this.handleChange}
              value={this.state.station.city}
              required
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default StationForm;

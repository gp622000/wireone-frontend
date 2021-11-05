import React from "react";

class VechicleForm extends React.Component {
  state = {
    vechicle: {
      vechicleRegNo: "",
      vechicleModel: "",
      currentStation: "",
      odometerReading: "",
      fuelLevel: "",
    },
  };

  handleSubmit = async (e) => {
    // this.props.handleData(this.state);
    e.preventDefault();
    this.props.handleData(this.state);
    const {
      vechicleRegNo,
      vechicleModel,
      currentStation,
      odometerReading,
      fuelLevel,
    } = this.state.vechicle;
    const res = await fetch("/api/vechicle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vechicleRegNo,
        vechicleModel,
        currentStation,
        odometerReading,
        fuelLevel,
      }),
    });
    console.log("submitted");
    // const data = await res.json();
    // console.log(data);
    this.props.history.replace("/vechicle");
  };

  handleChange = (e) => {
    const vechicle = { ...this.state.vechicle };
    vechicle[e.target.name] = e.target.value;
    this.setState({
      vechicle,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-2 col-auto">
            <label htmlFor="reg" className="col-auto">
              Reg.No
            </label>
            <input
              onChange={this.handleChange}
              name="vechicleRegNo"
              value={this.state.vechicle.vechicleRegNo}
              id="reg"
              type="number"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="vechicleModel">vechicleModel</label>
            <input
              onChange={this.handleChange}
              id="vechicleModel"
              name="vechicleModel"
              value={this.state.vechicle.vechicleModel}
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="currentStation" className="form-label">
              current Station
            </label>
            <input
              onChange={this.handleChange}
              id="currentStation"
              name="currentStation"
              value={this.state.vechicle.currentStation}
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="odometerReading">odometerReading</label>
            <input
              onChange={this.handleChange}
              id="odometerReading"
              name="odometerReading"
              value={this.state.vechicle.odometerReading}
              type="Number"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="fuelLevel">fuelLevel</label>
            <input
              className="form-control"
              type="Number"
              name="fuelLevel"
              id="fuelLevel"
              onChange={this.handleChange}
              value={this.state.vechicle.fuelLevel}
              required
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default VechicleForm;

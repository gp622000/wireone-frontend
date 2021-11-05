import React from "react";

class Vechicle extends React.Component {
  handleClick = (e) => {
    console.log("button Clicked");
    console.log("props", this.props);
    this.props.history.push("/vechicleform");
  };

  render() {
    const { vechicle: vechicles, onDelete } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Vechicle</h1>
        <button onClick={this.handleClick} className="btn btn-primary">
          Add Vechicles
        </button>
        <div className="container mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Reg.No</th>
                <th>Model</th>
                <th>Current Station</th>
                <th>Odometer</th>
                <th>FuelLevel</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {vechicles.map((data) => (
                <tr key={data._id}>
                  <td>{data.vechicleRegNo}</td>
                  <td>{data.vechicleModel}</td>
                  <td>{data.currentStation}</td>
                  <td>{data.odometerReading}</td>
                  <td>{data.fuelLevel}</td>
                  <td>
                    <button
                      onClick={() => onDelete(data)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Vechicle;

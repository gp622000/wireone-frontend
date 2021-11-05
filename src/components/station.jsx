import React from "react";
import StationForm from "./stationForm";

class Station extends React.Component {
  handleClick = (e) => {
    console.log("button Clicked");
    console.log("props", this.props);
    this.props.history.push("/stationform");
  };

  render() {
    const { station: stations, onDelete } = this.props;
    return (
      <div>
        <div>
          <h1>Station</h1>
          <button onClick={this.handleClick} className="btn btn-primary">
            Add stations
          </button>
          <div className="container mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>stationName</th>
                  <th>stationCode</th>
                  <th>latitude</th>
                  <th>longitude</th>
                  <th>city</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {stations.map((data) => (
                  <tr key={data._id}>
                    <td>{data.stationName}</td>
                    <td>{data.stationCode}</td>
                    <td>{data.latitude}</td>
                    <td>{data.longitude}</td>
                    <td>{data.city}</td>
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
      </div>
    );
  }
}

export default Station;

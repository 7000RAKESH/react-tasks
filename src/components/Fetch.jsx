import React, { Component } from "react";

class Fetch extends Component {
  state = {
    data: [],

    // console.log(this.state.data);
  };
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    return (
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>image</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((val, index) => {
            return (
              <>
                {
                  <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.title}</td>
                    <td>{val.description}</td>
                    <td>{val.price}</td>
                    <td>
                      <img
                        src={val.image}
                        style={{ width: 100, height: 100 }}
                      />
                    </td>
                    <td>{val.category}</td>
                  </tr>
                }
              </>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Fetch;

import React, { useEffect, useState } from "react";
import { Input, Table } from "reactstrap";
import Axios from "axios";

function Planet(props) {
  const [planets, setplanets] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const planetData = await Axios.get(
      "https://assignment-machstatz.herokuapp.com/planet"
    );
    setplanets(planetData.data);
  };

  function isChecked(planet) {
    if (checked) {
      planet.isFavourite = true;
    } else {
      planet.isFavourite = false;
    }
    setChecked(!checked);
  }

  const allShow = (
    <Table striped>
      <thead>
        <tr>
          <th>select</th>
          <th>isFavourite</th>
          <th>PlanetsName</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr>
            <td style={{textAlign:"center"}}>
              <Input
                type="checkbox"
                checked={planet.isFavourite}
                onChange={() => isChecked(planet)}
              />
            </td>
            <td>{planet.isFavourite ? <p>True</p> : <p>False</p>}</td>
            <td>{planet.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  const favourite = (
    <Table striped>
      <thead>
        <tr>
          <th>Favourite Planets</th>
        </tr>
      </thead>
      <tbody>
        {planets.map(
          (planet) =>
            planet.isFavourite && (
              <tr>
                <td>{planet.name}</td>
              </tr>
            )
        )}
      </tbody>
    </Table>
  );

  return (
    <div class="container">{props.option === "All" ? allShow : favourite}</div>
  );
}

export default Planet;

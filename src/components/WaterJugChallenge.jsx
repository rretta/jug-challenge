import { useState } from "react";
import "./WaterJugChallenge.css";

const WaterJugChallenge = () => {
  const [jugXCapacity, setJugXCapacity] = useState(0);
  const [jugYCapacity, setJugYCapacity] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [steps, setSteps] = useState([]);

  const mcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return mcd(b, a % b);
  };

  const hasSolution = () =>
    targetAmount % mcd(jugXCapacity, jugYCapacity) === 0;

  const solveWaterJugChallenge = () => {
    setHasError(false);

    if (targetAmount > jugXCapacity + jugYCapacity || !hasSolution()) {
      setHasError(true);
      setSteps(["Impossible solution, try another combination"]);
      return;
    }

    const newSteps = [];
    let jugXAmount = 0;
    let jugYAmount = 0;

    const recordStep = (action) => {
      newSteps.push([action, `X has ${jugXAmount}, Y has ${jugYAmount}`]);
    };

    while (
      jugXAmount !== targetAmount &&
      jugYAmount !== targetAmount &&
      jugXCapacity > jugYCapacity
    ) {
      if (jugXAmount === 0) {
        jugXAmount = jugXCapacity;
        recordStep(`Fill Jug X with ${jugXCapacity} gallons`);
      } else if (jugYAmount === jugYCapacity) {
        jugYAmount = 0;
        recordStep(`Empty Jug Y (${jugYCapacity} gallons)`);
      } else {
        const transferedAmount = Math.min(
          jugXAmount,
          jugYCapacity - jugYAmount
        );
        jugXAmount -= transferedAmount;
        jugYAmount += transferedAmount;
        recordStep(`Transfer ${transferedAmount} gallons from Jug X to Jug Y`);
      }

      if (jugXAmount === targetAmount || jugYAmount === targetAmount) {
        break;
      }
    }

    //estado reverso (Y > X)
    while (
      jugYAmount !== targetAmount &&
      jugXAmount !== targetAmount &&
      jugYCapacity > jugXCapacity
    ) {
      if (jugYAmount === 0) {
        jugYAmount = jugYCapacity;
        recordStep(`Fill Jug Y with ${jugYCapacity} gallons`);
      } else if (jugXAmount === jugXCapacity) {
        jugXAmount = 0;
        recordStep(`Empty Jug X (${jugXCapacity} gallons)`);
      } else {
        const transferedAmount = Math.min(
          jugYAmount,
          jugXCapacity - jugXAmount
        );
        jugYAmount -= transferedAmount;
        jugXAmount += transferedAmount;
        recordStep(`Transfer ${transferedAmount} gallons from Jug Y to Jug X`);
      }

      if (jugYAmount === targetAmount || jugXAmount === targetAmount) {
        break;
      }
    }

    newSteps.push([
      `Jug X contains ${jugXAmount} gallons and Jug Y contains ${jugYAmount} gallons.`,
      "🏁",
    ]);
    setSteps(newSteps);
  };

  return (
    <div className="container">
      <div className="container-inputs">
        <div className="container-inputs__input">
          <label>Jug X Capacity:</label>
          <input
            type="number"
            value={jugXCapacity}
            onChange={(e) => setJugXCapacity(parseInt(e.target.value))}
          />
        </div>
        <div className="container-inputs__input">
          <label>Jug Y Capacity:</label>
          <input
            type="number"
            value={jugYCapacity}
            onChange={(e) => setJugYCapacity(parseInt(e.target.value))}
          />
        </div>
        <div className="container-inputs__input">
          <label>Target Amount:</label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(parseInt(e.target.value))}
          />
        </div>
      </div>
      <button onClick={solveWaterJugChallenge}>Solve</button>
      <div className="table-container">
        {steps.length > 0 && !hasError ? (
          <table className="table">
            <thead>
              <tr>
                <th className="table__header">N°</th>
                <th className="table__header">Step</th>
                <th className="table__header">Status</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step, index) => (
                <tr key={index}>
                  <td className="table__cell">
                    {index < steps.length - 1 ? index + 1 : "🏁"}
                  </td>
                  <td className="table__cell">{step[0]}</td>
                  <td className="table__cell">{step[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : targetAmount > jugXCapacity && targetAmount > jugYCapacity ? (
          <p>{steps}</p>
        ) : (
          <p>{steps[0]}</p>
        )}
      </div>
    </div>
  );
};

export default WaterJugChallenge;

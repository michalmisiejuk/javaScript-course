/* // EXAMPLE

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) FIX A BUG
    // value: Number(prompt("Degrees celsius:")),
    // value: parseInt(prompt("Degrees celsius:")),
    value: 10,
  };

  // B) FIND A BUG
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = parseInt(measurement.value) + 273;
  return kelvin;
};
// A) Identify a bug
console.log(measureKelvin());

*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug(temperatures, [8, 2, 5, 18, 4, -9]);
console.log(amplitudeBug);

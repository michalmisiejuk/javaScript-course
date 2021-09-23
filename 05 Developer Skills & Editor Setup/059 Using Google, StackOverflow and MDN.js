const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temperature amplitude? difference between highest and the lowest temp
//  - how to compute max min temperature in array?
// - What'a a sensor error? And what to do with it?

// 2) Breakin up into sub-problems
// - How to ignore errors?
// - Find min value in temp array?
// - Find max value in temp array?
// - Subtract min from max (amplitude) and return

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBL3M 2:
// Function should now receive 2 arrays of temps
// - With 2 arrays, should we implement functionality twice? No! just marge 2 arrays
// - How to marge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, [8, 2, 5, 18, 4, -9]);
console.log(amplitudeNew);

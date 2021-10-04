const v_in = 9;

const resistors = [
  3.3, 22, 82, 100, 150, 220, 270, 300, 330, 750, 1000, 1500, 1800, 2200, 2700,
  3300, 9100, 10000, 1_000_000,
];

const resistorPairs = [];

let minimumDifference = 9999999;
let minimumPair;

for (let i = 0; i < resistors.length - 1; i++) {
  for (let j = i + 1; j < resistors.length; j++) {
    resistorPairs.push([resistors[i], resistors[j]]);
  }
}

resistorPairs.forEach((pair) => {
  const r1 = pair[0];
  const r2 = pair[1];
  const v_out_1 = (r2 / (r1 + r2)) * v_in;
  const v_out_2 = (r1 / (r2 + r1)) * v_in;

  let temp1 = Math.abs(5 - v_out_1);
  let temp2 = Math.abs(5 - v_out_2);

  if (temp1 < minimumDifference) {
    minimumDifference = temp1;
    minimumPair = pair;
  }

  if (temp2 < minimumDifference) {
    minimumDifference = temp2;
    minimumPair = pair;
  }
});

console.log(5 - minimumDifference)
console.log(minimumPair)
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


let totalBatteries = 0;

const batteries = [
  { assembled: 10 },
  { assembled: 5 },
  { assembled: 6 },
  { assembled: 10 }
];

totalBatteries = batteries.reduce((acc, current) => acc + current.assembled, 0);

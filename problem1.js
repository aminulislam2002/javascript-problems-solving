// Example data. Like, An array of objects.
const dataObjects = [
  { id: "1", date: "2023-09-30", info: "Another information" },
  { id: "2", date: "2023-09-29", info: "Another information" },
  { id: "3", date: "2023-10-01", info: "Another information" },
  { id: "4", date: "2023-11-30", info: "Another information" },
  { id: "5", date: "2023-08-30", info: "Another information" },
  { id: "6", date: "2023-09-01", info: "Another information" },
];

// dataObjects sort according to date
dataObjects.sort(function (a, b) {
  return new Date(a.date) - new Date(b.date);
});

console.log(dataObjects); // return sorted dataObjects. Like, An array of objects

dataObjects.map((data) => {
  console.log(data); // return specific sorted objects
});

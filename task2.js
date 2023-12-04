let sportsmen = [
  {
    name: "bold",
    age: 20,
    scores: [10, 20, 30, 40],
  },
  {
    name: "bat",
    age: 18,
    scores: [20, 20, 30, 40],
  },
  {
    name: "dash",
    age: 19,
    scores: [30, 20, 30, 40],
  },
  {
    name: "natsag",
    age: 21,
    scores: [40, 20, 30, 40],
  },
  {
    name: "dondog",
    age: 17,
    scores: [40, 20, 30, 40],
  },
  {
    name: "dorj",
    age: 22,
    scores: [10, 20, 30, 40],
  },
  {
    name: "chuluun",
    age: 23,
    scores: [10, 20, 30, 40],
  },
  {
    name: "suh",
    age: 21,
    scores: [10, 20, 30, 40],
  },
  {
    name: "tod",
    age: 22,
    scores: [10, 20, 30, 40],
  },
  {
    name: "od",
    age: 20,
    scores: [10, 20, 30, 40],
  },
];

let a = sportsmen[0].age;
let b = sportsmen[1].age;

if (a < b) {
  console.log(a);
} else console.log(b);

let avgScore1 =
  (sportsmen[0].scores[0] +
    sportsmen[0].scores[1] +
    sportsmen[0].scores[2] +
    sportsmen[0].scores[3]) /
  4;
console.log("man1AvgScore:", avgScore1);

let avgScore2 =
  (sportsmen[1].scores[0] +
    sportsmen[1].scores[1] +
    sportsmen[1].scores[2] +
    sportsmen[1].scores[3]) /
  4;
console.log("man2AvgScore:", avgScore2);

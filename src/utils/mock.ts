export const randomQuestionsApiMock = [
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the TV series &quot;Person of Interest&quot;, who plays the character &quot;Harold Finch&quot;?",
    correct_answer: "Michael Emerson",
    incorrect_answers: ["Jim Caviezel", "Taraji P. Henson", "Kevin Chapman"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "In relation to the British Occupation in Ireland, what does the IRA stand for.",
    correct_answer: "Irish Republican Army",
    incorrect_answers: [
      "Irish Rebel Alliance",
      "Irish Reformation Army",
      "Irish-Royal Alliance",
    ],
  },
];

export const playerQuizzesMock = [
  {
    id: "7ebd1b4b-d3c5-4e84-b77c-171c2d47d49a",
    answeredAt: new Date("2022-08-16"),
    score: 2,
  },
  {
    id: "d96a197e-6fb3-4a02-afa4-411f3037bcd1",
    answeredAt: new Date("2022-08-16"),
    score: 4,
  },
];

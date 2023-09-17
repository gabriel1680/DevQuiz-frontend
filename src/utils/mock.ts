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
    id: 1,
    answeredAt: new Date("2022-08-16"),
    score: 2,
  },
  {
    id: 2,
    answeredAt: new Date("2022-08-16"),
    score: 4,
  },
];

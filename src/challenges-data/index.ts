import { type IChallengesData } from "./types";

// TODO: Add loadash to not hardcoded the slugs - then create a function to receive some data and return the complete IColumn with slugs (and ID)
export const completeChallengeData: IChallengesData[] = [
  {
    id: "PedroMarianoAlmeida-sum",
    githubUser: "PedroMarianoAlmeida",
    exerciseSlug: "bugged-sum",
    exerciseName: "Bugged Sum",
    writtenIn: [
      {
        stack: "JavaScript",
        path: "challanges/PedroMarianoAlmeida/bugged-sum/vanila-js",
      },
    ],
  },
];

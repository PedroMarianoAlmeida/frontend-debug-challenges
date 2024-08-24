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
        paths: [
          {
            path: "challenges/PedroMarianoAlmeida/bugged-sum/vanila-js/1",
            description:
              "Very similar with HTML, CSS, JS... with only some Astro caveats",
          },
        ],
      },
    ],
    solutions: [
      {
        stack: "JavaScript",
        paths: [
          {
            path: "challanges/PedroMarianoAlmeida/bugged-sum/vanila-js/solutions/1",
          },
        ],
      },
    ],
  },
];

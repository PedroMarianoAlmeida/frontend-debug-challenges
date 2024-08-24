export type Stacks = "JavaScript" | "TypeScript" | "React";

export interface IChallengesData {
    id: string;
    githubUser: string;
    exerciseSlug: string;
    exerciseName: string;
    writtenIn: {
      stack: Stacks;
      path: string;
    }[];
  }

export type Stacks = "JavaScript" | "TypeScript" | "React";

export interface StackPaths {
  stack: Stacks;
  paths: {path: string, description?: string}[];
}

export interface IChallengesData {
  id: string;
  githubUser: string;
  exerciseSlug: string;
  exerciseName: string;
  problems: StackPaths[];
  solutions?: StackPaths[];
}

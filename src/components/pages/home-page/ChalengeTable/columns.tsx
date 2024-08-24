import { type ColumnDef } from "@tanstack/react-table";
import { type IChallengesData, type Stacks } from "@/challenges-data/types";

// TODO: Extract in a component with Stack logo image (react or astro component?)
const StackLinks = ({ stack, path }: { stack: Stacks; path: string }) => {
  return <a href={path}>{stack}</a>;
};

export const columns: ColumnDef<
  Pick<
    IChallengesData,
    "githubUser" | "exerciseSlug" | "exerciseName" | "writtenIn"
  >
>[] = [
  { accessorKey: "githubUser", header: "User" },
  { accessorKey: "exerciseSlug", header: "Exercise" },
  { accessorKey: "exerciseName", header: "Name" },
  {
    accessorKey: "writtenIn",
    header: "Problem written in",
    cell: (info) => {
      const value = info.getValue() as IChallengesData["writtenIn"];
      return (
        <div>
          {value.map(({ stack, path }) => (
            <StackLinks key={path} stack={stack} path={path} />
          ))}
        </div>
      );
    },
  },
];

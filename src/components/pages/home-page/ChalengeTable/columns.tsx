import { type ColumnDef } from "@tanstack/react-table";
import { type IChallengesData, type StackPaths } from "@/challenges-data/types";
import StackLinks from "@/components/project-use/StackLinks";

export const columns: ColumnDef<
  Pick<
    IChallengesData,
    "githubUser" | "exerciseSlug" | "exerciseName" | "problems"
  >
>[] = [
  { accessorKey: "githubUser", header: "User" },
  { accessorKey: "exerciseSlug", header: "Exercise" },
  { accessorKey: "exerciseName", header: "Name" },
  {
    accessorKey: "problems",
    header: "Problem written in",
    cell: (info) => {
      const value = info.getValue() as StackPaths[];
      return (
        <div>
          {value.map((stackPaths) => (
            <StackLinks
              key={JSON.stringify(stackPaths)}
              stackPaths={stackPaths}
            />
          ))}
        </div>
      );
    },
  },
];

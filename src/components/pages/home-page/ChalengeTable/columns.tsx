import { type ColumnDef } from "@tanstack/react-table";
import { type IChallengesData, type StackPaths } from "@/challenges-data/types";

// TODO: Extract in a component with Stack logo image and Tooltip with explanation
const StackLinks = ({
  stackPaths: { stack, paths },
}: {
  stackPaths: StackPaths;
}) => {
  return (
    <span>
      {paths.map(({ path, description }) => (
        <a href={path}>{stack}</a>
      ))}
    </span>
  );
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

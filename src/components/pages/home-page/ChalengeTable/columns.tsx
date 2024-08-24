import { type ColumnDef } from "@tanstack/react-table";
import { type ReactNode } from "react";

type Stacks = "JavaScript" | "TypeScript" | "React";

const StackLinks = ({ stack, path }: { stack: Stacks; path: string }) => {
  return <a href={path}>{stack}</a>;
};

export interface IColumn {
  id: string;
  githubUser: string;
  exerciseSlug: string;
  exerciseName: string;
  writtenIn: {
    stack: Stacks;
    path: string;
  }[];
}

export const columns: ColumnDef<IColumn>[] = [
  { accessorKey: "githubUser", header: "User" },
  { accessorKey: "exerciseSlug", header: "Exercise" },
  { accessorKey: "exerciseName", header: "Name" },
  {
    accessorKey: "writtenIn",
    header: "Problem written in",
    cell: (info) => {
      const value = info.getValue() as IColumn["writtenIn"];
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

import { type ColumnDef } from "@tanstack/react-table";
import { type Challenge } from "@/project-use/challangeUtils.ts";

// TODO: Upgrade this table to show each problem in one line, with all Code
export const columns: ColumnDef<Challenge>[] = [
  { accessorKey: "challengeName", header: "Challenge" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "stack", header: "Stack" },
  {
    accessorKey: "url",
    header: "Url",
    cell: (info) => {
      const value = info.getValue() as string;
      return <a href={value}>Visit</a>;
    },
  },
];

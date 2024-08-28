import { type ColumnDef } from "@tanstack/react-table";
import Link from "@/components/project-use/Link";
import {
  type IChallengesGroupedByName,
  type stackUrl,
} from "@/project-use/challangeUtils.ts";

export const columns: ColumnDef<IChallengesGroupedByName>[] = [
  { accessorKey: "name", header: "Challenge" },
  {
    accessorKey: "problems",
    header: "Problems",
    cell: (info) => {
      const value = info.getValue() as stackUrl[];
      return (
        <div className="flex gap-3">
          {value.map(({ stack, url }) => (
            <Link href={url} key={url}>
              {stack}
            </Link>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "solutions",
    header: "Solutions",
    cell: (info) => {
      const value = info.getValue() as stackUrl[];
      return (
        <div className="flex gap-3">
          {value.map(({ stack, url }) => (
            <Link href={url} key={url}>
              {stack}
            </Link>
          ))}
        </div>
      );
    },
  },
];

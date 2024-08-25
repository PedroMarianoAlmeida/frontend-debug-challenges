import { columns } from "./../../../project-use/ChallengeTable/columns";
import { type Challenge } from "@/components/project-use/ChallengeTable/columns";

import { DataTable } from "./data-table";

interface ChallengesTableProps {
  challengesData: Challenge[];
}
const ChallengesTable = ({ challengesData }: ChallengesTableProps) => {
  console.log({ challengesData });
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={challengesData} />
    </div>
  );
};

export default ChallengesTable;

import { columns } from "./columns";
import { completeChallengeData } from "@/challenges-data";

import { DataTable } from "./data-table";

const ChallengesTable = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={completeChallengeData} />
    </div>
  );
};

export default ChallengesTable;

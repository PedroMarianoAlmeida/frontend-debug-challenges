import { type IColumn, columns } from "./columns";
import { DataTable } from "./data-table";

// TODO: Add loadash to not hardcoded the slugs - then create a function to receive some data and return the complete IColumn with slugs (and ID)
const data: IColumn[] = [
  {
    id: "PedroMarianoAlmeida-sum",
    githubUser: "PedroMarianoAlmeida",
    exerciseSlug: "bugged-sum",
    exerciseName: "Bugged Sum",
    writtenIn: [
      {
        stack: "JavaScript",
        path: "challanges/PedroMarianoAlmeida/bugged-sum/vanila-js",
      },
    ],
  },
];

const ChallengesTable = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ChallengesTable;

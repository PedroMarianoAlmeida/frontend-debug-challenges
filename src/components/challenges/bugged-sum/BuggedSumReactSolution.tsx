import { useState } from "react";

const BuggedSumReactSolution = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <input
        className="border-2 max-w-52"
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        className="border-2 max-w-52"
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <div>Result is: {num1 + num2}</div>
    </div>
  );
};

export default BuggedSumReactSolution;

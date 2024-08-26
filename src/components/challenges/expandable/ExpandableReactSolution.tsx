import { useState, type ReactNode } from "react";
import styles from "./ExpandableReactSolution.module.css";
import { Button } from "@/components/ui/button";

interface ExpandableReactSolution {
  children: ReactNode;
  initialHeight: string;
}

//Improvement: Check if the content is smaller then the initialHeight (in this case not show the Open button)
const ExpandableReactSolution = ({
  children,
  initialHeight,
}: ExpandableReactSolution) => {
  const [isOpen, setIsOpen] = useState(false);
  const { textWrapper, closed } = styles;

  return (
    <div>
      <div
        style={{ height: isOpen ? "unset" : initialHeight }}
        className={`${textWrapper} ${isOpen ? "" : closed}`}
      >
        {children}
      </div>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </Button>
    </div>
  );
};

export default ExpandableReactSolution;

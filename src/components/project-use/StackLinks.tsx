import { type StackPaths } from "@/challenges-data/types";

// TODO: Add a Stack logo image (or at least a badge) and Tooltip with explanation
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

export default StackLinks;

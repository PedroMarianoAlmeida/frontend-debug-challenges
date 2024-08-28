export interface Challenge {
  challengeName: string;
  type: "problems" | "solutions";
  stack: string;
  url: string;
}

export interface AstroInstance {
  file: string;
  url: string;
}

export const getAllChallengeDataFromPaths = ({
  challengesBlob,
}: {
  challengesBlob: AstroInstance[];
}): Challenge[] =>
  challengesBlob.map(({ url }) => {
    const [, , challengeName, type, stack] = url.split("/");
    const typeTyped = type === "problems" ? "problems" : "solutions";
    return { challengeName, type: typeTyped, stack, url };
  });

export interface stackUrl {
  stack: string;
  url: string;
}
export interface IChallengesGroupedByName {
  name: string;
  problems: stackUrl[];
  solutions: stackUrl[];
}
[];

export const convertAllChallengesFromPathGroupedByName = ({
  challengeDataFromPath,
}: {
  challengeDataFromPath: Challenge[];
}): IChallengesGroupedByName[] =>
  challengeDataFromPath.reduce(
    (acc: IChallengesGroupedByName[], challengeData: Challenge) => {
      const { challengeName, type, stack, url } = challengeData;

      let challengeExistent = acc.find(
        (challangeGrouped) => challangeGrouped.name === challengeName
      );

      if (!challengeExistent) {
        challengeExistent = {
          name: challengeName,
          problems: [],
          solutions: [],
        };
        acc.push(challengeExistent);
      }

      if (type === "problems") {
        challengeExistent.problems.push({ stack, url });
      } else if (type === "solutions") {
        challengeExistent.solutions.push({ stack, url });
      }

      return acc;
    },
    []
  );

export const challengeBlobToGroupedByName = ({
  challengesBlob,
}: {
  challengesBlob: AstroInstance[];
}): IChallengesGroupedByName[] => {
  const challengeDataFromPath = getAllChallengeDataFromPaths({
    challengesBlob,
  });
  return convertAllChallengesFromPathGroupedByName({ challengeDataFromPath });
};

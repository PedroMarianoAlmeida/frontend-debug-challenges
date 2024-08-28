export interface Challenge {
  challengeName: string;
  type: "problems" | "solutions";
  stack: string;
  url: string;
  isIgnore: boolean;
}

export interface AstroInstance {
  file: string;
  url: string;
}

interface IGetAllChallengeDataFromPaths {
  challengesBlob: AstroInstance[];
  filterIgnore?: boolean;
}
export const getAllChallengeDataFromPaths = ({
  challengesBlob,
  filterIgnore = true,
}: IGetAllChallengeDataFromPaths): Challenge[] => {
  const challengesWithIgnore: Challenge[] = challengesBlob.map(({ url }) => {
    const [, , challengeName, type, stack, ignoreOrFileName] = url.split("/");

    const typeTyped = type === "problems" ? "problems" : "solutions";
    return {
      challengeName,
      type: typeTyped,
      stack,
      url,
      isIgnore: ignoreOrFileName === "ignore",
    };
  });
  if (filterIgnore)
    return challengesWithIgnore.filter(({ isIgnore }) => !isIgnore);
  return challengesWithIgnore;
};

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

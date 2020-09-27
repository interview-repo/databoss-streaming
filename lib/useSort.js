export const groupBy = (arr, key) =>
  arr.reduce(
    (acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc),
    {}
  );

const sortedFunctions = {
  titleAZ: (a, b) => (a.title > b.title ? 1 : -1),
  titleZA: (a, b) => (a.title > b.title ? -1 : 1),
  yearHighLow: (a, b) => b.releaseYear - a.releaseYear,
  yearLowHigh: (a, b) => a.releaseYear - b.releaseYear,
};

const sortData = ({
  data,
  groupByYear = false,
  sort = false,
  search = false,
}) => {
  let returnData;

  if (search) {
    returnData = data.filter(
      (item) =>
        item.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !==
        -1
    );
  } else {
    returnData = data.slice(0, data.length);
  }

  if (groupByYear) {
    let tmp = [];
    const groupData = groupBy(returnData, "releaseYear");
    const allYears = Object.keys(groupData);

    groupByYear === "yearHighLow"
      ? allYears
          .reverse()
          .map((year) => tmp.push({ year, data: groupData[year] }))
      : allYears
          .sort()
          .map((year) => tmp.push({ year, data: groupData[year] }));

    if (sort) tmp.map((i) => i.data.sort(sortedFunctions[sort]));
    returnData = tmp;
  }

  if (!groupByYear && sort) returnData.sort(sortedFunctions[sort]);

  return returnData;
};

export default sortData;

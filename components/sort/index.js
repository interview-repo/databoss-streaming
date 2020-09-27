import React from "react";
import styles from "../list-page/style.module.css";

const sortTitle = {
  titleAZ: "Title A-Z",
  titleZA: "Title Z-A",
};
const sortYear = {
  yearHighLow: "Year High-Low",
  yearLowHigh: "Year Low-High",
};


function Sort({ data }) {
  const { groupByYear, setSort, setGroupped, sort } = data;

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.sort}>
          {groupByYear ? (
            <>
              {Object.entries(sortTitle).map(([key, title]) => (
                <p key={key}>
                  <input
                    type="radio"
                    value={key}
                    onChange={(e) => setSort(e.target.value)}
                    checked={sort === key}
                    name="group"
                    id={key}
                  />
                  <label htmlFor={key}>{title}</label>
                </p>
              ))}
              <div className={styles.yearSort}>
                {Object.entries(sortYear).map(([key, title]) => (
                  <p key={key}>
                    <input
                      type="radio"
                      value={key}
                      onChange={(e) => setGroupped(e.target.value)}
                      checked={groupByYear === key}
                      name="yearSort"
                      id={key}
                    />
                    <label htmlFor={key}>{title}</label>
                  </p>
                ))}
              </div>
            </>
          ) : (
            Object.entries(Object.assign({}, sortTitle, sortYear)).map(
              ([key, title]) => (
                <p key={key}>
                  <input
                    type="radio"
                    value={key}
                    onChange={(e) => setSort(e.target.value)}
                    checked={sort === key}
                    name="group"
                    id={key}
                  />
                  <label htmlFor={key}>{title}</label>
                </p>
              )
            )
          )}
        </div>

        <div className={styles.group}>
          <p>
            <input
              type="checkbox"
              id="groupped"
              onChange={() => setGroupped(groupByYear ? false : "yearHighLow")}
              checked={groupByYear}
            />
            <label htmlFor="groupped">Group By Year</label>
          </p>
        </div>
      </div>
    </>
  );
}

export default Sort;

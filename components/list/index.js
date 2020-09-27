import React from "react";
import Box from "../box";
import cn from "classnames";
import stylesBox from "../box/style.module.css";

function List({ data }) {
  const { groupByYear, list } = data;

  return (
    <>
      {groupByYear ? (
        <div className={stylesBox.yearGroup}>
          {list.map((yearList, index) => (
            <div key={index}>
              <h1>{yearList.year}</h1>
              <div className={cn(stylesBox.yearBox, stylesBox.box)}>
                {yearList?.data.map((item, i) => {
                  const image = Object.values(item.images["Poster Art"]);

                  return (
                    <Box
                      key={i}
                      title={item.title}
                      image={image[0]}
                      className={stylesBox.box}
                    ></Box>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={stylesBox.box}>
          {list.map((item, i) => {
            const image = Object.values(item.images["Poster Art"]);

            return (
              <Box
                key={i}
                title={item.title}
                image={image[0]}
                className={stylesBox.box}
              ></Box>
            );
          })}
        </div>
      )}
    </>
  );
}

export default List;

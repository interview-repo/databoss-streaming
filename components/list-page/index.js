import { useMemo, useState } from "react";

import styles from "./style.module.css";
import BreadCrumb from "../breadcrumb";
import Container from "../container";
import List from "../list";
import Sort from "../sort";
import Search from "../Search";

import useForm from "../../lib/useForm";
import sortData from "../../lib/useSort";

function ListPage({ data }) {
  const [groupByYear, setGroupped] = useState(false);
  const [sort, setSort] = useState("titleAZ");
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useMemo(
    () => setList(sortData({ data: data.data, sort, search, groupByYear })),
    [sort, groupByYear, search]
  );

  const handleSubmit = useForm({ search: search });

  return (
    <>
      <BreadCrumb title={data.title} />
      <Container className={styles.lists}>
        <div className={styles.top}>
          <form onSubmit={handleSubmit((data) => setSearch(data.search))}>
            <div className={styles.search}>
              <Search data={{ search }} />
            </div>
          </form>
        </div>

        <Sort data={{ groupByYear, setSort, setGroupped, sort }} />
        <List data={{ groupByYear, list }} />
      </Container>
    </>
  );
}

export default ListPage;

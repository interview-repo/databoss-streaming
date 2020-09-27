import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import ListPage from "../components/list-page";
import Text from "../components/text";
import { selectList } from "../redux/seriesMovies";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const { loading, response, error } = useSelector(selectList);
  const data = response[category];

  if (loading) return <Text text={loading} />;
  if (error) return <Text text={error} />;

  return <ListPage data={data} />;
};

export default CategoryPage;

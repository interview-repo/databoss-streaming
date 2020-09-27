import { useSelector } from "react-redux";
import { selectList } from "../redux/seriesMovies";
import HomePage from "../components/home-page";
import BreadCrumb from "../components/breadcrumb";
import Text from "../components/text";

const IndexPage = () => {
  const { loading, response, error } = useSelector(selectList);

  if (loading) return <Text text={loading} />;
  if (error) return <Text text={error} />;
  const categories = Object.keys(response);

  return (
    <>
      <BreadCrumb title={"Popular Titles"} />
      <HomePage data={categories} />
    </>
  );
};

export default IndexPage;

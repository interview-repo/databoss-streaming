import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/seriesMovies";

import Header from "../components/header";
import Footer from "../components/footer";


const IndexLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function dispatchGetData() {
      await dispatch(getData());
    }
    dispatchGetData();
  }, [dispatch]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default IndexLayout;

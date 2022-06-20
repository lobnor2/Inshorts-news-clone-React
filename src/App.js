import { useState } from "react";
import "./App.css";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import apikey from "./data/config";
import { useEffect } from "react";
import Footer from "./components/Footer";
function App() {
  const [category, setCategory] = useState("General");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
      );
      // console.log(news.data);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newsArray);
  useEffect(() => {
    newsApi();
  }, [category, newsResults, loadmore]);
  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />

      <NewsContent
        setLoadmore={setLoadmore}
        newsArray={newsArray}
        newsResults={newsResults}
        loadmore={loadmore}
      />

      <Footer />
    </div>
  );
}

export default App;

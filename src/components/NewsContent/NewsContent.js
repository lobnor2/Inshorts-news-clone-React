import { Container } from "@material-ui/core";
import React from "react";
import "./NewsContent.css";
import Appleicon from "../../assets/ios_app_store.png";
import Androidicon from "../../assets/android_app_store.png";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray, newsResults, loadmore, setLoadmore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        {/* for ios and andriod download button  */}
        <div className="downloadmessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img src={Appleicon} alt="ios app store icon" />
          <img src={Androidicon} alt="android store icon " />
        </div>
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {/* <hr /> */}
        {loadmore <= newsResults && (
          <>
            <div className="loadmorecenter">
              <button
                className="loadmore"
                onClick={() => setLoadmore(loadmore + 20)}
              >
                Load More
              </button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;

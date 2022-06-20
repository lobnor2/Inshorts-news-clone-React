import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  const fulldate = new Date(newsItem.publishedAt);
  var date = fulldate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className="newscard">
      <img
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI="
        }
        className="newsImage"
        alt={newsItem.title}
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <span className="author">
            <a href={newsItem.url} target="blank">
              <b>short </b>
            </a>
            <span className="muted">
              by {newsItem.author ? newsItem.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={newsItem.url} target="blank">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

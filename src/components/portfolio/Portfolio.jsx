import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  gamePortfolio,
  websitePortfolio,
  comingSoonPortfolio,
} from "../../data/portfolioData";
import { list } from "../../data/listTabData";
import { useEffect } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "games":
        setData(gamePortfolio);
        break;
      case "websites":
        setData(websitePortfolio);
        break;
      case "coming-soon":
        setData(comingSoonPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => {
          return (
            <div className="item" key={d.id}>
              <img src={d.img} alt={d.title} />
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

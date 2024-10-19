import styles from "./ArticlesComp.module.css";
import { useNavigate } from "react-router-dom";
import first_touch_src from "../first_touch.png";
import free_fear from "../free-fear.jpeg";
export default function ArticlesComp() {
  const navigate = useNavigate();
  const articles = [
    {
      img: first_touch_src,
      content: "?מהי לידת היפנוברת'ינג",
      link: "/FirstArticle",
    },
    {
      img: free_fear,
      link: "/SecondArticle",
      content: "איך לשחרר את הפחד?  במה כדאי להתמקד",
    },
  ];

  return (
    <div className={styles.container}>
      {articles.map((article, index) => (
        <div className={styles.secondContainer} key={index}>
          <img
            alt="context"
            onClick={() => navigate(article.link)}
            src={article.img}
          />
          <h2 onClick={() => navigate(article.link)}>{article.content}</h2>
        </div>
      ))}
    </div>
  );
}

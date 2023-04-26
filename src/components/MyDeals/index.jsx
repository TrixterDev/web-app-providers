import { Link } from "react-router-dom";
import { deals } from "./deals";
import styles from "./style.module.sass";
import { Button } from "antd";

const MyDeals = () => {
  return (
    <div className={styles.deals}>
      <div className={styles.deals__btn}>
        <Button type="primary" style={{ margin: "auto" }}>
          <Link to="/web-app-providers/doneAuth">Назад</Link>
        </Button>
        <Button type="primary" htmlType="submit" style={{ margin: "auto" }}>
          <a href="">Написать сотруднику</a>
        </Button>
      </div>
      {deals.map((item, index) => {
        return (
          <div key={index + Math.random()} className={styles.deals__list}>
            <h3>{item.title}</h3>
            <Button type="primary">
              <Link to="/">Подробнее</Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default MyDeals;

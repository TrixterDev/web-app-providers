import { useNavigate } from "react-router-dom";
import styles from "./style.module.sass";
import { Button } from "antd";

function AuthPage() {
  const redirect = useNavigate();
  return (
    <div className={styles.myTradesContainer}>
      <div className={styles.myTradesContent}>
        <h3>Сделки или оформить заказ:</h3>
        <p className={styles.myTradesDescription}>
          Если у вас нету текущих сделок, вы можете оформить заказ
        </p>

        <div className={styles.btn}>
          <Button
            type="primary"
            htmlType="button"
            className={styles.btnMytrades}
            onClick={() => redirect("/web-app-providers/deals")}
          >
            Мои сделки
          </Button>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => redirect("/web-app-providers/businesCard")}
          >
            Моя визитка
          </Button>
        </div>
        <div className={styles.myTradesContent__btn}>
          <Button type="primary" htmlType="submit" style={{ margin: "auto" }}>
            <a href="">Написать сотруднику</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

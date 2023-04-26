import { useNavigate } from "react-router-dom";
import styles from "./style.module.sass";
import { Button } from "antd";

function AuthPage() {
  const redirect = useNavigate();
  // console.log(location.pathname.substring(19));
  return (
    <div className={styles.myTradesContainer}>
      <div className={styles.myTradesContent}>
        <h3>Ваши сделки или Ваша визитка:</h3>
        <p className={styles.myTradesDescription}>
          Выбириет что вас интересует
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
          <Button
            type="primary"
            htmlType="submit"
            style={{ margin: "auto", width: "100%" }}
          >
            <a href="">Написать сотруднику</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

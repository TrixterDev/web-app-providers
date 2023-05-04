// import "./Login.css";
import styles from "./style.module.sass";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import clients from "../../../clients.json";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [session, setSession] = useState({
    login: "",
    password: "",
  });

  const changeHandle = (event) => {
    setSession((session) => {
      return {
        ...session,
        [event.target.name]: event.target.value,
      };
    });
  };

  if (localStorage.getItem("login")) {
    navigate("/web-app-providers/doneAuth");
  }
  const onFinish = (values) => {
    const { username, password } = values;
    const employee = clients.users.find(
      (user) => user.username === username && user.password === password
    );
    if (employee) {
      navigate("/web-app-providers/doneAuth");
      localStorage.setItem("login", session.login);
      localStorage.setItem("password", session.password);
      setInterval(() => {
        localStorage.clear();
      }, 300000);
    } else {
      setError(true);
      console.log("Нету такого пользователя");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.loginContainer}>
      <h3>Введите логин и пароль:</h3>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {error && (
          <span style={{ color: "red", margin: "0 auto", fontSize: "17px" }}>
            Неверный логин или пароль:
          </span>
        )}
        <Form.Item
          name="username"
          placeholder="Username"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите логин",
            },
          ]}
        >
          <Input placeholder="Логин" name="login" onChange={changeHandle} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите пароль",
            },
          ]}
        >
          <Input.Password
            placeholder="Пароль"
            name="password"
            onChange={changeHandle}
          />
        </Form.Item>

        <Form.Item>
          <div className={styles.btnAndForgotPassContainer}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;

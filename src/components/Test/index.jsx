// import { useState } from "react";

// function Test() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // const token = "6031357196:x";
//     const chat_id = "-1001959406019";
//     const url =
//       "https://api.telegram.org/bot" +
//       token +
//       "/sendMessage?chat_id=" +
//       chat_id +
//       "&parse_mode=html&text=" +
//       encodeURIComponent(
//         "Имя пользователя: " +
//           name +
//           "\nТелефон: " +
//           phone +
//           "\nСообщение: " +
//           message +
//           "\nСсылка на сделки: " +
//           "google.com"
//       );
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data.ok) {
//         setStatus("Ваша заявка отправлена");
//         ``;
//         setName("");
//         setPhone("");
//         setMessage("");
//       } else {
//         setStatus("Ошибка");
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus("Ошибка");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Имя пользователя:</label>
//         <input
//           type="text"
//           id="username"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="phone">Телефон:</label>
//         <input
//           type="tel"
//           id="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="message">Сообщение:</label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//       </div>
//       <button type="submit">Отправить</button>
//       <div>{status}</div>
//     </form>
//   );
// }

// export default Test;

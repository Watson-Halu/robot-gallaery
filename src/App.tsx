import React, { useState, useEffect } from "react";
import logo from "./assets/image/logo.svg";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
// import "./index.css";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: Array<any>;
}
const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0); // 可以寫作 useState <number> 來定義，但如果沒有寫的話，其實也會根據後面的參數，自動變更定義
  const [robotGallery, setRobotGallery] = useState<any>([]); // 設定為空的陣列
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    document.title = `點擊了${count}次`;
  }, [count]); // 這個列表中，只有count發生改變的時候，才會導致畫面重新渲染。( useEffect 預設是每次畫面改變都會更新 )

  useEffect(() => {
    // async | await 寫法
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e) {
        setError(e.message);
      }

      setLoading(false);
    };
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setRobotGallery(data);
    //   });
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>機器人的列表來試試看這段文字可以有多長</h1>
      </div>
      <ShoppingCart />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>{count}</span>
      {!error || (error !== "" && <div>{error}</div>)}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      ) : (
        "now is Loading"
      )}
    </div>
  );
};
export default App;

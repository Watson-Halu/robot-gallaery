import React from "react";
import logo from "./assets/image/logo.svg";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
// import "./index.css";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>機器人的列表來試試看這段文字可以有多長</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map((r) => {
          return <Robot id={r.id} name={r.name} email={r.email} />;
        })}
      </div>
    </div>
  );
}
export default App;

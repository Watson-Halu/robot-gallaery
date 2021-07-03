import React, { useContext } from "react";
import styles from "./Robot.module.scss";
import { testContext } from "../AppState";
import { testSetStateContext } from "../AppState";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const target = useContext(testContext);
  const setState = useContext(testSetStateContext);
  const addToCart = () => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  // const id = props.id
  // const name = props.name
  // const email = props.email
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <h3>作者:{target.username}</h3>
      <button onClick={addToCart}>加入購物車</button>
    </div>
  );
};

export default Robot;

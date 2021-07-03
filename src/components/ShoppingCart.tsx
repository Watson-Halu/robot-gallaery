import React from "react";
import styles from "./ShoppingCart.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { testContext } from "../AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e) => {
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  render() {
    return (
      <testContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button className={styles.button} onClick={this.handleClick}>
                <FiShoppingCart />
                <span>購物車{value.shoppingCart.items.length}件</span>
              </button>
              <div
                className={styles.cartDropDown}
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  <li>robot 1</li>
                  <li>robot 2</li>
                </ul>
              </div>
            </div>
          );
        }}
      </testContext.Consumer>
    );
  }
}

export default ShoppingCart;

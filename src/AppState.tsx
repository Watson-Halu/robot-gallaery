import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultObject: AppStateValue = {
  username: "Watson",
  shoppingCart: { items: [] },
};

export const testContext = React.createContext(defaultObject); // 這裡建立了 context 物件
export const testSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

// 建立一個在全局都可以使用的 provider 給其他的子組件使用
export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultObject);
  return (
    <testContext.Provider value={state}>
      <testSetStateContext.Provider value={setState}>
        {props.children}
      </testSetStateContext.Provider>
    </testContext.Provider>
  );
};

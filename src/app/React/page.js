"use client";
import { useState } from "react";
export default function Page() {
  // 4. React: 條件渲染
  // 問題：在React中，如何根據條件渲染兩種不同的內容？
  function ConditionalRendering({ isLoggedIn }) {
    return <div>{isLoggedIn ? "Login !" : "Not Login !"}</div>;
  }

  // 5. React: 組件
  // 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。
  const [count, setCount] = useState(0);
  function Counter(count) {
    switch (count) {
      case "plus":
        setCount((prev) => prev + 1);
        break;
      case "minus":
        setCount((prev) => prev - 1);
        break;
    }
  }

  return (
    <>
      <ConditionalRendering isLoggedIn={true} />
      <div>
        <div>Count: {count}</div>
        <button
          onClick={() => Counter("plus")}
          className="w-10 h-5 bg-blue-600"
        >
          +
        </button>
        <button
          onClick={() => Counter("minus")}
          className="w-10 h-5 bg-yellow-600"
        >
          -
        </button>
      </div>
    </>
  );
}

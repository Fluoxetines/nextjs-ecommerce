import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";
import { runFirework } from "../lib/utils";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFirework();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Đã đặt hàng thành công !</h2>
        <p className="email-msg">
          Vui lòng kiểm tra đơn hàng trong email của bạn.
        </p>
        <p className="description">
          Nếu có thắc mắc, vui lòng liên hệ
          <a href="mailto:example@gmail.com"> example@gmail.com</a>
        </p>
        <Link href="/">
          <button type="button" className="btn" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;

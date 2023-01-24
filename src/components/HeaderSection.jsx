import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login, logout, authStateChanged } from "../firebase/firebase";

export default function HeaderSection() {
  const [user, setUser] = useState();
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };

  useEffect(() => {
    authStateChanged((user) => setUser(user));
  }, []);

  return (
    <section className="flex justify-between items-center border-b">
      <Link
        to={"/"}
        className="font-extrabold text-3xl transition-all hover:text-4xl my-10"
      >
        WITHWITH
      </Link>
      <div className="flex gap-4">
        {!user && (
          <p
            onClick={handleLogin}
            className="hover:font-bold hover:cursor-pointer"
          >
            로그인
          </p>
        )}
        {user && (
          <p
            onClick={handleLogout}
            className="hover:font-bold hover:cursor-pointer"
          >
            로그아웃
          </p>
        )}

        <p className="hover:font-bold hover:cursor-pointer">마이페이지</p>
        <p className="hover:font-bold hover:cursor-pointer">장바구니</p>
        <p className="hover:font-bold hover:cursor-pointer">상품수정</p>
      </div>
    </section>
  );
}

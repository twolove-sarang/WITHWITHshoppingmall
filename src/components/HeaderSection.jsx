import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function HeaderSection() {
  const { user, login, logout } = useAuthContext();
  console.log(user);
  return (
    <section className="flex justify-between items-center border-b">
      <Link
        to={'/'}
        className="font-extrabold text-3xl transition-all hover:text-4xl my-10"
      >
        WITHWITH
      </Link>
      <div className="flex gap-4">
        {!user && (
          <p onClick={() => login()} className="selectHover">
            로그인
          </p>
        )}

        {user && (
          <p onClick={() => logout()} className="selectHover">
            로그아웃
          </p>
        )}

        {user && user.isAdmin ? (
          <>
            <Link to={'/admin'} className="selectHover">
              상품등록
            </Link>
          </>
        ) : (
          // <div className="flex gap-4">
          //   <p className="selectHover">마이페이지</p>
          // </div>
          <Link to={'/cart'} className="selectHover">
            장바구니
          </Link>
        )}
      </div>
    </section>
  );
}

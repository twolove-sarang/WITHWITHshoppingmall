import React, { useState } from "react";
import { uploadFile } from "../apis/Auth_firebase";
import { cloudinary as cloudiness } from "../apis/Image_cloudinary";

export default function AdminPage() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    cloudiness(file) //
      .then((url) => {
        uploadFile(product, url);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="flex items-top justify-center">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="file notDefined"
          className="basis-1/2 w-1/2 p-20"
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col basis-1/2 w-1/2 py-20"
      >
        <p className="text-center text-2xl my-12">상품을 등록해 주세요.</p>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={handleChange}
          id="admin_input"
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="상품명을 적어주세요"
          onChange={handleChange}
          required
          id="admin_input"
        />
        <input
          type="number"
          name="price"
          placeholder="가격을 적어주세요"
          onChange={handleChange}
          value={product.price ?? ""}
          required
          id="admin_input"
        />
        <input
          type="text"
          name="description"
          placeholder="상품설명을 적어주세요"
          onChange={handleChange}
          value={product.description ?? ""}
          required
          id="admin_input"
        />
        <input
          type="text"
          name="option"
          placeholder="옵션을 콤마(,)로 구분해 적어주세요"
          onChange={handleChange}
          value={product.option ?? ""}
          required
          id="admin_input"
        />
        {loading ? (
          <button id="admin_button">✨ 업로드 중입니다.</button>
        ) : (
          <button id="admin_button">제출하기</button>
        )}
      </form>
    </section>
  );
}

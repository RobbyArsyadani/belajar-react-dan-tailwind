import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./components/layout";
export default function Coba() {
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Layout>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold">Ini halaman About</h1>
        </div>
      </Layout>
    </>
  );
}

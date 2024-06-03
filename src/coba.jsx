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
        <Link to="/">BALIK KE HOME</Link>
      </Layout>
    </>
  );
}

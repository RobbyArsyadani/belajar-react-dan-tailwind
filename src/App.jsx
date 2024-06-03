/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Layout from "./components/layout";

export default function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setDatas(data.posts));
  }, []);

  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <Layout>
        <div className="min-h-full">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-6xl font-bold ">Hello</div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 divide-y-4">
              {" "}
              {datas.map((data) => (
                <>
                  <div className="d my-3">
                    <h1 className="text-3xl font-bold mt-3 tracking-tight text-gray-900">{data.title}</h1>
                    <p>{truncateWords(data.body, 10)}</p>
                  </div>
                </>
              ))}
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}

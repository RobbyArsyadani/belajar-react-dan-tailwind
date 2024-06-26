import { useEffect, useState } from "react";
import Layout from "./components/layout";

export default function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  });
  return (
    <>
      <Layout>
        <div className="min-h-full bg-white">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-6xl font-bold ">Products</div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-wrap gap-2">
              {data.map((datas) => (
                <>
                  {/* <div key={datas.id}>
                    <h1 className="text-2xl font-bold">{datas.title}</h1>
                    <img src={datas.images} alt="" />
                    <p>{datas.description}</p>
                  </div> */}

                  <div className="bg-gradient-to-r max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:from-green-800 hover:to-blue-900">
                    <header>
                      <a href="#">
                        <img className="rounded-t-lg" src={datas.images} alt="" />
                      </a>
                    </header>

                    <div className="p-5">
                      <body className="body-card">
                        <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{datas.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{datas.description}</p>
                      </body>
                      <footer>
                        <a
                          href="#"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Read more
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                        </a>
                      </footer>
                    </div>
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

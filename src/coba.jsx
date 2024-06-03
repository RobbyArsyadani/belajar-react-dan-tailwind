import React, { useEffect } from "react";

export default function Coba() {
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div>halo</div>
    </>
  );
}

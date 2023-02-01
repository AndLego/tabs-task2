import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <section className="title">
      <h1>{title}</h1>
      <div className="underline"></div>
    </section>
  );
};

export default Title;

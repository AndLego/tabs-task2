import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Jobs } from "./types";

interface DetailsProps {
  jobs: Jobs[];
  current: number;
}

const Details = ({ jobs, current }: DetailsProps) => {
  const job = jobs[current];

  if (!job) {
    return null;
  }

  const { title, company, dates, duties } = job;

  return (
    <section className="details">
      <h1>{title}</h1>
      <h2>{company}</h2>
      <p>{dates}</p>
      {duties.map((duty, index) => {
        return (
          <div key={index}>
            <FaAngleDoubleRight />
            <p>{duty}</p>
          </div>
        );
      })}
      <button>MORE INFO</button>
    </section>
  );
};

export default Details;

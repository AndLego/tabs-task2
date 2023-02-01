import React from "react";
import { Jobs } from "./types";

interface CompaniesListProps {
  jobs: Jobs[];
  current: number;
  setCurrent: (current: number) => void;
}

const CompaniesList = ({ jobs, setCurrent, current }: CompaniesListProps) => {

  return (
    <aside>
      {jobs.map((job, index) => {
        return (
          <button
          key={index}
            className={`btn ${index === current && "active"}`}
            onClick={() => setCurrent(index)}
          >
            {job.company}
          </button>
        );
      })}
    </aside>
  );
};

export default CompaniesList;

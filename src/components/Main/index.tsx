"use client";

import { useEffect, useState } from "react";
import { stolenBikes, totalStolenBikes } from "@/api/stolen-bikes";
import SearchFilter from "./searchFilter";
import SingleBike from "./singleBike";
import Pagination from "./pagination";
import SkeletonLoader from "./SkeletonLoader";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [query, setQuery] = useState("");
  const [totalReports, setTotalReports] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getStolenBikes = async () => {
    setLoading(true);
    setReports([]);

    const data = await stolenBikes(query, currentPage);

    setTimeout(() => {
      setReports(data);
      setLoading(false);
    }, 2000);
  };

  const getStolenBikesCount = async () => {
    const data = await totalStolenBikes(query);

    setTotalReports(data.proximity);
  };

  useEffect(() => {
    getStolenBikes();
    getStolenBikesCount();
  }, [currentPage]);

  return (
    <>
      <section id="main" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SearchFilter
            setQuery={setQuery}
            getStolenBikes={getStolenBikes}
            totalReports={totalReports}
          />

          <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-1">
            {loading ? (
              [...Array(5)].map((_, i) => <SkeletonLoader key={i} />)
            ) : reports && reports.length > 0 ? (
              reports.map((singlebike) => (
                <SingleBike key={singlebike.id} singlebike={singlebike} />
              ))
            ) : (
              <div className="w-full rounded-md bg-gray-200 p-4 dark:bg-gray-dark">
                <div className="h-full w-full rounded-md bg-gray-100 p-2 text-center dark:bg-black">
                  No results found for your search
                </div>
              </div>
            )}
          </div>

          <Pagination
          reports={reports}
            totalReports={totalReports}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default Main;

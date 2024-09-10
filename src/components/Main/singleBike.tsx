import moment from "moment";

const SingleBike = ({ singlebike }) => {
  const { thumb, title, description, date_stolen, stolen_location } =
    singlebike;

  const date = moment.unix(date_stolen);

  return (
    <div className="w-full rounded-md bg-gray-200 dark:bg-gray-dark">
      <div className="flex h-full flex-col items-stretch gap-4 p-4 lg:flex-row">
        <div className="rounded-md">
          <img
            src={thumb ? thumb : "/images/bike-placeholder.png"}
            alt="thumb"
            width={"300px"}
            height={"300px"}
            className="rounded-md"
          />
        </div>
        <div className="h-full w-full rounded-md bg-gray-100 p-2 dark:bg-black">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pb-4 text-base font-medium leading-relaxed text-body-color">
            {description ? description.slice(0,250) : "No Description"}
          </p>
          <hr className="h-1 bg-gray-200" />
          <div className="">
            <p className="my-2 pr-[10px] text-base font-medium leading-relaxed text-body-color">
              <span className="text-lg font-bold">Date Stolen:</span>{" "}
              {date.format("dddd, Do MMM YYYY, h:mm A")}
            </p>
            <p className="my-2 pr-[10px] text-base font-medium leading-relaxed text-body-color">
              <span className="text-lg font-bold">Date Reported:</span>{" "}
              {date.format("dddd, Do MMM YYYY, h:mm A")}
            </p>
            <p className="my-2 pr-[10px] text-base font-medium leading-relaxed text-body-color">
              <span className="text-lg font-bold">Theft Location:</span>{" "}
              {stolen_location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBike;

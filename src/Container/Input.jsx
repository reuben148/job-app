import React, { useState } from "react";

function Input() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!title || !location) return;

    setLoading(true);
    try {
      const response = await fetch(
        `http://jsearch.p.rapidapi.com/search?query=${title}%20in%20${location}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "5d7ae035c8mshe22ecf167534b93p143975jsndf746bc0e13c",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      setJobs(data.data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-8">
      {/* Search Bar */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[850px] bg-white rounded-[12px] shadow-md p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <input
            type="text"
            placeholder="Job Title or Keywords"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full md:w-[250px] p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-serif placeholder:text-slate-400"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full md:w-[250px] p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-serif placeholder:text-slate-400"
          />
          <button
            onClick={handleSearch}
            className="w-full md:w-[150px] p-3 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-all font-semibold"
          >
            Search
          </button>
        </div>
      </div>

      {/* Job Results */}
      <div className="mt-10 max-w-[1000px] mx-auto px-4">
        {loading ? (
          <p className="text-center text-blue-600 text-lg font-medium">
            Loading jobs...
          </p>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.job_id}
                className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {job.job_title}
                </h3>
                <p className="text-sm text-gray-600 mb-1 font-medium">
                  {job.employer_name}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {job.job_city}, {job.job_country}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={job.job_apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </a>
                  <span className="text-xs text-gray-400">
                    {new Date(
                      job.job_posted_at_datetime_utc
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          title &&
          location && (
            <p className="text-center text-gray-500 text-md">
              No jobs found. Try different keywords.
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default Input;

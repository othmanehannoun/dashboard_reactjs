import React, { useState } from "react";

import SingleCard from "../components/SingleCard";
import { CircleChart } from "./charts/CircleChart";


const adminObj = {
  title: "Total admin",
  totalNumber: 750,
  icon: "bi bi-arrows-move",
  color: "linear-gradient(#ef621c, #e1424e)"
};

const userObj = {
  title: "user active",
  totalNumber: 1697,
  icon: "bi bi-people",
  color: "linear-gradient(#01d293, #56c57a)"
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "bi bi-bookmarks",
  color: "linear-gradient(#725cff, #725cff)"
};

const distanceObj = {
  title: "file upload",
  totalNumber: 2167,
  icon: "bi bi-award",
  color: "linear-gradient(#2884ff, #2884ff)"
};

// ----------------------------------------------------------------------

export default function DashboardStatistics() {
  // const theme = useTheme();

  const [data, setData] = useState({
     series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 400,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
  })
  return (
    <div className="">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col dashboard__cards">
            <SingleCard item={adminObj} />
          </div>
          <div className="col dashboard__cards">
            <SingleCard item={userObj} />
          </div>
          <div className="col dashboard__cards">
            <SingleCard item={clientObj} />
          </div>
          <div className="col dashboard__cards">
            <SingleCard item={distanceObj} />
          </div>
        </div>
      </div>

      {/* dashboard charts */}

      <div className="container" style={{marginTop: "40px"}}>
        <div className="row">
          <div className="col-sm-6 ">Table data</div>
          <div className="col-sm-6" 
              style={{
                backgroundColor: "white",
                boxShadow: '1px 5px 9px #d1d1d1',
              }}
          >
            <CircleChart options={data.options} series={data.series} type="pie" width={380}/>
          </div>
        </div>
      </div>

    </div>
  );
}

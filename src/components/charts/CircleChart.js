import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";

export const CircleChart = ({options, series, width}) => {

   
  return (
    <React.Fragment>
        <div className="">
            <h3 className="mt-3" style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#565656",
                textAlign: 'center',
                marginBottom: "30px"
            }}>
                chart circle</h3>
            <Chart 
            type="pie"
            // width={width}
            // height={950}
           
            series={ series }                

            options={options}

            //    responsive= {[
            //     breakpoint= 480,
            //     options= {
            //       chart: {
            //         width: 200
            //       },
            //       legend: {
            //         position: 'bottom'
            //       }
            //     }
            //   ]}
            >
            </Chart>
        </div>
    </React.Fragment>
  )
}

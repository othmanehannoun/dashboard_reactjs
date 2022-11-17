import React, {useEffect, useState} from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "../styles/users.css"
import Data from '../api/userdata';

export default function Users() {
  const [users, setUsers] = useState(Data);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(2);
  const [pageNumberLimit, setpageNumberLimit] = useState(2);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(2);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(()=>{
    console.log("data bro: ", users);
  },[users])

  const pages = [];
  for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
};


  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
  };

  const renderPageNumbers = pages.map((number, key) => {
    
    if (number <= maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <li
            key={key}
            id={number}
            onClick={handleClick}
            className={currentPage === number ? "page-item active" : "page-item"}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
  });

  return (
    <div className='users'>
      <p>wolcome to page Users</p>
      <div className="py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">Authors table</h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  {/* <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">status</th>
                        <th scope="col">action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((item, index) => {
                      // console.log("WAAAMIII", currentItems.length);
                      return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.Email}</td>
                        <td>{item.phone}</td>
                        <td>{item.status}</td>
                        <td>edit & delete</td>
                      </tr>
                      );
                    })}
                      
                    </tbody>
                  </table> */}
                  <Paper className="container">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>id</TableCell>
                          <TableCell numeric>name</TableCell>
                          <TableCell numeric>email</TableCell>
                          <TableCell numeric>phone</TableCell>
                          <TableCell numeric>status</TableCell>
                          <TableCell numeric>action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {currentItems.map((item, key) => (
                          <TableRow key={key}>
                            <TableCell numeric>{key + 1}</TableCell>
                            <TableCell component="th" scope="row">
                              {item.name}
                            </TableCell>
                            <TableCell numeric>{item.Email}</TableCell>
                            <TableCell numeric>{item.phone}</TableCell>
                            <TableCell numeric>{item.status}</TableCell>
                            <TableCell numeric>Edit & delete</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                </div>
              </div>

              {/* TABLE PAGINATION  */}

              <div className="container pageNumbers">
                <ul className="pagination pagination-circle pg-purple mb-0 flex-wrap">
                    <li onClick={handlePrevbtn} className={currentPage === pages[0] ? "disabled" : ""}>
                      Prev
                    </li>
                
                    {renderPageNumbers}

                    <li onClick={handleNextbtn} className={currentPage === pages[pages.length - 1] ? "disabled" : ""}>
                      Next
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

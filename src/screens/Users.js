import React, {useEffect, useState} from 'react'
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import MaterialTable from 'material-table'
import { useTable, useGlobalFilter, usePagination} from 'react-table'

import "../styles/users.css"
import Data from '../api/userdata';
import { GlobalFilter } from '../components/tables/GlobalFilter';
// import { ModalShowUser } from '../components/modals/ModalShowUser';

import Button from '@mui/material/Button';

import { ModalShowUser } from '../components/modals/ModalShowUser';


const columns = [
  { title: "Name", field: "name", sorting: false, filtering: false, cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
    { title: "Email", field: "email", filterPlaceholder: "filter" },
    { title: "Phone Number", field: "phone", align: "center", grouping: false },
]
export default function Users() {
  const [users, setUsers] = useState(Data);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  // const [pageNumberLimit, setpageNumberLimit] = useState(2);
  // const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(2);
  // const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
 
  useEffect(()=>{

  },[users])

  const pages = [];
  for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setcurrentPage(Number(event));
    gotoPage(Number(event - 1))

  };


  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    nextPage()
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    previousPage()
  };

  const handleChangePageSize = (event)=>{
    setcurrentPage(1)
    setitemsPerPage(event)
    setPageSize(event);
  }
  const fetchDetails = (dd) =>{
    alert("Hello" + dd);
  }
  

  const renderPageNumbers = pages.map((number, key) => {
    
    // if (number <= maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <button
            key={key}
            id={number}
            onClick={() => handleClick(number)}
            className={currentPage === number ? "page-item active" : "page-item"}
          >
            {number}
          </button>
      );
      // } else {
      //   return null;
      // }
  });


  // react-table 
  const data = React.useMemo(
    () => users,
    []
  )


  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Email',
        accessor: 'Email',
      },
      {
        Header: 'Phone Number',
        accessor: 'phone',
      },
      {
        Header: 'status',
        accessor: 'status',
        Cell: ({ cell }) => (
          <button 
            className={cell.row.values.status == "active" ? "btn btn-success" : "btn btn-danger"} 
            style={{
              fontSize: "12px"
            }}
            value={cell.row.values.name}>
            {cell.row.values.status}
          </button>
        )
      },
     
    ],
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({ columns, data },
    useGlobalFilter, usePagination)

    const { globalFilter, pageIndex, pageSize} = state

  // react popup
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [idUser, setIdUser] = React.useState(0);


  const handleClickOpen = (userId) => () => {
    setIdUser(userId);
    setOpen(true);
    // setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    
    <div className='users'>
      <p className='titleApp'>wolcome to page Users</p>
      <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
     <ModalShowUser 
      open={open}
      handleClose={handleClose}
      descriptionElementRef={descriptionElementRef}
      scroll={scroll}
      userId={idUser}
     />
    </div>
      <div className="py-0">
        <div className="row">
          <div className="col-12">
            <div className="card-table my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">Gestion des utilisateur</h6>
                </div>
              </div>
              <div 
                  style={{
                    marginLeft: 'auto', 
                    padding: '5px 20px',
                    marginBottom: '15px'
                  }}
              >
                  <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
              </div>
              <div className="card-body">
                <div className="table-responsive p-0">
                  <table className="table table-hover" {...getTableProps()} 
                  // style={{ border: 'solid 1px blue' }}
                  >
                    <thead>
                      {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map(column => (
                            <th scope="col"
                              {...column.getHeaderProps()}
                              // style={{
                              //   borderBottom: 'solid 3px red',
                              //   background: 'aliceblue',
                              //   color: 'black',
                              //   fontWeight: 'bold',
                              // }}
                            >
                              {column.render('Header')}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {page.map(row => {
                        prepareRow(row)
                        return (
                          <tr {...row.getRowProps()}
                          onClick={handleClickOpen(row.original.id)}
                          >
                            {row.cells.map(cell => {
                              return (
                                <td 
                                  {...cell.getCellProps()}
                                  
                                >
                                  {cell.render('Cell')}
                                </td>
                              )
                            })}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>

                {/* <Paper className="">
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
                </Paper> */}
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
                </div>

                {/* TABLE PAGINATION  */}

                {/* <div className="pageNumbers">
                  <ul className="pagination pagination-circle pg-purple mb-0 flex-wrap">
                      <li onClick={handlePrevbtn} className={currentPage === pages[0] ? "disabled" : ""}>
                        Prev
                      </li>
                  
                      {renderPageNumbers}

                      <li onClick={handleNextbtn} className={currentPage === pages[pages.length - 1] ? "disabled" : ""}>
                        Next
                      </li>
                  </ul>
                </div> */}

              </div>
              
              
                {/* REACT-TABLE PAGINATION */}

            
                <div className="pageNumbers">
                
                  <div className="pagination pagination-circle pg-purple mb-0 flex-wrap">
                    

                    <div 
                      style={{
                        padding: '0px 15px',
                        display: 'flex'
                      }}
                    >
                      <span 
                        style={{
                          marginTop: '8px',
                          width: '100%',
                        }}
                      >
                        Page{' '}
                        <strong>
                          {pageIndex + 1} of {pageOptions.length + ' '}
                        </strong>
                        
                      </span>
                      {' '}
                      <select className="form-select"
                          value={pageSize}
                          onChange={e => handleChangePageSize(Number(e.target.value))} 
                        >
                          {
                            [10, 20, 30].map(pageSize =>(
                              <option value={pageSize} key={pageSize}>
                                show {pageSize}
                              </option>
                            ))
                          }

                      </select>
                    </div>
                    <button onClick={() => handlePrevbtn()} disabled={!canPreviousPage}>
                      Prev
                    </button>
                
                    {renderPageNumbers}

                    <button onClick={()=> handleNextbtn()} disabled={!canNextPage}>
                      Next
                    </button>
                  </div>
                </div>

              {/* <MaterialTable columns={columns} data={users} /> */}

            </div>
          </div>
        </div>
      </div>

      

    </div>
  )
}

import React, {useEffect, useState} from 'react'
// import { useTable, useGlobalFilter, usePagination} from 'react-table'

import "../styles/users.css"
import Data from '../api/userdata';
// import { GlobalFilter } from '../components/tables/GlobalFilter';

// import Button from '@mui/material/Button';

import { ModalShowUser } from '../components/modals/ModalShowUser';
import { Table } from '../components/tables/Table';


export default function Users() {
  const [users, setUsers] = useState(Data);
 
  // const [pageNumberLimit, setpageNumberLimit] = useState(2);
  // const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(2);
  // const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
 
  useEffect(()=>{

  },[users])

  
  // const fetchDetails = (dd) =>{
  //   alert("Hello" + dd);
  // }
  
  // react-table 

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
            className={cell.row.values.status === "active" ? "btn btn-success" : "btn btn-danger"} 
            style={{
              fontSize: "12px",
              width: "45%"
            }}
            value={cell.row.values.name}>
            {cell.row.values.status}
          </button>
        )
      },
     
    ],
    []
  )


  // react popup
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [idUser, setIdUser] = React.useState(null);


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
              {/* <div 
                  style={{
                    marginLeft: 'auto', 
                    padding: '5px 20px',
                    marginBottom: '15px'
                  }}
              >
                  <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
              </div> */}
              
              <Table 
                dataApi = {users}
                columns = {columns}
                handleClickOpen = {handleClickOpen}
                click  = {true}
              />
              {/* <MaterialTable columns={columns} data={users} /> */}

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

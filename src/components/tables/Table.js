import React, {useState} from 'react'
import { useTable, useGlobalFilter, usePagination} from 'react-table'
import { GlobalFilter } from './GlobalFilter';


export const Table = (props) => {

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(10);


    const {dataApi, columns, click, handleClickOpen} = props
        // react-table 
    const data = React.useMemo(
        () => dataApi,
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

    const pages = [];
    for (let i = 1; i <= Math.ceil(dataApi.length / itemsPerPage); i++) {
    pages.push(i);
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

  return (
    <>
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
                <table className={click ? "table table-hover" : "table"} 
                {...getTableProps()} 
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
                            onClick={click ? handleClickOpen(row.original.id) : null}
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
            </div>
        </div>

        {/* REACT-TABLE PAGINATION */}
        <div className="pageNumbers">
        <div className="pagination pagination-circle pg-purple mb-0 flex-wrap">
            <span 
                style={{
                marginTop: '8px',
                // width: '100%',
                }}
            >
                Page{' '}
                <strong>
                {pageIndex + 1} of {pageOptions.length + ' '}
                </strong>
                
            </span>
            {' '} 

            <div 
                style={{
                    padding: '0px 15px',
                }}
            >
            
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
    </>
  )
}

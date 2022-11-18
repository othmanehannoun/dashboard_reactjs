import React from 'react'
import { Table } from '../components/tables/Table'
import dataPudget from '../api/pudgetApi';

import '../styles/budget.css'
import { ModalEditBudget } from '../components/modals/ModalEditBudget';
import { ModalDeleteBudget } from '../components/modals/ModalDeleteBudget';
import { ModalAddBudget } from '../components/modals/ModalAddBudget';

    const Pudget = () => {

        const [idPudget, setIdPudget] = React.useState(null);

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
                Header: 'Price',
                accessor: 'price',
            },
            
            {
                Header: 'Action',
                Cell: ({ cell }) => (
                <div>
                    <button 
                        className="btn-edit"
                        onClick={handleOpenModalEdit(cell.row.values.id)}
                    >
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button 
                        className="btn-delete"
                        onClick={handleOpenModalDelete(cell.row.values.id)}
                    >
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
                )
            },
            
            ],
            []
        )

        // react popup
        const [openAdd, setOpenAdd] = React.useState(false);
        const [openEdit, setOpenEdit] = React.useState(false);
        const [openDelete, setOpenDelete] = React.useState(false);
        const [scroll, setScroll] = React.useState('paper');

        const handleOpenModalAdd = () => () => {
            setOpenAdd(true);
        };

        const handleOpenModalEdit = (id) => () => {
            setIdPudget(id);
            setOpenEdit(true);
        };

        const handleOpenModalDelete = (id) => () => {
            setIdPudget(id);
            setOpenDelete(true);
        };

        const handleCloseModalAdd = () => {
            setOpenAdd(false);
        };

        const handleCloseModalEdit = () => {
            setOpenEdit(false);
        };

        const handleCloseModalDelete = () => {
            setOpenDelete(false);
        };
        
        const descriptionElementRefAdd = React.useRef(null);
        React.useEffect(() => {
        if (openAdd) {
            const { current: descriptionElement } = descriptionElementRefAdd;
            if (descriptionElement !== null) {
            descriptionElement.focus();
            }
        }
        }, [openAdd]);

        const descriptionElementRefEdit = React.useRef(null);
        React.useEffect(() => {
        if (openEdit) {
            const { current: descriptionElement } = descriptionElementRefEdit;
            if (descriptionElement !== null) {
            descriptionElement.focus();
            }
        }
        }, [openEdit]);

        const descriptionElementRefDelete = React.useRef(null);
        React.useEffect(() => {
        if (openDelete) {
            const { current: descriptionElement } = descriptionElementRefDelete;
            if (descriptionElement !== null) {
            descriptionElement.focus();
            }
        }
        }, [openDelete]);

    return (
        <div className='pudget'>
            <p className='titleApp'>wolcome to page Budget</p>

            <ModalAddBudget 
                open={openAdd}
                handleClose={handleCloseModalAdd}
                descriptionElementRef={descriptionElementRefAdd}
                scroll={scroll}
            />

            <ModalEditBudget 
                open={openEdit}
                handleClose={handleCloseModalEdit}
                descriptionElementRef={descriptionElementRefEdit}
                scroll={scroll}
                id={idPudget}
            />

            <ModalDeleteBudget 
                open={openDelete}
                handleClose={handleCloseModalDelete}
                descriptionElementRef={descriptionElementRefDelete}
                scroll={scroll}
                id={idPudget}
            />

            {/* Table */}
            <div className="py-0">
            <div className="row">
            <div className="col-12">
                <div className="card-table my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Gestion des Dudgets</h6>
                    </div>
                </div>

                <div style={{
                    marginLeft: "auto",
                    padding: "25px",
                }}>
                    <button type="button" class="btn btn-primary"
                        onClick={handleOpenModalAdd()}
                    style={{
                        fontSize: "12px"
                    }}
                    >
                    Ajouter Pudget</button>
                </div>
                <Table 
                    dataApi = {dataPudget}
                    columns = {columns}
                    // handleClickModalEdit = {handleClickModalEdit}
                    // handleClickModalDelete = {handleClickModalDelete}
                    click  = {false}
                />
                {/* <MaterialTable columns={columns} data={users} /> */}

                </div>
            </div>
            </div>
        </div>
        </div>
    )
    }

export default Pudget

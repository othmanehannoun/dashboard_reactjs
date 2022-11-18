import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { Link } from 'react-router-dom';

import { Grid, makeStyles  } from '@material-ui/core';

// import DocViewer, { DocViewerRenderers } from "react-doc-viewer";


// const docs = [
//     { uri: "http://example.com/image.png" }
// ];

const useStyles = makeStyles(theme => ({

    
    // dialogWrapper: {
    //     padding: theme.spacing(2),
    //     position: 'absolute',
    //     top: theme.spacing(5)
    // },
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 15,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'black'
    }
}))

export const ModalDeleteBudget = ({open, handleClose, scroll, descriptionElementRef, id}) => {

    // const classes = useStyles();
    
  return (
    <div className="">
        <Dialog 
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            styleContent={{
                width: "100%",
                backgrounColor: "red"
            }}
        >
            <DialogTitle id="scroll-dialog-title">Supprimer budget</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
                <p>budget id : {id}</p>
                <form className="">
                    <Grid container>
                        <p style={{
                            color: "red",
                            fontSize: "20px"
                        }}>Êtes-vous sûr de bien vouloir supprimer cet élément?</p>
                    </Grid>
                </form>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Delete</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

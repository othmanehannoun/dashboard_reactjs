import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Grid, TextField, makeStyles  } from '@material-ui/core';


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

export const ModalEditBudget = ({open, handleClose, scroll, descriptionElementRef, id}) => {

    const classes = useStyles();
    
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
            <DialogTitle id="scroll-dialog-title">Modifier budget</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
                <p>budget id : {id}</p>
                <form className="">
                    <Grid container>
                        <Grid item xs={6} style={{ padding: '10px' }}>
                        <TextField
                            id="name"
                            label="Nom"
                            className={classes.textField}
                            value={"Budget 1"}
                            // onChange={this.handle_change('form_email')}
                            margin="normal"
                            inputProps={{style: { color: 'rgb(50, 50, 50)' }}}
                            // disabled={true}
                        />

                        </Grid>
                        <Grid item xs={6} style={{ padding: '10px' }}>
                        <TextField
                            id="price"
                            label="Price"
                            className={classes.textField}
                            value={"1000"}
                            // onChange={this.handle_change('form_email')}
                            margin="normal"
                            inputProps={{style: { color: 'rgb(50, 50, 50)' }}}
                            // InputProps={{
                            //     className: classes.input,
                            // }}
                            // disabled={true}
                        />

                       
                        
                        </Grid>
                        
                    </Grid>
                </form>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Edit</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

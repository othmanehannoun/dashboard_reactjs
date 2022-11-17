import React,{Fragment} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

import { Grid, TextField, makeStyles  } from '@material-ui/core';

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

import '../../styles/Modal_css/showUser.css'

const docs = [
    { uri: "http://example.com/image.png" }
];

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

export const ModalShowUser = ({open, handleClose, scroll, descriptionElementRef, userId}) => {

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
            <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
                <p>user id : {userId}</p>
                <form className="">
                    <Grid container>
                        <Grid item xs={6} style={{ padding: '10px' }}>
                        <TextField
                            id="name"
                            label="Nom"
                            className={classes.textField}
                            value={"Hannoune"}
                            // onChange={this.handle_change('form_email')}
                            margin="normal"
                            inputProps={{style: { color: 'rgb(50, 50, 50)' }}}
                            disabled={true}
                        />

                        <TextField
                            id="Adress"
                            label="Adress"
                            className={classes.textField}
                            value={"Safi, Moroco"}
                            // onChange={this.handle_change('form_email')}
                            margin="normal"
                            inputProps={{style: { color: 'rgb(50, 50, 50)' }}}
                            disabled={true}
                        />



                        </Grid>
                        <Grid item xs={6} style={{ padding: '10px' }}>
                        <TextField
                            id="name"
                            label="Prenom"
                            className={classes.textField}
                            value={"Othmane"}
                            // onChange={this.handle_change('form_email')}
                            margin="normal"
                            inputProps={{style: { color: 'rgb(50, 50, 50)' }}}
                            // InputProps={{
                            //     className: classes.input,
                            // }}
                            disabled={true}
                        />

                        <TextField
                            id="dateNaissance"
                            label="Date de naissance"
                            className={classes.textField}
                            value={"17 / 11 / 1998"}
                            // onChange={this.handle_change('form_email')}
                            margin="normal"
                            inputProps={{style: { color: 'rgb(50, 50, 50)' }}}
                            disabled={true}
                        />
                        
                        </Grid>
                        <Grid item xs={12} style={{ padding: '10px' }}>

                            <div className="divfile">
                                <div className="fileName" style={{marginTop: "10px"}}>
                                    <i class="bi bi-file-text">passport.pdf</i>
                                </div>
                                <div style={{marginTop: "5px"}}>
                                    <a className="downloadFileIcon" href='http://localhost:3001/public/uploads/doc2.docx' target='_blank'>
                                        <i class="bi bi-cloud-download"></i>
                                    </a>
                                </div>
                            </div>
                        {/* <DocViewer
                            pluginRenderers={DocViewerRenderers}
                            documents={docs}
                          
                            style={{ height: 500 }}
                        /> */}
                        </Grid>
                    </Grid>
                </form>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            {/* <Button onClick={handleClose}>Subscribe</Button> */}
            </DialogActions>
        </Dialog>
    </div>
  )
}

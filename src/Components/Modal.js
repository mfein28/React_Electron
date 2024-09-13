import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Settings} from "@mui/icons-material";
import {Checkbox, FormControlLabel, FormGroup, FormLabel} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(props.bullet_points)
    return (
        <div>
            <Button onClick={handleOpen} variant="contained" endIcon={<Settings />} size="medium" color="primary" sx={{ margin: '2rem' }}>
                Configure
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormLabel component="legend">Configure Output</FormLabel>
                    <FormGroup aria-label="position" column>
                        <FormControlLabel
                            control={<Checkbox checked={props.weekend_outages} inputProps={{ 'aria-label': 'controlled' }} onChange={props.handle_weekend_outages}/>}
                            label="Include Weekend Outages"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={props.bullet_points} inputProps={{ 'aria-label': 'controlled' }} onChange={props.handle_bullet_points}/>}
                            label="Include Bullet Points"
                            labelPlacement="end"
                        />
                    </FormGroup>

                </Box>
            </Modal>
        </div>
    );
}
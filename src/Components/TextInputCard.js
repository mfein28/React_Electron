import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Quill from './quill';
import { Forward } from '@mui/icons-material';

function TextInputCard({ quillText, setQuillText, test }) {
    return (
        <Grid item sx={{ width: '45%', height: '80vh' }}>
            <Card sx={{ maxWidth: '100%', padding: '1rem' }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" align="left">
                        Enter text to summarize
                    </Typography>
                    <Quill summaryText={quillText} setSummaryText={setQuillText} />
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>

                    <Button
                        variant="contained"
                        onClick={test}
                        endIcon={<Forward />}
                        size="small"
                        color="primary"
                        sx={{ marginTop: '2rem' }}
                    >
                        Submit
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default TextInputCard;

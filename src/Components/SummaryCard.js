import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThumbUp, ThumbDown, Refresh } from '@mui/icons-material';
import Quill from './quill';
import Button from "@mui/material/Button";

function SummaryCard() {
    return (
        <Grid item sx={{ width: '45%', height: '80vh' }}>
            <Card sx={{ maxWidth: '100%', padding: '1rem' }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" align="left">
                        Summarized text will appear below
                    </Typography>
                    <Quill />
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <IconButton aria-label="like" size="medium" color="primary" sx={{ marginTop: '2rem' }}>
                        <ThumbUp fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="dislike" size="medium" sx={{ marginTop: '2rem' }}>
                        <ThumbDown                         color="primary"
                                                           fontSize="inherit" />
                    </IconButton>
                    <Button
                        variant="contained"
                        endIcon={<Refresh />}
                        size="small"
                        color="primary"
                        sx={{ marginTop: '2rem' }}
                    >
                        Regenerate
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default SummaryCard;

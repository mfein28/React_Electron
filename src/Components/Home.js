import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import BasicModal from './Modal';
import TextInputCard from './TextInputCard';
import SummaryCard from './SummaryCard';

function Home() {
    const [quillText, setQuillText] = useState("Some default content");
    const [weekendOutages, setWeekendOutages] = useState(false);
    const [bulletPoints, setBulletPoints] = useState(false);


    function test() {
        console.log(quillText);
    }

    const handleWeekendOutagesChange = (event) => {
        setWeekendOutages(event.target.checked);

    };
    const handleBulletPointsChange = (event) => {
        setBulletPoints(event.target.checked);
    };
    return (
        <>
            <Grid container display="flex" justifyContent="right">
                <BasicModal
                    weekend_outages={weekendOutages}
                    handle_weekend_outages={handleWeekendOutagesChange}
                    bullet_points = {bulletPoints}
                    handle_bullet_points={handleBulletPointsChange}
                />
            </Grid>
            <Grid container display="flex" justifyContent="space-around">
                <TextInputCard quillText={quillText} setQuillText={setQuillText} test={test} />
                <SummaryCard />
            </Grid>
        </>
    );
}

export default Home;

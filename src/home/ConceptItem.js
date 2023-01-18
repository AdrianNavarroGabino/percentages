import { Slider } from "@mui/material";
import React, { useState } from "react";

export const ConceptItem = ({ concept, amount }) => {
    const [percentage, setPercentage] = useState(0);

    return (
        <div className='mt-50 conceptContainer'>
            <span className='conceptSpan'>{concept}</span>
            <Slider className='slider' value={percentage} onChange={event => setPercentage(event.target.value)} aria-label="Default" valueLabelDisplay="auto" max={150} sx={{ width: '300px', marginLeft: '50px' }} />
            <span className='percentageSpan'>{percentage}%</span>
            <span className='amountSpan'>{Math.trunc(percentage / 100 * amount)}</span>
        </div>
    );
}
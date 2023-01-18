import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ConceptItem } from "./ConceptItem";
import './Home.css';

export const Home = () => {
    const [amount, setAmount] = useState('');
    const [concepts, setConcepts] = useState([]);
    const [percentages, setPercentages] = useState({});

    const addConcept = () => {
        const concept = window.prompt('Enter a concept');
        if (!concepts.includes(concept)) {
            setConcepts([...concepts, concept]);
        }
    }

    const sumPercentages = (concept, percentage) => {
        const percentagesAux = { ...percentages };
        percentagesAux[concept] = percentage;
        setPercentages(percentagesAux);
    }

    return (
        <>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Amount"
                    type='number'
                    variant="outlined"
                    className='mt-50'
                    value={amount}
                    onChange={event => setAmount(event.target.value)}
                />
            </div>

            <div>
                <Button
                    variant="contained"
                    className='mt-50'
                    onClick={addConcept}
                >Add concept</Button>
            </div>

            <div>
                {
                    concepts.map(concept => <ConceptItem concept={concept} amount={amount} sumPercentages={sumPercentages} key={concept} />)
                }
            </div>

            <div className="mt-50">
                Total: {Object.values(percentages).reduce((acc, curr) => acc + curr, 0)}%
            </div>
        </>
    );
}
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ConceptItem } from "./ConceptItem";
import './Home.css';

export const Home = () => {
    const [amount, setAmount] = useState('');
    const [concepts, setConcepts] = useState([]);

    const addConcept = () => {
        const concept = window.prompt('Enter a concept');
        if (!concepts.includes(concept)) {
            setConcepts([...concepts, concept]);
        }
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
                    concepts.map(concept => <ConceptItem concept={concept} amount={amount} key={concept} />)
                }
            </div>
        </>
    );
}
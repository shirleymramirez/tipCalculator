import React, { useState } from "react";

export default function TipCalculator() {
    const [bill, setBill] = useState(50);
    const [tip, setTip] = useState(18);
    const [people, setPeople] = useState(1);

    const handleBill = (e) => {
        e.preventDefault();
        setBill(e.target.value);
    }

    const handleTip = (e) => {
        e.preventDefault();
        setTip(e.target.value);
    }

    const handlePeople = (e) => {
        e.preventDefault();
        setPeople(e.target.value);
    }

    const totalTip = ((bill * tip) / 100).toFixed(2);
    const tipPerPerson = (totalTip / people).toFixed(2);

    return (
        <>
            <lable htmlFor="tip">Bill</lable>
            <input 
                id="bill"
                type="number"
                mion="0"
                value={bill}
                onChange={handleBill}
            />

            <lable htmlFor="tip">Tip Percentage</lable>
            <input 
                id="tip"
                type="number"
                mion="0"
                value={tip}
                onChange={handleTip}
            />

            <lable htmlFor="people">No of People</lable>
            <input 
                id="people"
                type="number"
                mion="1"
                value={people}
                onChange={handlePeople}
            />

            <p>Total Tip: {totalTip > 0 ? `$${totalTip}` : '-'}</p>
            <p>Tip per Person: {tipPerPerson > 0 ? `$${tipPerPerson}` : '-'}</p>
        </>
    )
}
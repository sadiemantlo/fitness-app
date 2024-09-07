import React, { useState, useEffect } from "react";

const GoalsTracker = () => {
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [macros, setMacros] = useState('');

    useEffect(() => {
        setCalories(localStorage.getItem('calories' || ''));
        setProtein(localStorage.getItem('protein' || ''));
        setMacros(localStorage.getItem('macros' || ''));
    }, []);

    return (
        <div className="goals-tracker">
            <ul>
                <li>Calories: {calories}</li>
                <li>Protein: {protein}</li>
                <li>Macros: {macros}</li>
            </ul>
        </div>
    )
};

export default GoalsTracker;
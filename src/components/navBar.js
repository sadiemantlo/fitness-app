import React, { useState } from 'react';
import dumbbell from '../images/dumbbell.png';
import Modal from './modal/modal';

const NavBar = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [macros, setMacros] = useState(0);

    return (
        <div className='navBar'>
            <div className='dropdown'>
                <button onClick={openModal} className='dropdown-toggle'>
                    <img src={dumbbell} alt='dumbbell' className='dumbbell'/>
                </button>
                <Modal isOpen={modalOpen} 
                    onClose={closeModal} 
                    calories={calories} 
                    protein={protein} 
                    macros={macros} 
                    setCalories={setCalories}
                    setProtein={setProtein}
                    setMacros={setMacros}
                />
            </div>
            <div className='add-meal-nav'>
                <button className='add-meal-btn'>+</button>
            </div>
        </div>
    )
};

export default NavBar;
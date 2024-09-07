import React from "react";

const Modal = ({ isOpen, onClose, calories, protein, macros, setCalories, setProtein, setMacros }) => {
    if (!isOpen) return null; // Do not render the modal if it is not open

    const saveGoals = () => {
        localStorage.setItem('calories', calories);
        localStorage.setItem('protein', protein);
        localStorage.setItem('macros', macros);
        onClose();
    }
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Enter Your Daily Goals</h2>
          <label htmlFor="calories">Calories</label>
          <input type="number" 
            id="calories"
            placeholder="calories" 
            value={calories} 
            onChange={(e) => setCalories(e.target.value)}
            min={0}
          />
          <label htmlFor="protein">Protein</label>
          <input type="number" 
            id="protein"
            placeholder="protein" 
            value={protein} 
            onChange={(e) => setProtein(e.target.value)} 
            min={0}
          />
          <label htmlFor="macros">Macros</label>
          <input type="number" 
                id="macros"
                placeholder="macros" 
                value={macros} 
                onChange={(e) => setMacros(e.target.value)}
                min={0}
            />
            <button onClick={saveGoals} className="modal-save-btn">Save</button>
          <button onClick={onClose} className="modal-close-btn">x</button>
        </div>
      </div>
    );
  };

export default Modal;
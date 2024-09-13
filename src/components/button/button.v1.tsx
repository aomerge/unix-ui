import React from 'react';
import ReactDOM from 'react-dom';
import './styles/button.css';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <button className='' >
            {label}
        </button>
        );
    }

export default Button;
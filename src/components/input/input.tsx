import React from 'react';
import './input.scss';

interface InputProps {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  return (
    <>
        <input {...props} className='chat-input'/>
    </>
  )
}

export default Input
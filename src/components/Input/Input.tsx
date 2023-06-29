import React from 'react';
import { Grid, TextField, InputAdornment } from '@mui/material';
import './input.sass';

interface Props {
  id: string;
  htmlFor: string;
  placeholder: string;
  size?: string; 
  type?: string;
  icon?: React.ReactNode; // Prop para el icono
}

const Input: React.FC<Props> = ({ id, htmlFor, placeholder, size, type, icon }) => {
  const inputProps = {
    style: { width: size },
  };

  return (
    <Grid item>
      <div className="forms">
        <div className='label_style'>
          <label htmlFor={htmlFor} className='text_label'>{htmlFor}</label>
        </div>
        <div>
          <TextField
            id={id}
            placeholder={placeholder}
            variant="outlined"
            className="texinput"
            type={type}
            inputProps={inputProps}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {icon}
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </Grid>
  );
};

export default Input;

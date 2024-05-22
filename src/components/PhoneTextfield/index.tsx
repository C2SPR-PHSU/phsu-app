import React, { ChangeEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { TextField, SxProps, Theme } from '@mui/material';

interface PhoneTextFieldProps {
    name: string;
    placeholder?: string;
    value: string;
    onValueChange: (name: string, value: string) => void;
    sx?: SxProps<Theme>; // Define la propiedad sx como opcional
}

const PhoneTextField: React.FC<PhoneTextFieldProps> = ({
    name,
    placeholder,
    value,
    onValueChange,
    sx
}) => {
    const [displayValue, setDisplayValue] = useState<string>(value || "(___) ___-____");

    useEffect(() => {
        setDisplayValue(value || "(___) ___-____");
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = event.target.value; // Mantiene el formato (XXX) XXX-XXXX
        setDisplayValue(formattedValue);
        onValueChange(name, cleanPhoneNumber(formattedValue));
    };

    const cleanPhoneNumber = (phoneNumber: string) => {
        // Elimina todo lo que no sea dígitos
        return phoneNumber.replace(/\D/g, '');
    };

    return (
        <InputMask
            mask="(999) 999-9999"
            value={displayValue}
            onChange={handleChange}
            maskChar="_"
        >
            {() => (
                <TextField
                    fullWidth
                    name={name}
                    placeholder={placeholder || "(xxx) xxx-xxxx"}
                    variant="outlined"
                    size="small"
                    sx={sx} // Aplica la propiedad sx pasada como prop
                    value={displayValue}
                    onChange={handleChange}
                />
            )}
        </InputMask>
    );
};

export default PhoneTextField;

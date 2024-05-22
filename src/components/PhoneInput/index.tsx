import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { TextField, SxProps, Theme } from '@mui/material';

// Definición de la prop interface para PhoneInput
interface PhoneInputProps {
    name: string;
    label?: string;
    id?: string;
    variant?: 'outlined' | 'standard' | 'filled';
    placeholder?: string;
    formik: any; // Asume que formik es pasado como prop para acceso directo
    sx?: SxProps<Theme>; // Define la propiedad sx como opcional
    defaultValue?: string; // Nuevo prop para valor por defecto
}

const PhoneInput: React.FC<PhoneInputProps> = ({ name, label, id, variant = 'outlined', placeholder, formik, sx, defaultValue }) => {
    const [displayValue, setDisplayValue] = useState("");

    // Inicializa el input con el formato deseado
    useEffect(() => {
        const initialValue = formik.values[name] || defaultValue || "(___) ___-____";
        setDisplayValue(initialValue);
    }, [formik.values[name], defaultValue]);

    function cleanPhoneNumber(phoneNumber: string) {
        // Elimina todo lo que no sea dígitos
        const onlyNumbers = phoneNumber.replace(/\D/g, '');
        return onlyNumbers;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = event.target.value; // Mantiene el formato (XXX) XXX-XXXX
        setDisplayValue(formattedValue);
        formik.setFieldValue(name, cleanPhoneNumber(formattedValue));
    };

    return (
        <InputMask
            mask="(999) 999-9999"
            value={displayValue}
            onChange={handleChange}
            onBlur={formik.handleBlur} // Correcto manejo de onBlur
            maskChar="_"
        >
            {() => (
                <TextField
                    fullWidth
                    id={id || name}
                    name={name}
                    label={label || ''}
                    placeholder={placeholder || "(xxx) xxx-xxxx"}
                    variant={variant}
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                    helperText={formik.touched[name] && formik.errors[name]}
                    InputLabelProps={{ shrink: true }}
                    sx={sx} // Aplica la propiedad sx pasada como prop
                />
            )}
        </InputMask>
    );
};

export default PhoneInput;

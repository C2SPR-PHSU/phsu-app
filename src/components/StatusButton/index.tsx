import { Button } from '@mui/material';

interface StatusButtonProps {
    statusName: string;
}

const StatusButton = ({ statusName }: StatusButtonProps) => {
    const defaultColor = "#939393";
    const approvedColor = "#6abe53";

    const buttonColor = statusName === "Approved" ? approvedColor : defaultColor;
    const hoverColor = statusName === "Approved" ? approvedColor : defaultColor;

    return (
        <Button
            variant="outlined"
            sx={{
                width: '100% !important',
                fontSize: '0.8rem !important',
                maxHeight:'2.5rem',
                maxWidth:'8rem',
                color: buttonColor,
                borderColor: buttonColor,
                "&:hover": {
                    borderColor: hoverColor
                }
            }}
        >
            {statusName}
        </Button>
    );
};

export default StatusButton;

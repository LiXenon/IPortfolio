import React from "react"
import { Card, Typography } from "@mui/material";
import InputInfo from "./info/InputInfo";

interface InfoMenuProps {
    id: number,
    currentPage: any,
    setCurrentPage: (value: any) => void;
}
const InfoMenu: React.FC<InfoMenuProps> = ({id, currentPage, setCurrentPage}) => {

    // Create a element in the paper
    // eleType: The type of the element. e.g., input
    const createElement = (eleType: string) => {
        const newPage = [...currentPage, { id: Date.now(), type: eleType }]; // Use the time stamp to set the id of the element
        setCurrentPage?.(newPage);
    }
    return (
    <Card sx={{padding: '2px'}}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Element Info
        </Typography>
        <InputInfo id={id} currentPage={currentPage} setCurrentPage={(v)=>{setCurrentPage?.(v)}} />
    </Card>
    )
}

export default InfoMenu
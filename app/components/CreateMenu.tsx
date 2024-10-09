import React from "react"
import { Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InputIcon from '@mui/icons-material/Input';
import ImageIcon from '@mui/icons-material/Image';

interface CreateMenuProps {
    currentPage: any,
    setCurrentPage: (value: any) => void;
}
const CreateMenu: React.FC<CreateMenuProps> = ({currentPage, setCurrentPage}) => {

    // Create a element in the paper
    // eleType: The type of the element. e.g., input
    const createElement = (eleType: string) => {
        const newPage = [...currentPage, { id: Date.now(), type: eleType }]; // Use the time stamp to set the id of the element
        setCurrentPage?.(newPage);
    }
    return (
    <Card sx={{padding: '2px'}}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Iportfolio Elements
        </Typography>
        <List sx={{ height: "500px", overflow: "auto"}}>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>{createElement("input")}}>
                    <ListItemIcon>
                    <InputIcon />
                    </ListItemIcon>
                    <ListItemText primary="Input" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>{createElement("img")}}>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Img" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItemButton>
            </ListItem>
        </List>
    </Card>
    )
}

export default CreateMenu
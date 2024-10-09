import React, { useEffect, useState } from "react"
import { Input, List, ListItem, ListItemIcon, ListItemText, Switch } from "@mui/material";
import Divider from '@mui/material/Divider';
import InputIcon from '@mui/icons-material/Input';
import ImageIcon from '@mui/icons-material/Image';

interface InputInfoProps {
    id: number,
    currentPage: any,
    setCurrentPage: (value: any) => void;
}

type horizontalDirectionType = "left" | "center" | "right";
type verticalDirectionType = "top" | "center" | "bottom";

const InputInfo: React.FC<InputInfoProps> = ({id, currentPage, setCurrentPage}) => {
    const eleType = currentPage?.find?.((ele: any)=>{
     return ele?.id == id})?.type || '';
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [width, setWidth] = useState<number>(56);
    const [height, setHeight] = useState<number>(188);
    const [fontSize, setFontSize] = useState<number>(0);
    const [color, setColor] = useState<string>('');
    const [fontWeight, setFontWeight] = useState<number>(0);
    const [underline, setUnderline] = useState<boolean>(false);
    const [fontHorizontalDirection, setFontHorizontalDirection] = useState<horizontalDirectionType>("center");
    const [fontVerticalDirection, setFontVerticalDirection] = useState<verticalDirectionType>("center");

    useEffect(()=>{      
        currentPage?.forEach?.((ele: any)=>{
            if (ele?.id == id) {
                ele.props = {x, y, inputProps: {
                    width: `${width}px`, 
                    height: `${height}px`, 
                    fontSize: `${fontSize}px`, 
                    color: color, 
                    fontWeight, 
                    textDecoration: underline ? "underline" : "none",
                }}
            }
        });
        setCurrentPage([...currentPage]);
    }, [x, y, width, height, fontSize, color, fontWeight, underline, fontHorizontalDirection, fontVerticalDirection])

    useEffect(()=>{
        currentPage?.forEach?.((ele: any)=>{
            if (ele?.id == id) {
                setX(ele.props.x);
                setY(ele.props.y);
            }})
    }, [currentPage]);
    return (
        <List sx={{ height: "500px", overflow: "auto"}}>
            <ListItem disablePadding>
                <ListItemText primary={eleType} />
            </ListItem>
            <ListItem disablePadding>
                <ListItemText primary="Position" />
            </ListItem>
            <ListItem disablePadding>
                <div className="w-full flex h-[100px] flex-col">
                    <div className="flex justify-around">
                        x <Input sx={{width: '50px'}} value={x} onChange={(event)=>{setX?.(parseInt(event.target.value) || 0)}}/>
                        y <Input sx={{width: '50px'}} value={y} onChange={(event)=>{setY?.(parseInt(event.target.value) || 0)}}/>
                    </div>
                    <div className="flex justify-around">
                        width <Input sx={{width: '50px'}} value={width} onChange={(event)=>{setWidth?.(parseInt(event.target.value))}}/>
                        height <Input sx={{width: '50px'}} value={height} onChange={(event)=>{setHeight?.(parseInt(event.target.value))}}/>
                    </div>
                </div>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemText primary="Typography" />
            </ListItem>
            <ListItem disablePadding>
                <div className="w-full flex h-[100px] flex-col">
                    <div className="flex justify-around">
                        font size <Input sx={{width: '20px'}} value={fontSize} onChange={(event)=>{setFontSize?.(parseInt(event.target.value))}}/>
                        font color <Input sx={{width: '20px'}} value={color} onChange={(event)=>{setColor?.(event.target.value)}}/>                    
                    </div>
                    <div className="flex justify-around">
                        font weight <Input sx={{width: '20px'}} value={fontWeight} onChange={(event)=>{setFontWeight?.(parseInt(event.target.value))}}/>                    
                        underline <Switch value={underline} onChange={(event)=>{setUnderline?.(event.target.checked)}}/>
                    </div>                                            
                </div>
            </ListItem>
        </List>
    )
}

export default InputInfo
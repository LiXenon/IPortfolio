import React, { useEffect, useState } from "react"
import { Input, List, ListItem, ListItemText, Switch } from "@mui/material";
import Divider from '@mui/material/Divider';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import { InfoProps } from "../interface/Info";
import { useContext } from "react";
type horizontalDirectionType = "left" | "center" | "right";

const InputInfo: React.FC<InfoProps> = ({ id, currentPage, setCurrentPage }) => {
  const eleType = currentPage?.find?.((ele: any) => {
    return ele?.id == id})?.type || '';
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [width, setWidth] = useState<number>(188);
  const [height, setHeight] = useState<number>(56);
  const [fontSize, setFontSize] = useState<number>(16);
  const [color, setColor] = useState<string>('black');
  const [fontWeight, setFontWeight] = useState<number>(0);
  const [underline, setUnderline] = useState<boolean>(false);
  const [fontHorizontalDirection, setFontHorizontalDirection] = useState<horizontalDirectionType>("left");
  const [mounted, setMounted] = useState<boolean>(false);
  const handleUpdateData = () => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        ele.x = x;
        ele.y = y;
        ele.style = {
          width: `${width}px`,
          height: `${height}px`,
          fontSize: `${fontSize}px`,
          color: color,
          fontWeight: fontWeight,
          textDecoration: underline ? "underline" : "none",
          textAlign: fontHorizontalDirection,
        }
      }
    });
    // Deep copy
    setCurrentPage([...currentPage]);
  }

  useEffect(() => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        setX(ele?.x || 0);
        setY(ele?.y || 0);
        setWidth(parseFloat(ele?.style?.width) || 188);
        setHeight(parseFloat(ele?.style?.height) || 56);
        setFontSize(parseFloat(ele?.style?.fontSize) || 16);
        setColor(ele?.style?.color || 'black');
        setFontWeight(ele?.style?.fontWeight || 0);
        setUnderline(ele?.style?.underline || false);
        setFontHorizontalDirection(ele?.style?.fontHorizontalDirection || 'left');
      }})
  }, [id]);

  useEffect(() => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        setX(ele?.x || 0);
        setY(ele?.y || 0);
      }})
  }, [currentPage]);

  useEffect(() => {
    // Prevent from first mount of state change the real data with state's initial data
    if (mounted) {
      handleUpdateData();
    } else {
      setMounted(true);
    }
  }, [underline, fontHorizontalDirection])

  return (
    <List sx={{ height: "500px", overflow: "auto" }}>
      <ListItem disablePadding>
        <ListItemText primary={eleType} />
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="Position" />
      </ListItem>
      <ListItem disablePadding>
        <div className="w-full flex h-[100px] flex-col">
          <div className="flex justify-around">
            x <Input
              sx={{ width: '50px' }}
              value={x}
              onChange={(event) => {setX?.(parseInt(event.target.value) || 0)}}
              onBlur={handleUpdateData}
            />
            y <Input
              sx={{ width: '50px' }}
              value={y}
              onChange={(event) => {setY?.(parseInt(event.target.value) || 0)}}
              onBlur={handleUpdateData}
            />
          </div>
          <div className="flex justify-around">
            width <Input
              sx={{ width: '50px' }}
              value={width}
              onChange={(event) => {setWidth?.(parseInt(event.target.value) || 0)}}
              onBlur={handleUpdateData}
            />
            height <Input
              sx={{ width: '50px' }}
              value={height}
              onChange={(event) => {setHeight?.(parseInt(event.target.value) || 0)}}
              onBlur={handleUpdateData}
            />
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
            font size <Input
              sx={{ width: '20px' }}
              value={fontSize}
              onChange={(event) => {setFontSize?.(parseInt(event.target.value) || 0)}}
              onBlur={handleUpdateData}
            />
            font color <Input
              sx={{ width: '20px' }}
              value={color}
              onChange={(event) => {setColor?.(event.target.value || '')}}
              onBlur={handleUpdateData}
            />
          </div>
          <div className="flex justify-around">
            font weight <Input
              sx={{ width: '20px' }}
              value={fontWeight}
              onChange={(event) => {setFontWeight?.(parseInt(event.target.value) || 0)}}
              onBlur={handleUpdateData}
            />
            underline <Switch
              value={underline}
              onChange={(event) => {
                setUnderline?.(event.target.checked);
              }}
            />
            horizontal direction
            <div className="flex">
              <FormatAlignLeftIcon
                className={`${fontHorizontalDirection == 'left' ? "bg-slate-300" : "bg-white"}`}
                onClick={() => setFontHorizontalDirection("left")}/>
              <FormatAlignCenterIcon
                className={`${fontHorizontalDirection == 'center' ? "bg-slate-300" : "bg-white"}`}
                onClick={() => setFontHorizontalDirection("center")}/>
              <FormatAlignRightIcon
                className={`${fontHorizontalDirection == 'right' ? "bg-slate-300" : "bg-white"}`}
                onClick={() => setFontHorizontalDirection("right")}/>
            </div>
          </div>
        </div>
      </ListItem>
    </List>
  )
}

export default InputInfo
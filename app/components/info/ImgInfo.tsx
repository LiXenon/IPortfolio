import React, { useEffect, useState } from "react"
import { Input, List, ListItem, ListItemText } from "@mui/material";
import Divider from '@mui/material/Divider';
import { InfoProps } from "../interface/Info";

const ImgInfo: React.FC<InfoProps> = ({ id, currentPage, setCurrentPage }) => {
  const eleType = currentPage?.find?.((ele: any) => {
    return ele?.id == id})?.type || '';
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);
  const [src, setSrc] = useState<string>('');

  const handleUpdateData = () => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        ele.x = x;
        ele.y = y;
        ele.src = src;
        ele.style = {
          width: `${width}px`,
          height: `${height}px`,
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
      }})
  }, [currentPage]);

  useEffect(() => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        setX(ele?.x || 0);
        setY(ele?.y || 0);
        setSrc(ele?.src || '');
        setWidth(parseFloat(ele?.style?.width) || 200);
        setHeight(parseFloat(ele?.style?.height) || 200);
      }})
  }, [id]);

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
        <ListItemText primary="Source" />
      </ListItem>
      <ListItem disablePadding>
        <div className="w-full flex h-[100px] flex-col">
          <div className="flex justify-around">
            src <Input
              sx={{ width: '20px' }}
              value={src}
              onChange={(event) => {setSrc?.(event.target.value || '')}}
              onBlur={handleUpdateData}
            />
          </div>
        </div>
      </ListItem>
    </List>
  )
}

export default ImgInfo
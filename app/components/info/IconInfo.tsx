import React, { useEffect, useState } from "react"
import { Input, List, ListItem, ListItemText, Select, MenuItem } from "@mui/material";
import Divider from '@mui/material/Divider';
import { InfoProps } from "../interface/Info";

type IconType =
    "facebook"
    | "instagram"
    | "linkedin"
    | "gitHub"
    | "x"
    | string
const IconInfo: React.FC<InfoProps> = ({ id, currentPage, setCurrentPage }) => {
  const eleType = currentPage?.find?.((ele: any) => {
    return ele?.id == id})?.type || '';
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [value, setValue] = useState<IconType>('facebook');
  const [color, setColor] = useState<string>('black');
  const [size, setSize] = useState<number>(24);
  const [link, setLink] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);

  const handleUpdateData = () => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        ele.x = x;
        ele.y = y;
        ele.value = value;
        ele.color = color;
        ele.size = size + 'px';
        ele.link = link;
      }
    });

    // Deep copy
    setCurrentPage([...currentPage]);
  }

  useEffect(() => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        ele.x = ele?.x || x;
        ele.y = ele?.y || y;
        ele.value = ele?.value || value;
        ele.color = ele?.color || color;
        ele.size = ele?.size || size;
        ele.link = ele?.link || link;
      }
    });
    // Deep copy
    setCurrentPage([...currentPage]);
  }, []);

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
        setLink(ele?.link || '');
        setValue(ele?.value || 'facebook');
        setColor(ele?.color || 'black');
        setSize(parseInt(ele?.size) || 24);
      }})
  }, [id]);

  useEffect(() => {
    // Prevent from first mount of state change the real data with state's initial data
    if (mounted) {
      handleUpdateData();
    } else {
      setMounted(true);
    }
  }, [value])

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
        </div>
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="Value" />
      </ListItem>
      <ListItem disablePadding>
        <div className="w-full flex h-[100px] flex-col">
          <div className="flex justify-around">
            Icon Type <Select
              value={value}
              label="IconType"
              onChange={(e) => {setValue(e.target.value)}}
            >
              <MenuItem value={'facebook'}>Facebook</MenuItem>
              <MenuItem value={'instagram'}>Instagram</MenuItem>
              <MenuItem value={'linkedin'}>Linkedin</MenuItem>
              <MenuItem value={'gitHub'}>GitHub</MenuItem>
              <MenuItem value={'x'}>X</MenuItem>
            </Select>
          </div>
        </div>
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="Style" />
      </ListItem>
      <ListItem disablePadding>
        <div className="w-full flex h-[100px] flex-col">
          <div className="flex justify-around">
            color <Input
              sx={{ width: '50px' }}
              value={color}
              onChange={(event) => {setColor?.(event.target.value || 'black') }}
              onBlur={handleUpdateData}
            />
          </div>
        </div>
      </ListItem>
      <ListItem disablePadding>
        <div className="w-full flex h-[100px] flex-col">
          <div className="flex justify-around">
          size <Input
              sx={{ width: '50px' }}
              value={size}
              onChange={(event) => {setSize?.(parseInt(event.target.value) || 24) }}
              onBlur={handleUpdateData}
            />
          </div>
        </div>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemText primary="link" />
      </ListItem>
      <ListItem disablePadding>
        <div className="w-full flex h-[100px] flex-col">
          <div className="flex justify-around">
            link <Input
              sx={{ width: '20px' }}
              value={link}
              onChange={(event) => {setLink?.(event.target.value || '')}}
              onBlur={handleUpdateData}
            />
          </div>
        </div>
      </ListItem>
    </List>
  )
}

export default IconInfo
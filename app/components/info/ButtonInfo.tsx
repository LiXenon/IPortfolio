import React, { useEffect, useState } from "react"
import { Input, List, ListItem, ListItemText, Select, MenuItem } from "@mui/material";
import Divider from '@mui/material/Divider';
import { InfoProps } from "../interface/Info";

type buttonColor =
'inherit'
| 'primary'
| 'secondary'
| 'success'
| 'error'
| 'info'
| 'warning'
| string;

type buttonSize =
'small'
| 'medium'
| 'large'
| string;

type buttonVariant =
'contained'
| 'outlined'
| 'text'
| string;

const ButtonInfo: React.FC<InfoProps> = ({ id, currentPage, setCurrentPage }) => {
  const eleType = currentPage?.find?.((ele: any) => {
    return ele?.id == id})?.type || '';
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [value, setValue] = useState<string>('Button');
  const [color, setColor] = useState<buttonColor>('primary');
  const [size, setSize] = useState<buttonSize>('medium');
  const [variant, setVariant] = useState<buttonVariant>('text');
  const [link, setLink] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);

  const handleUpdateData = () => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        ele.x = x;
        ele.y = y;
        ele.value = value;
        ele.color = color;
        ele.size = size;
        ele.variant = variant;
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
        ele.variant = ele?.variant || variant;
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
        setValue(ele?.value || 'Button');
        setColor(ele?.color || 'primary');
        setSize(ele?.size || 'medium');
        setVariant(ele?.variant || 'contained');
      }})
  }, [id]);

  useEffect(() => {
    // Prevent from first mount of state change the real data with state's initial data
    if (mounted) {
      handleUpdateData();
    } else {
      setMounted(true);
    }
  }, [color, size, variant])

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
            value <Input
              sx={{ width: '50px' }}
              value={value}
              onChange={(event) => {setValue?.(event.target.value || '')}}
              onBlur={handleUpdateData}
            />
          </div>
        </div>
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="Style" />
      </ListItem>
      <ListItem disablePadding>
        <div className="w-full flex h-[100px] flex-col">
          <div className="flex justify-around">
            color <Select
              value={color}
              label="color"
              onChange={(e) => {setColor(e.target.value)}}
            >
              <MenuItem value={'primary'}>primary</MenuItem>
              <MenuItem value={'secondary'}>secondary</MenuItem>
              <MenuItem value={'success'}>success</MenuItem>
              <MenuItem value={'error'}>error</MenuItem>
              <MenuItem value={'info'}>info</MenuItem>
              <MenuItem value={'warning'}>warning</MenuItem>
            </Select>
          </div>
        </div>
      </ListItem>
      <ListItem disablePadding>
        <div className="w-full flex h-[100px] flex-col">
          <div className="flex justify-around">
            size <Select
              value={size}
              label="size"
              onChange={(e) => {setSize(e.target.value)}}
            >
              <MenuItem value={'small'}>small</MenuItem>
              <MenuItem value={'medium'}>medium</MenuItem>
              <MenuItem value={'large'}>large</MenuItem>
            </Select>
          </div>
        </div>
      </ListItem>
      <ListItem disablePadding>
        <div className="w-full flex h-[100px] flex-col">
          <div className="flex justify-around">
          variant <Select
              value={variant}
              label="variant"
              onChange={(e) => {setVariant(e.target.value)}}
            >
              <MenuItem value={'contained'}>contained</MenuItem>
              <MenuItem value={'outlined'}>outlined</MenuItem>
              <MenuItem value={'text'}>text</MenuItem>
            </Select>
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

export default ButtonInfo
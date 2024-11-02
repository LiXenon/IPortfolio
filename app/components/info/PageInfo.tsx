import React, { useEffect, useState } from "react"
import { List, ListItem, ListItemText, InputAdornment, TextField } from "@mui/material";
import Divider from '@mui/material/Divider';
import { InfoProps } from "../interface/Info";
import { TwitterPicker } from 'react-color';

const PageInfo: React.FC<InfoProps> = ({
  currentPage,
  setCurrentPage

}) => {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = useState<number>(1000);
  const [currentHeight, setCurrentHeight] = useState<number>(2000);
  const [currentBackgroundColor, setCurrentBackgroudColor] = useState<string>('#ffffff');
  const [mounted, setMounted] = useState<boolean>(false);
  // If click outside, close color picker
  const handleClickOutside = () => {
    setShowColorPicker(false);
  };
  console.log(currentWidth);

  const handleUpdateData = () => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.type == 'page') {
        console.log(1, currentWidth);
        ele.style = {
          width: currentWidth,
          height: currentHeight,
          backgroundColor: currentBackgroundColor
        }
      }
    });
    console.log(2, currentPage[0].style.width);
    // Deep copy
    setCurrentPage([...currentPage]);
  }

  useEffect(() => {
    document.body.addEventListener('click', () => handleClickOutside());

    currentPage?.forEach?.((ele) => {
      if (ele?.type == 'page') {
        setCurrentWidth(ele?.style?.width || 1000);
        setCurrentHeight(ele?.style?.height || 2000);
        setCurrentBackgroudColor(ele?.style?.backgroundColor || '#ffffff');
      }
    })

    return () => {
      document.body.removeEventListener('click', () => handleClickOutside());
    }
  }, [])

  useEffect(() => {
    // Prevent from first mount of state change the real data with state's initial data
    if (mounted) {
      handleUpdateData();
    } else {
      setMounted(true);
    }
  }, [currentBackgroundColor])
  return (
    <List sx={{ height: "500px", overflow: "auto" }}>
      <ListItem>
        <ListItemText className="pl-[15%]" primary="Position" />
      </ListItem>
      <ListItem className="px-[20%]">
        <div className="w-full flex flex-col">
          <div className="flex">
            <TextField
              size='small'
              variant="standard"
              label='Width'
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">px</InputAdornment>,
                },
              }}
              value={currentWidth}
              onChange={(event) => {setCurrentWidth?.(parseInt(event.target.value))}}
              onBlur={handleUpdateData}
            />
          </div>
        </div>
      </ListItem>
      <ListItem className="px-[20%]">
        <TextField
          size='small'
          variant="standard"
          label='Height'
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">px</InputAdornment>,
            },
          }}
          value={currentHeight}
          onChange={(event) => {setCurrentHeight?.(parseInt(event.target.value))}}
          onBlur={handleUpdateData}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText className="pl-[15%]" primary="Style" />
      </ListItem>
      <ListItem className="px-[20%] flex">
        <div
          className="h-4 w-4 absolute left-6 bottom-4"
          style={{ backgroundColor: `${currentBackgroundColor || '#ffffff'}` }}>
        </div>
        <div
          onClick={(event) => {
            setShowColorPicker?.(true);
            event.stopPropagation();
          }}
        >
          <TextField
            size='small'
            variant="standard"
            label='Color'
            value={currentBackgroundColor}
          />
          <div className={`${showColorPicker ? "block" : "hidden"} absolute mt-4`}>
            <TwitterPicker
              width='150px'
              color={currentBackgroundColor}
              onChange={(color) => {
                setCurrentBackgroudColor?.(color.hex || '#ffffff')
              }}

            />
          </div>
        </div>
      </ListItem>
123
    </List>
  )
}

export default PageInfo
"use client"
import React, {useState} from 'react';
import Draggable from 'react-draggable';
import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material';
interface DraggableInputProps {
  id: number,
  x?: number,
  y?: number,
  inputProps: TextFieldProps,
  handlePositionChange: (x: number, y: number, id: number) => void;
}

const DraggableInput: React.FC<DraggableInputProps> = ({
  id,
  x,
  y,
  inputProps,
  handlePositionChange,
  ...props
}) => {
  const [currentX, setCurrentX] = useState<number>(x || 350);
  const [currentY, setCurrentY] = useState<number>(y || 225);
  return (
    <Draggable
      axis="both" // Restrict dragging to both axes (default)
      bounds="parent" // Prevent dragging outside of parent container
      defaultPosition={{x:0, y:0}}
      position={{x: x, y: y-183}}
      // grid={[25, 25]} // Snap to 25px increments
      onStop={(event, data)=>{
        console.log(event.pageX, event.pageY, data);
        
        handlePositionChange(event.pageX-567+94, event.pageY-195+28, id)
      }}
    >
      <div className='inline-block border-2 border-none click:border-dash'>
        <TextField 
          multiline
          placeholder="Input some text"
          slotProps={{htmlInput: {...inputProps || {}}}}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none', // Removes the outer border
          }},
          style:{fontSize: '100px'}
          
          }}
        />
      </div>
    </Draggable>
  );
};

export default DraggableInput;

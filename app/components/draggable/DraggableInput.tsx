"use client"
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { TextField } from '@mui/material';
import { draggableProps } from '../interface/draggable.d';
import { DraggableContext } from '@/app/context/DraggableProvider';
import { useContext } from 'react';
const DraggableInput: React.FC<draggableProps> = ({
  id,
  x,
  y,
  style,
  value,
  setValue,
  setFocusedElementId,
  handlePositionChange,
}) => {
  const { editing } = useContext(DraggableContext);
  const [currentValue, setCurrentValue] = useState<string>(value || '');

  return (
    <Draggable
      axis="both" // Restrict dragging to both axes (default)
      bounds="parent" // Prevent dragging outside of parent container
      position={{ x: x || 0, y: y || 0 }}
      // grid={[25, 25]} // Snap to 25px increments
      onStop={(event, data) => {
        handlePositionChange(data.lastX, data.lastY, id)
      }}
    >
      <TextField
        className='absolute left-0 top-0'
        value={currentValue}
        multiline
        placeholder="Input some text"
        onClick={() => {setFocusedElementId(id)}}
        onChange={(e) => {
          // If it is displaying but not editing, make it read only
          if (!editing) return;

          const v = e.target.value;
          setValue(v);
          setCurrentValue(v);
        }}
        onFocus={(e) => {
          // If it is displaying but not editing, make it read only
          if (!editing) {
            e.target.blur();
          }
        }}
        slotProps={{ htmlInput: { style: style } }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', // Removes the outer border
            } },
        }}
      />
    </Draggable>
  );
};

export default DraggableInput;

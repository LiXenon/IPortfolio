"use client"
import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { draggableProps } from '../interface/Draggable.d';
import { DraggableContext } from '@/app/context/DraggableProvider';

const DraggableImg: React.FC<draggableProps> = ({
  id,
  x,
  y,
  style,
  src,
  setFocusedElementId,
  handlePositionChange,
}) => {
  const { editing, currentFocusedElementId } = useContext(DraggableContext);
  const focused: boolean = currentFocusedElementId == id && editing;
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
      <img src={src || 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'}
        className={`absolute left-0 top-0 ${focused ? 'border-dashed border-2 border-blue-500' : ''}`}
        style={{ width: '200px', height: '200px', ...style }}
        onClick={() => {
          setFocusedElementId(id);
        }}
        onError={(e) => {
          e.target.src = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
        }}
      />
    </Draggable>
  );
};

export default DraggableImg;

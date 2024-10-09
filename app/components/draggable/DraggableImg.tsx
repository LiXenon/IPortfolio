"use client"
import React from 'react';
import Draggable from 'react-draggable';
import { ImgProps } from "next/dist/shared/lib/get-img-props";
interface DraggableImgProps {
  x?: number,
  y?: number,
  imgProps: ImgProps
}

const DraggableImg: React.FC<DraggableImgProps> = ({
  x,
  y,
  imgProps,
  ...props
}) => {
  return (
    <Draggable
      axis="both" // Restrict dragging to both axes (default)
      bounds="parent" // Prevent dragging outside of parent container
      defaultPosition={{ x: x || 350, y: y || 225 }} // Set initial position
      grid={[25, 25]} // Snap to 25px increments
    >
      <div className='inline-block border-2 border-none click:border-dash'>
        <img src="https://i.pinimg.com/474x/d2/4b/be/d24bbe79387549086d159aa4462bf4c9.jpg"
            style={{width: "100px", height: "100px"}}
            {...imgProps || {}}/>
      </div>
    </Draggable>
  );
};

export default DraggableImg;

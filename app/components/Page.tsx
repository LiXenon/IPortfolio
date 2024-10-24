"use client"
import React from "react";
import DraggableInput from "./draggable/DraggableInput";
import DraggableImg from "./draggable/DraggableImg";
import { DraggableProvider } from "../context/DraggableProvider"
interface PageProps {
    config: any,
    setCurrentPage: (value: any) => void;
    setFocusedElementId: (id: number) => void;
}

const Page: React.FC<PageProps> = ({ config, setCurrentPage, setFocusedElementId }) => {
  const currentPage = config || [];
  const typeToElementMap: object = {
    input: DraggableInput,
    img: DraggableImg
  }
  const handlePositionChange = (x: number, y: number, id: number) => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        ele.x = x;
        ele.y = y;
      }
    });
    setCurrentPage([...currentPage]);
  }

  const handleValueChange = (val: string, id: number) => {
    currentPage?.forEach?.((ele: any) => {
      if (ele?.id == id) {
        ele.value = val;
      }
    });
    setCurrentPage([...currentPage]);
  }

  return (
    <DraggableProvider>
      <>
        {currentPage?.map?.((ele: any) => {
          const Component = typeToElementMap?.[ele?.type];
          return <Component
            key={ele?.id}
            id={ele?.id}
            value={ele?.value}
            setValue={(v: string, id: number) => {handleValueChange?.(v, id)}}
            x={ele?.x}
            y={ele?.y}
            handlePositionChange={(x: number, y: number, id: number) => {handlePositionChange?.(x, y, id)}}
            style={ele?.style}
            src={ele?.src}
            link={ele?.link}
            setFocusedElementId={(id: number) => {setFocusedElementId(id)}}
          />
        })}
      </>
    </DraggableProvider>
  )
}
export default Page
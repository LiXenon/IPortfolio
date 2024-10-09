"use client"
import React from "react";
import DraggableInput from "./draggable/DraggableInput";
import DraggableImg from "./draggable/DraggableImg";

interface PageProps {
    config: any,
    setCurrentPage: (value: any) => void;
}

const Page: React.FC<PageProps> = ({config, setCurrentPage}) => {
    const currentPage = config || [];
    const typeToElementMap: any = {
        input: DraggableInput,
        img: DraggableImg
    }
    const handlePositionChange = (x: number, y: number, id: number) => {
        currentPage?.forEach?.((ele: any)=>{
            if (ele?.id == id) {
                ele.props = {x, y}
            }
        });
        setCurrentPage([...currentPage]);
    }
    
    return (
        <>
            {currentPage?.map?.((ele: any)=>{
                const Component = typeToElementMap?.[ele?.type];

                return <Component id={ele?.id} handlePositionChange={(x, y, id)=>{handlePositionChange?.(x, y, id)}} {...ele?.props || {}}/>
            })}
        </>
    )
}
export default Page
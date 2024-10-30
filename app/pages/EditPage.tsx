"use client"
import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import CreateMenu from "../components/CreateMenu";
import InfoMenu from "../components/InfoMenu";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";
import { draggableProps } from "../components/interface/draggable.d";

const EditPage = () => {
  const [currentPage, setCurrentPage] = useState<draggableProps[]>([
    { id: 1, type: "input", x: 0, y: 0, value: "This is an input", style: { width: "188px", height: "56px", color: "red" } },
    { id: 2, type: "img", x: 200, y: 0, src: "https://i.pinimg.com/474x/d2/4b/be/d24bbe79387549086d159aa4462bf4c9.jpg", style: { width: "200px", height: "200px" } },
    { id: 3, type: "button", x: 300, y: 300, value: 'This is a button', color: 'primary', size: 'large', variant: 'outlined' }
  ]);
  const [focusedElementId, setFocusedElementId] = useState<number>();
  console.log(currentPage);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="fixed left-2 top-1/2 transform -translate-y-1/2">
        <CreateMenu
          currentPage={currentPage}
          setCurrentPage={(v) => {setCurrentPage?.(v)}}
          setFocusedElementId={(id) => {setFocusedElementId(id)}} />
      </div>

      <div className="fixed right-2 top-1/2 transform -translate-y-1/2">
        <InfoMenu id={focusedElementId}
          currentPage={currentPage}
          setCurrentPage={(v) => {setCurrentPage?.(v)}}/>
      </div>

      <div className="w-[951px] h-[535px] bg-white relative">
        <Page config={currentPage}
          setCurrentPage={(value: any) => {setCurrentPage?.(value)}}
          setFocusedElementId={(id: number) => setFocusedElementId(id)}/>
      </div>

      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center">
        <ArrowBackIosNewIcon className="text-4xl mr-8"/>
        <ArrowForwardIosIcon className="text-4xl"/>
      </div>

      <div className="fixed bottom-16 right-16 flex justify-center">
        <Button>Save</Button>
      </div>
    </div>
  )
}

export default EditPage
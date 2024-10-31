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
    { id: 3, type: "button", x: 300, y: 300, value: 'This is a button', color: 'primary', size: 'large', variant: 'outlined' },
    { id: 4, type: "icon", x: 400, y: 350, value: 'x', color: 'gray', size: '32' },
    { id: 5, type: "masonry", x: 0, y: 0, srcList: [
      'https://images.unsplash.com/photo-1549388604-817d15aa0110?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1530731141654-5993c3016c77?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=248&fit=crop&auto=format&dpr=2',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=248&fit=crop&auto=format&dpr=2'
    ], style: { width: 300, height: 300 }, cols: 5, gap: 10 },
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
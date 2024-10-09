"use client"
import React, { useState } from "react";
import Page from "../components/Page";
import CreateMenu from "../components/CreateMenu";
import InfoMenu from "../components/InfoMenu";

const EditPage = () => {
    const [currentPage, setCurrentPage] = useState([{id: 1, type: "input", props: {x:0,y:0}}, {id: 2, type: "img", props: {x:0,y:0,imgProps: {style: {width: "200px", height: "200px"}}}}]);
    console.log(currentPage[0].props);
    return (                
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="fixed left-2 top-1/2 transform -translate-y-1/2">
                <CreateMenu currentPage={currentPage} setCurrentPage={(v)=>{setCurrentPage?.(v)}}/>
            </div>

            <div className="fixed right-2 top-1/2 transform -translate-y-1/2">
                <InfoMenu id={1} currentPage={currentPage} setCurrentPage={(v)=>{setCurrentPage?.(v)}}/>
            </div>

            <div className="w-[951px] h-[535px] bg-white relative">
                <Page config={currentPage} setCurrentPage={(value: any)=>{setCurrentPage?.(value)}}/>
            </div>
        </div>
    )
}

export default EditPage
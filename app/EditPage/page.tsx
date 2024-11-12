"use client"
import React from "react";
import EditPage from "./EditPage";
import '../globals.css';
import { DraggableProvider } from "../context/DraggableProvider";
const EditPageWrapper = () => {
  return <div className="w-screen h-screen">
    <DraggableProvider>
      <EditPage />
    </DraggableProvider>
  </div>
}

export default EditPageWrapper
"use client"
import EditPage from "./pages/EditPage";
import './globals.css';
import { DraggableProvider } from "./context/DraggableProvider";
export default function Home () {
  return (
    <>
      <DraggableProvider>
        <EditPage />
      </DraggableProvider>
    </>
  );
}

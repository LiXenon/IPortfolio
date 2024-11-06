"use client"
import React, { useContext, useEffect, useState } from "react";
import Page from "../components/Page";
import CreateMenu from "../components/CreateMenu";
import InfoMenu from "../components/InfoMenu";
import { draggableProps } from "../components/interface/draggable.d";
import ConfirmDialog from "../components/ConfirmDialog";
import { DraggableContext } from "../context/DraggableProvider";

const EditPage = () => {
  const [currentPage, setCurrentPage] = useState<draggableProps[]>([
    { id: 0, type: 'page', style: { width: 1000, height: 2000, backgroundColor: '#ffffff' } },
    { id: 1, type: "input", x: 0, y: 0, value: "This is an input", style: { width: "188px", height: "56px", color: "red" } },
    { id: 2, type: "img", x: 200, y: 0, src: "https://i.pinimg.com/474x/d2/4b/be/d24bbe79387549086d159aa4462bf4c9.jpg", style: { width: "200px", height: "200px" } },
    { id: 3, type: "button", x: 300, y: 300, value: 'This is a button', color: 'primary', size: 'large', variant: 'outlined' },
    { id: 4, type: "icon", x: 400, y: 350, value: 'x', color: 'gray', size: '32' },
    { id: 5, type: "masonry", x: 150, y: 700, srcList: [
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
    ], style: { width: 800, height: 600 }, cols: 3, gap: 10 },
  ]);
  const [focusedElementId, setFocusedElementId] = useState<number>();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteAllOpen, setDeleteAllOpen] = useState(false);
  const { setCurrentFocusedElementId } = useContext(DraggableContext);
  console.log(currentPage);

  const deleteElement = () => {
    if (!focusedElementId) {
      return;
    };
    setDeleteOpen(true);
  }

  const deleteAllElements = () => {
    setDeleteAllOpen(true);
  }

  const copyElement = () => {
    if (focusedElementId) {
      currentPage?.forEach?.((ele) => {
        if (ele?.id == focusedElementId && ele?.type != 'page') {
          const newEle = { ...ele, id: Date.now(), x: 0, y: 0 };
          currentPage.push(newEle);
        }
      })
    }
    setCurrentPage([...currentPage]);
  }

  const pageStyle = currentPage?.map?.((ele) => {
    if (ele?.type == 'page') return ele.style;
  })[0];

  useEffect(() => {
    setCurrentFocusedElementId(focusedElementId);
  }, [focusedElementId])
  return (

    <div className="h-screen w-screen flex justify-center">
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-10">
        <CreateMenu
          currentPage={currentPage}
          setCurrentPage={(v) => {setCurrentPage?.(v)}}
          setFocusedElementId={(id) => {setFocusedElementId(id)}}
        />
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
        <InfoMenu id={focusedElementId}
          currentPage={currentPage}
          setCurrentPage={(v) => {setCurrentPage?.(v)}}
          deleteElement={deleteElement}
          deleteAllElements={deleteAllElements}
          copyElement={copyElement}
        />
      </div>

      <div className={`relative`}
        style={{ width: `${pageStyle?.width || 1000}px`,
          height: `${pageStyle?.height || 2000}px`,
          backgroundColor: pageStyle?.backgroundColor || '#ffffff' }}
        onClick={(event) => {
          // Click the empty page to edit page(default info menu)

          // Prevent from event capture phase which may capture child elements' event
          if (event.target == event.currentTarget) {
            setFocusedElementId(undefined);
          }
        }}>
        <Page
          config={currentPage}
          setCurrentPage={(value: any) => {setCurrentPage?.(value)}}
          setFocusedElementId={(id: number) => setFocusedElementId(id)}/>
      </div>

      <ConfirmDialog open={deleteOpen}
        setOpen={(v) => {
          setDeleteOpen(v);
        }}
        handleAction={() => {
          const _currentPage = currentPage?.filter?.((ele) => {
            if (ele?.id != focusedElementId) {
              console.log(ele, 3);

              return ele;
            }
          });
          console.log(_currentPage);

          setCurrentPage([..._currentPage]);
          setFocusedElementId?.(undefined);
        }}
        title="Are you sure to delete current element?"
        type="Delete"
      />

      <ConfirmDialog open={deleteAllOpen}
        setOpen={(v) => {
          setDeleteAllOpen(v);
        }}
        handleAction={() => {
          const _currentPage = currentPage?.filter?.((ele) => {
            if (ele?.type == 'page') return ele;
          })

          setCurrentPage([..._currentPage]);
          setFocusedElementId?.(undefined);
        }}
        title="Are you sure to clear the whole page?"
        type="Delete"
      />
    </div>
  )
}

export default EditPage
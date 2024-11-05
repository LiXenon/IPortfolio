import React, { useEffect, useState } from "react"
import { Button, Card } from "@mui/material";
import InputInfo from "./info/InputInfo";
import ImgInfo from "./info/ImgInfo";
import ButtonInfo from "./info/ButtonInfo";
import IconInfo from "./info/IconInfo";
import MasonryInfo from "./info/MasonryInfo";
import PageInfo from "./info/PageInfo";
import { InfoProps } from "./interface/Info";

interface InfoMenuProps {
  deleteElement: () => void;
  deleteAllElements: () => void;
}
const InfoMenu: React.FC<InfoProps & InfoMenuProps> = ({
  id,
  currentPage,
  setCurrentPage,
  deleteElement,
  deleteAllElements
}) => {
  const [currentType, setCurrentType] = useState<string>('');
  const typeToInfoMap = {
    input: InputInfo,
    img: ImgInfo,
    button: ButtonInfo,
    icon: IconInfo,
    masonry: MasonryInfo,
    "": PageInfo,
  }
  const InfoElement = typeToInfoMap?.[currentType];

  useEffect(() => {
    let isFound = false;
    currentPage?.forEach?.((ele) => {
      if (ele?.id == id) {
        setCurrentType(ele.type || '');
        isFound = true;
      }
    })
    if (!isFound) setCurrentType('');
  }, [id])
  return (
    <Card
      className="h-screen flex flex-col"
      sx={{
        padding: '10px',
        width: '300px',
        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }}>
      <div className="flex h-[50px] justify-between items-center">
        <span className="pl-[5%] text-sm font-bold">
          {currentType?.charAt(0)?.toUpperCase() + currentType?.slice(1) || 'Page'} Info Menu
        </span>
        {currentType && <Button
          color="warning"
          variant="outlined"
          size="small"
          sx={{ height: "30px", fontSize: '12px' }}
          onClick={() => {deleteElement?.()}}
        >Delete</Button>}
      </div>
      <div className="flex-1 overflow-auto">
        <InfoElement
          id={id}
          currentPage={currentPage}
          setCurrentPage={(v) => {setCurrentPage?.(v)}}
        />
      </div>
      <div className="flex h-[50px] w-full justify-around items-center bg-white z-10">
        <Button
          color="error"
          variant="outlined"
          size="small"
          sx={{ height: "30px", fontSize: '12px' }}
          onClick={() => {deleteAllElements?.()}}
        >Clear Page</Button>
        <Button
          color="primary"
          variant="outlined"
          size="small"
          sx={{ height: "30px", fontSize: '12px' }}
        >Save</Button>
      </div>
    </Card>
  )
}

export default InfoMenu
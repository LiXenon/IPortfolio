import React, { useEffect, useState } from "react"
import { Card, Typography } from "@mui/material";
import InputInfo from "./info/InputInfo";
import ImgInfo from "./info/ImgInfo";
import { draggableProps } from "./interface/draggable.d";
import ButtonInfo from "./info/ButtonInfo";
interface InfoMenuProps {
    id: number,
    currentPage: draggableProps[],
    setCurrentPage: (value: draggableProps[]) => void;
}
const EmptyInfoMenu = () => {
  return <></>;
}
const InfoMenu: React.FC<InfoMenuProps> = ({ id, currentPage, setCurrentPage }) => {
  const [currentType, setCurrentType] = useState<string>('');
  const typeToInfoMap = {
    input: InputInfo,
    img: ImgInfo,
    button: ButtonInfo,
    "": EmptyInfoMenu,
  }
  const InfoElement = typeToInfoMap?.[currentType];

  useEffect(() => {
    currentPage?.forEach?.((ele) => {
      if (ele?.id == id) {
        setCurrentType(ele.type || '');
      }
    })
  }, [id])
  return (
    <Card sx={{ padding: '2px', width: '200px', height: '500px' }}>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {currentType.length > 0 ? `${currentType} Info Menu` : "Select One Element" }
      </Typography>
      <InfoElement id={id} currentPage={currentPage} setCurrentPage={(v) => {setCurrentPage?.(v)}} />
    </Card>
  )
}

export default InfoMenu
import React, { useEffect, useState } from "react"
import { Card } from "@mui/material";
import InputInfo from "./info/InputInfo";
import ImgInfo from "./info/ImgInfo";
import ButtonInfo from "./info/ButtonInfo";
import IconInfo from "./info/IconInfo";
import MasonryInfo from "./info/MasonryInfo";
import PageInfo from "./info/PageInfo";
import { InfoProps } from "./interface/Info";

const InfoMenu: React.FC<InfoProps> = ({
  id,
  currentPage,
  setCurrentPage,
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
    <Card sx={{ padding: '2px', width: '250px', height: '500px' }}>
      <InfoElement
        id={id}
        currentPage={currentPage}
        setCurrentPage={(v) => {setCurrentPage?.(v)}}
      />
    </Card>
  )
}

export default InfoMenu
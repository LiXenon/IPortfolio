import React from "react"
import { Card, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InputIcon from '@mui/icons-material/Input';
import ImageIcon from '@mui/icons-material/Image';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AppsIcon from '@mui/icons-material/Apps';
interface CreateMenuProps {
    currentPage: any,
    setCurrentPage: (value: any) => void;
    setFocusedElementId: (id: number) => void;
}
const CreateMenu: React.FC<CreateMenuProps> = ({ currentPage, setCurrentPage, setFocusedElementId }) => {
  /*
   * Create a element in the paper
   * eleType: The type of the element. e.g., input
   */
  const createElement = (eleType: string) => {
    // Use the time stamp to set the id of the element
    const newId = Date.now();
    const newPage = [...currentPage, { id: newId, type: eleType }];
    setFocusedElementId(newId);
    setCurrentPage?.(newPage);
  }
  return (
    <Card
      className="h-screen w-[300px] flex flex-col"
      sx={{
        padding: '10px',
        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
      }}>
      <div className="flex h-[50px] items-center">
        <span className="pl-[5%] text-sm font-bold">
          Iportfolio Elements
        </span>
      </div>
      <Divider />
      <List
        className="flex-1"
        sx={{ overflow: "auto" }}
      >
        <ListItem>
          <ListItemButton onClick={() => {createElement("input")}}>
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary="Input" secondary="Create styled Text" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => {createElement("img")}}>
            <ListItemIcon>
              <ImageIcon />
            </ListItemIcon>
            <ListItemText primary="Img" secondary="Upload an Image or use an existing URL"/>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => {createElement("button")}}>
            <ListItemIcon>
              <TouchAppIcon />
            </ListItemIcon>
            <ListItemText primary="Button" secondary="Create a Button with an external or internal link"/>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => {createElement("icon")}}>
            <ListItemIcon>
              <EmojiEmotionsIcon />
            </ListItemIcon>
            <ListItemText primary="Icon" secondary="Create an Icon with a link to your social media"/>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => {createElement("masonry")}}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Masonry" secondary="Create a Masonry to display Images"/>
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  )
}

export default CreateMenu
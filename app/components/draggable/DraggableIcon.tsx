"use client"
import Draggable from 'react-draggable';
import { draggableProps } from '../interface/Draggable.d';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { useContext } from 'react';
import { DraggableContext } from '@/app/context/DraggableProvider';

const DraggableIcon: React.FC<draggableProps> = ({
  id,
  x,
  y,
  link,
  value,
  color,
  size,
  setFocusedElementId,
  handlePositionChange,
}) => {
  const { editing, currentFocusedElementId } = useContext(DraggableContext);
  const focused: boolean = currentFocusedElementId == id && editing;
  const valueToIconMap = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
    gitHub: GitHubIcon,
    x: XIcon
  }

  const IconElement = valueToIconMap?.[value] || FacebookIcon;

  return (
    <Draggable
      axis="both" // Restrict dragging to both axes (default)
      bounds="parent" // Prevent dragging outside of parent container
      position={{ x: x || 0, y: y || 0 }}
      // grid={[25, 25]} // Snap to 25px increments
      onStop={(event, data) => {
        handlePositionChange(data.lastX, data.lastY, id)
      }}
    >
      <IconElement
        className={`absolute left-0 top-0 ${focused ? 'border-dashed border-2 border-blue-500' : ''}`}
        onClick={() => {
          setFocusedElementId(id);
          if (!editing && link) {
            // Open new tab
            window.open(link);
          }
        }}
        style={{ color: color || 'black', fontSize: size || '24px' }}
      />
    </Draggable>
  );
};

export default DraggableIcon;

import { MoreVert, Edit, Delete } from "@mui/icons-material";
import { Menu, MenuItem, IconButton, Box } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { useState } from "react";
import { COLORS } from "@/ui/constants/colors";

type ActionsMenuProps = {
  onEditClick: () => void;
};

export const ActionsMenu = ({ onEditClick }: ActionsMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditClick = () => {
    onEditClick();
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          "&:hover": {
            backgroundColor: COLORS.hover.background,
          },
        }}
      >
        <MoreVert sx={{ color: COLORS.primary }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{ paper: { elevation: 1 } }}
      >
        <MenuItem
          onClick={handleEditClick}
          sx={{
            paddingY: 1.5,
            "&:hover": {
              backgroundColor: COLORS.hover.background,
              color: COLORS.hover.text,
            },
          }}
        >
          <Edit fontSize="small" sx={{ color: blue[500], marginRight: 1 }} />
          Edit order
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            paddingY: 1.5,
            "&:hover": {
              backgroundColor: COLORS.hover.background,
              color: COLORS.hover.text,
            },
          }}
        >
          <Delete fontSize="small" sx={{ color: red[500], marginRight: 1 }} />
          Delete order
        </MenuItem>
      </Menu>
    </Box>
  );
};

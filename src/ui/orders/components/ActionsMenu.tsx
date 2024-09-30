import { MoreVert, Edit, Delete } from "@mui/icons-material";
import { Menu, MenuItem, IconButton, Box } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { useState } from "react";
import { COLORS } from "@/ui/constants/colors";

type ActionsMenuProps = {
  onEditClick: () => void;
  onDeleteClick: () => void;
};

export const ActionsMenu = ({
  onEditClick,
  onDeleteClick,
}: ActionsMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    onEditClick();
    handleClose();
  };

  const handleDeleteClick = () => {
    onDeleteClick();
    handleClose();
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
          onClick={handleDeleteClick}
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

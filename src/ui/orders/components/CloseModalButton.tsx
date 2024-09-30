import { CloseSharp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { COLORS } from "@/ui/constants/colors";

type CloseModalButtonProps = {
  onClose: () => void;
};

export const CloseModalButton = ({ onClose }: CloseModalButtonProps) => {
  return (
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{ position: "absolute", right: 8, top: 8 }}
    >
      <CloseSharp sx={{ color: COLORS.primary, height: 40, width: 40 }} />
    </IconButton>
  );
};

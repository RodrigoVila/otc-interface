import { Fade, Tooltip } from "@mui/material";
import { ReactNode } from "react";

type CustomTooltipProps = {
  title: string;
  children: ReactNode;
};

export const CustomTooltip = ({ title, children }: CustomTooltipProps) => {
  return (
    <Tooltip
      title={title}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      followCursor
      PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            fontSize: "1rem",
            padding: "10px",
            textAlign: "center",
          },
        },
      }}
    >
      <span>{children}</span>
    </Tooltip>
  );
};

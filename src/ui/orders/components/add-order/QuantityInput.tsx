import { TextField } from "@mui/material";
import { KeyboardEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { COLORS } from "@/ui/constants/colors";

const blockInvalidChar = (e: KeyboardEvent<HTMLInputElement>) =>
  ["e", "E", "."].includes(e.key) && e.preventDefault();

export const QuantityInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="quantity"
      control={control}
      rules={{
        required: "Quantity is required",
        min: {
          value: 0.01,
          message: "Only possitive numbers",
        },
        max: {
          value: 999,
          message: "Maximun quantity is 999",
        },
      }}
      render={({ field }) => (
        <TextField
          {...field}
          value={field.value || ""}
          onChange={(e) => field.onChange(Number(e.target.value))}
          label="Quantity"
          type="number"
          variant="standard"
          autoComplete="off"
          onKeyDown={blockInvalidChar}
          error={!!errors.quantity}
          helperText={<>{errors.quantity?.message}</>}
          sx={{
            bgcolor: COLORS.background,
            "& .MuiInputLabel-root": {
              fontSize: "1.1rem",
              transform: "translate(0px, -2rem)",
            },
            "& .MuiInputBase-root": {
              marginY: 0,
              paddingY: "1rem",
            },
            "& .MuiInputBase-input": {
              paddingY: 0,
              paddingLeft: "1rem",
              fontSize: "1.3rem",
            },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
            "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
              {
                WebkitAppearance: "none",
                margin: 0,
              },
          }}
        />
      )}
    />
  );
};

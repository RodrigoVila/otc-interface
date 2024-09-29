import { Box, TextField, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc"; // Import UTC plugin for Dayjs
import { Controller, useFormContext } from "react-hook-form";
import { COLORS } from "@/ui/constants/colors";

dayjs.extend(utc);

export const ExpirationDateInput = () => {
  const { control } = useFormContext();

  const formatDate = (date: Dayjs) => dayjs(date).format("MM/DD/YYYY");
  const formatUTC = (date: Dayjs) =>
    dayjs(date).utc().format("MM/DD/YYYY HH:mm [UTC]");

  return (
    <Controller
      name="expirationDate"
      control={control}
      rules={{
        required: "Expiration date is required",
        validate: (value) => {
          const selectedDate = dayjs(value, "MM/DD/YYYY");
          return (
            selectedDate.isSame(dayjs(), "day") ||
            selectedDate.isAfter(dayjs(), "day") ||
            "Date must be in the future"
          );
        },
      }}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            {...field}
            value={field.value ? dayjs(field.value, "MM/DD/YYYY") : null}
            label="Order Expiration Date"
            disablePast
            onAccept={(newValue: Dayjs | null) =>
              newValue && field.onChange(formatDate(newValue))
            }
            onChange={() => {}}
            slotProps={{
              leftArrowIcon: { sx: { color: COLORS.primary } },
              rightArrowIcon: { sx: { color: COLORS.primary } },
              switchViewIcon: { sx: { color: COLORS.primary } },
            }}
            slots={{
              textField: (params) => (
                <TextField
                  {...params}
                  variant="standard"
                  slotProps={{ inputLabel: { shrink: true } }}
                  helperText={
                    <Box
                      sx={{
                        fontSize: "0.9rem",
                        bgcolor: COLORS.background2,
                        paddingTop: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "inherit",
                          fontWeight: "700",
                          color: common.white,
                          letterSpacing: "0.8px",
                        }}
                      >
                        Note: Expiration dates will be handled in UTC time{" "}
                      </Typography>
                      {field.value && (
                        <Typography fontSize="inherit">{`Equivalent UTC Time: ${formatUTC(
                          dayjs(field.value)
                        )}`}</Typography>
                      )}
                    </Box>
                  }
                  sx={{
                    marginTop: 2,
                    backgroundColor: COLORS.background,
                    "& input": { color: COLORS.primary },
                    "& svg": { color: COLORS.primary, marginRight: 2 },
                    "& .MuiInputLabel-root": {
                      fontSize: "1.1rem",
                      transform: "translate(0px, -2rem)",
                    },
                    "& .MuiInputBase-root": {
                      marginY: 0,
                      paddingY: "0.8rem",
                      paddingLeft: 1,
                    },
                    "& .MuiInputBase-input": {
                      paddingY: 1,
                      paddingLeft: "0.4rem",
                      fontSize: "1.2rem",
                    },
                  }}
                />
              ),
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

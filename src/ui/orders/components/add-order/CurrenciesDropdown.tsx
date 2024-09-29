import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import { Controller, useFormContext } from "react-hook-form";
import { USDConversion } from "./USDConversion";
import { CurrencyType } from "@/core/orders/orderTypes";
import { COLORS } from "@/ui/constants/colors";
import { CurrencyWithIcon } from "@/ui/orders/components/CurrencyWithIcon";

const focusTextStyle = COLORS.focus.text;
const focusBgStyle = COLORS.focus.background;

export const CurrenciesDropdown = ({
  currencies,
}: {
  currencies: CurrencyType[];
}) => {
  const { control, watch, setValue } = useFormContext();

  const selectedCurrency = watch("currency");

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selected = currencies.find(
      (coin) => coin.name === event.target.value
    );
    setValue("currency", selected);
  };

  return (
    <Box>
      <Controller
        name="currency"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth variant="standard" sx={{ paddingTop: 1.5 }}>
            <InputLabel id="crypto-select-label" sx={{ fontSize: "1.3rem" }}>
              Select Cryptocurrency
            </InputLabel>

            <Select
              {...field}
              labelId="crypto-select-label"
              value={field.value?.name || selectedCurrency.name}
              onChange={handleChange}
              sx={{
                paddingLeft: 2,
                paddingY: 1.5,
                marginBottom: 1,
                backgroundColor: COLORS.background,
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                },
                "& .MuiSelect-icon": {
                  color: COLORS.primary,
                  fontSize: "1.2rem",
                  marginRight: 1,
                },
              }}
            >
              {currencies.map(({ name, symbol, image }) => (
                <MenuItem
                  key={name}
                  value={name}
                  sx={{
                    paddingY: 1.5,
                    "&:hover": {
                      backgroundColor: COLORS.hover.background,
                      color: COLORS.hover.text,
                    },
                    "&:focus": {
                      backgroundColor: focusBgStyle,
                      color: focusTextStyle,
                    },
                    "&.Mui-selected": {
                      backgroundColor: focusBgStyle,
                      color: focusTextStyle,
                      "&:hover": {
                        backgroundColor: focusBgStyle,
                        color: focusTextStyle,
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <CurrencyWithIcon name={name} image={image} />

                    <Chip
                      label={symbol}
                      variant="filled"
                      size="small"
                      sx={{
                        marginLeft: "auto",
                        bgcolor: grey[600],
                        borderRadius: "5px",
                        marginRight: 1,
                      }}
                    />
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      <USDConversion />
    </Box>
  );
};

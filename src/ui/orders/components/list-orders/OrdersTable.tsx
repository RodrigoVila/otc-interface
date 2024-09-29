import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  SxProps,
  Theme,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { ActionsMenu } from "../ActionsMenu";
import { OrderType } from "@/core/orders/orderTypes";
import { COLORS } from "@/ui/constants/colors";
import { formatUSDPrice } from "@/ui/utils/formatPrice";

const cellStyle: SxProps<Theme> = {
  fontSize: "1rem",
  fontWeight: "700",
};
export const OrdersTable = ({ orders }: { orders: OrderType[] }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={5}
      sx={{ bgcolor: COLORS.background2, borderRadius: "10px" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={cellStyle}>Direction</TableCell>
            <TableCell sx={cellStyle}>Currency</TableCell>
            <TableCell sx={cellStyle}>Quantity</TableCell>
            <TableCell sx={cellStyle}>Total</TableCell>
            <TableCell sx={cellStyle}>Expiration Date</TableCell>
            <TableCell sx={cellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(
            ({ id, direction, currency, quantity, total, expirationDate }) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Chip
                    label={direction.toUpperCase()}
                    sx={{
                      bgcolor: direction === "buy" ? blue[500] : green[500],
                      height: 0,
                      padding: 1.5,
                      "& .MuiChip-label": {
                        padding: 0,
                      },
                    }}
                  />
                </TableCell>
                <TableCell>{currency.symbol}</TableCell>
                <TableCell>{quantity}</TableCell>
                <TableCell>{formatUSDPrice(total)}</TableCell>
                <TableCell>{expirationDate}</TableCell>
                <TableCell sx={{ display: "flex", gap: 1 }}>
                  <ActionsMenu />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

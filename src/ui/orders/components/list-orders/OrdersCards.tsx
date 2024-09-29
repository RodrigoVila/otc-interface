import { AccessTime } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { blue, common, green } from "@mui/material/colors";
import { ActionsMenu } from "../ActionsMenu";
import { OrderType } from "@/core/orders/orderTypes";
import { CustomTooltip } from "@/ui/components/CustomTooltip";
import { COLORS } from "@/ui/constants/colors";
import { CurrencyWithIcon } from "@/ui/orders/components/CurrencyWithIcon";
import { formatUSDPrice } from "@/ui/utils/formatPrice";

type OrdersCardsProps = {
  orders: OrderType[];
  handleEditModalOpen: (order: OrderType) => void;
};

export const OrdersCards = ({
  orders,
  handleEditModalOpen,
}: OrdersCardsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgColor: "#EC0000",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      {orders.map((order) => (
        <Paper
          key={order.id}
          elevation={3}
          sx={{
            position: "relative",
            paddingTop: 2.5,
            paddingBottom: 1.5,
            paddingX: 1.5,
            bgcolor: COLORS.background2,
            borderRadius: 2,
            border: 1,
            borderColor: order.direction === "buy" ? blue[500] : green[500],
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          {/* Direction Label on top */}
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: -12,
              left: 12,
              backgroundColor:
                order.direction === "buy" ? blue[500] : green[500], // Matches card background
              paddingX: 1,
              color: common.white,
              fontWeight: "bold",
              fontSize: "0.9rem",
              borderRadius: "100px",
            }}
          >
            {order.direction.toUpperCase()}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Currency */}
            <CurrencyWithIcon
              name={order.currency.name}
              image={order.currency.image}
              symbol={order.currency.symbol}
            />

            {/* Action Buttons */}
            <ActionsMenu onEditClick={() => handleEditModalOpen(order)} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              {/* Quantity */}
              <Typography variant="body2">
                Quantity: {order.quantity}
              </Typography>

              {/* Total in USD */}
              <Typography
                variant="body2"
                sx={{ fontSize: "1rem", fontWeight: "bold" }}
              >
                USD {formatUSDPrice(order.total)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: -1,
              }}
            >
              <CustomTooltip title="Expiration date">
                <AccessTime sx={{ color: "gray" }} />
              </CustomTooltip>
              <Typography variant="body2">{order.expirationDate}</Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

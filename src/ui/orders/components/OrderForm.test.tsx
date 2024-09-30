import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, it, expect, vi, Mock } from "vitest";
import { CreateOrderButtonProps } from "./add-order/CreateOrderButton";
import { OrderForm } from "./OrderForm";
import { OrderType } from "@/core/orders/orderTypes";

type Mocks = {
  order: OrderType;
  orders: OrderType[];
  isFormValid: boolean;
  handleSubmit: Mock;
  addOrder: Mock;
  editOrder: Mock;
  openSnackBar: Mock;
  closeEditModal: Mock;
};

const mocks = vi.hoisted<Mocks>(() => {
  const order = {
    id: "",
    direction: "buy" as Mocks["order"]["direction"],
    currency: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      image: "/bitcoin.png",
    },
    quantity: 0,
    expirationDate: "",
    total: 0,
  };

  return {
    order,
    orders: [order],
    isFormValid: false,
    handleSubmit: vi.fn(),
    addOrder: vi.fn(),
    editOrder: vi.fn(),
    openSnackBar: vi.fn(),
    closeEditModal: vi.fn(),
  };
});

vi.mock("react-hook-form", async () => {
  const actual = await vi.importActual<typeof import("react-hook-form")>(
    "react-hook-form"
  );
  return {
    ...actual,
    useFormContext: vi.fn(() => ({
      control: {},
    })),
    useForm: vi.fn(() => ({
      formState: {
        isValid: mocks.isFormValid,
      },
      handleSubmit: (cb: Mock) => () => cb(mocks.order),
      reset: vi.fn(),
    })),
  };
});

vi.mock("@/core/orders/usePersistedOrderStore", () => ({
  usePersistedOrderStore: vi.fn(() => ({
    addOrder: mocks.addOrder,
    editOrder: mocks.editOrder,
  })),
}));

vi.mock("@/ui/orders/components/add-order", async () => {
  const actual = await vi.importActual<
    typeof import("@/ui/orders/components/add-order")
  >("@/ui/orders/components/add-order");
  return {
    ...actual,
    CurrenciesDropdown: () => <div>CurrenciesDropdown</div>,
    DirectionToggleHeader: () => <div>DirectionToggleHeader</div>,
    ExpirationDateInput: () => <div>ExpirationDateInput</div>,
    QuantityInput: () => <div>QuantityInput</div>,
    TotalPrice: () => <div>TotalPrice</div>,
    CreateOrderButton: ({ children, disabled }: CreateOrderButtonProps) => (
      <button type="submit" disabled={disabled}>
        {children}
      </button>
    ),
  };
});

vi.mock("@/ui/components/CustomTooltip", () => ({
  CustomTooltip: ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("OrderForm Component", () => {
  it("should render new order form & inner components", () => {
    render(<OrderForm openSnackbar={mocks.openSnackBar} />);

    expect(screen.getByText(/New Order/i)).toBeInTheDocument();
    expect(screen.getByText(/CurrenciesDropdown/i)).toBeInTheDocument();
    expect(screen.getByText(/DirectionToggleHeader/i)).toBeInTheDocument();
    expect(screen.getByText(/ExpirationDateInput/i)).toBeInTheDocument();
    expect(screen.getByText(/QuantityInput/i)).toBeInTheDocument();
    expect(screen.getByText(/TotalPrice/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should disable submitButton button when form is invalid", () => {
    render(<OrderForm openSnackbar={mocks.openSnackBar} />);

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });

  it("should enable submitButton when form is valid", () => {
    mocks.isFormValid = true;
    render(<OrderForm openSnackbar={mocks.openSnackBar} />);

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
  });

  it("should render edit order form", () => {
    mocks.isFormValid = true;
    render(
      <OrderForm
        existingOrder={mocks.order}
        openSnackbar={mocks.openSnackBar}
        closeEditModal={mocks.closeEditModal}
      />
    );

    expect(screen.getByText(/Edit Order/i)).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
    expect(submitButton).toHaveTextContent("Update Order");
  });

  it("should create a new order on submit", async () => {
    mocks.isFormValid = true;

    render(<OrderForm openSnackbar={mocks.openSnackBar} />);

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mocks.addOrder).toHaveBeenCalledWith({
        ...mocks.order,
        id: expect.any(String),
      });
      expect(mocks.openSnackBar).toHaveBeenCalledWith("Order created");
    });
  });

  it("should edit an existing order on submit", async () => {
    mocks.isFormValid = true;

    const existingOrder: OrderType = {
      ...mocks.orders[0],
      id: "123",
    };

    render(
      <OrderForm
        existingOrder={existingOrder}
        openSnackbar={mocks.openSnackBar}
        closeEditModal={mocks.closeEditModal}
      />
    );

    const submitButton = screen.getByRole("button", { name: /Update Order/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mocks.editOrder).toHaveBeenCalledWith("123", {
        ...existingOrder,
        id: "123",
      });
      expect(mocks.openSnackBar).toHaveBeenCalledWith("Order updated");
      expect(mocks.closeEditModal).toHaveBeenCalled();
    });
  });
});

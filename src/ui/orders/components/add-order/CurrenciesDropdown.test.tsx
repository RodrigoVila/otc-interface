import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Control, FieldValues } from "react-hook-form";
import { describe, it, expect, vi, Mock } from "vitest";
import { CurrenciesDropdown } from "./CurrenciesDropdown";
import { currencies } from "@/ui/constants/orders";
import "@testing-library/jest-dom";

type Mocks = {
  field: {
    value: { name: string };
    onChange: () => void;
  };
  watch: Mock;
  setValue: () => void;
};

const mocks = vi.hoisted<Mocks>(() => ({
  field: {
    value: { name: "Bitcoin" },
    onChange: vi.fn(),
  },
  watch: vi.fn(() => "currency"),
  setValue: vi.fn(),
}));

vi.mock("react-hook-form", async () => {
  const actual = await vi.importActual<typeof import("react-hook-form")>(
    "react-hook-form"
  );
  return {
    ...actual,
    useFormContext: vi.fn(() => ({
      control: {} as Control<FieldValues>,
      watch: mocks.watch,
      setValue: mocks.setValue,
    })),
    Controller: ({
      render,
    }: {
      render: (props: { field: Mocks["field"] }) => JSX.Element;
    }) => render({ field: mocks.field }),
  };
});

vi.mock("@/ui/orders/components/add-order/USDConversion", () => ({
  USDConversion: () => <div>USD Conversion: $1000</div>,
}));

describe("CurrenciesDropdown", () => {
  it("should render dropdown with options", () => {
    const { input } = renderSut();

    expect(input).toBeInTheDocument();

    fireEvent.click(input);

    waitFor(() => {
      currencies.forEach(({ name }) => {
        expect(screen.getByRole("option", { name })).toBeInTheDocument();
      });
    });
  });

  it("should display 'Bitcoin' as the selected currency by default", () => {
    const { input } = renderSut();

    expect(input).toHaveTextContent("Bitcoin");
  });

  it("should change the currency when a new option is selected", async () => {
    const { input } = renderSut();

    fireEvent.mouseDown(input);

    const ethereumOption = screen.getByRole("option", {
      name: "Ethereum Ethereum ETH",
    });
    fireEvent.click(ethereumOption);
    expect(mocks.setValue).toHaveBeenCalledWith(
      "currency",
      expect.objectContaining({ name: "Ethereum" })
    );
  });

  it("should render USDConversion component", () => {
    renderSut();
    expect(screen.getByText("USD Conversion: $1000")).toBeInTheDocument();
  });
});

const renderSut = () => {
  const client = new QueryClient();
  render(
    <QueryClientProvider client={client}>
      <CurrenciesDropdown />
    </QueryClientProvider>
  );

  const input = screen.getByRole("combobox");
  return { input };
};

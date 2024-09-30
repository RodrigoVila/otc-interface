import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Control, FieldValues } from "react-hook-form";
import { describe, it, expect, vi } from "vitest";
import { DirectionToggleHeader } from "./DirectionToggleHeader";

type Mocks = {
  field: {
    value: string;
    onChange: () => void;
  };
};

const mocks = vi.hoisted<Mocks>(() => ({
  field: {
    value: "buy",
    onChange: vi.fn(),
  },
}));

vi.mock("react-hook-form", async () => {
  const actual = await vi.importActual<typeof import("react-hook-form")>(
    "react-hook-form"
  );
  return {
    ...actual,
    useFormContext: vi.fn(() => ({
      control: {} as Control<FieldValues>,
    })),
    Controller: ({
      render,
    }: {
      render: (props: { field: Mocks["field"] }) => JSX.Element;
    }) => render({ field: mocks.field }),
  };
});

describe("DirectionToggleHeader", () => {
  it("should render 'Buy' and 'Sell' buttons", () => {
    const { buyButton, sellButton } = renderSut();

    expect(buyButton).toBeInTheDocument();
    expect(sellButton).toBeInTheDocument();
  });

  it("should have 'buy' selected by default", () => {
    const { buyButton, sellButton } = renderSut();

    expect(buyButton).toHaveAttribute("aria-pressed", "true");
    expect(sellButton).toHaveAttribute("aria-pressed", "false");
  });

  it("changes the value when 'Sell' is clicked", () => {
    const { buyButton, sellButton } = renderSut();

    fireEvent.click(sellButton);

    waitFor(() => {
      expect(buyButton).toHaveAttribute("aria-pressed", "false");
      expect(sellButton).toHaveAttribute("aria-pressed", "true");

      expect(mocks.field.onChange).toHaveBeenCalledWith("sell");
    });
  });
});

const renderSut = () => {
  render(<DirectionToggleHeader />);

  const buyButton = screen.getByRole("button", { name: /buy/i });
  const sellButton = screen.getByRole("button", { name: /sell/i });

  return { buyButton, sellButton };
};

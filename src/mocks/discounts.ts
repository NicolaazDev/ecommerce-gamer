export const mockDiscounts = [
  {
    id: "discount_1",
    rule: {
      value: 20, // 20% de desconto
      conditions: [
        {
          products: ["prod_1"], // Aplica o desconto ao produto "prod_1"
        },
      ],
    },
    starts_at: "2024-10-01T00:00:00Z",
    ends_at: "2024-10-31T23:59:59Z",
  },
  {
    id: "discount_2",
    rule: {
      value: 15, // 15% de desconto
      conditions: [
        {
          products: ["prod_3"], // Aplica o desconto ao produto "prod_3"
        },
      ],
    },
    starts_at: "2024-10-01T00:00:00Z",
    ends_at: "2024-10-31T23:59:59Z",
  },
];

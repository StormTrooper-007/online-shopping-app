export function convertEur(number: number): string {
      const res = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(number);
      return res;
    }
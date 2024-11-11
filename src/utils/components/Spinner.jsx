// components/ui/spinner.js
export function Spinner({ size }) {
  return (
    <div
      className={`animate-spin rounded-full ${
        size === "small" ? "h-5 w-5" : "h-6 w-6"
      } border-t-2 border-blue-500`}
    />
  );
}

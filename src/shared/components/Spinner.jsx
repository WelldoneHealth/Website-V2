// components/ui/spinner.js
export function Spinner({ size="small" }) {
  return (
    // <div
    //   className={`animate-spin rounded-full bg-white ${
    //     size === "small" ? "h-5 w-5" : "h-6 w-6"
    //   } border-t-2 border-blue-500`}
    // />
    <div className={`animate-spin  rounded-full bg-white h-5 w-5  border-t-2 border-blue-500`}></div>
  );
}

import React from "react";

export default function TableRow({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-between rounded-lg px-2 py-3 odd:bg-lightGrey">
      {children}
    </div>
  );
}

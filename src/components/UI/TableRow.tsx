import React from "react";

export default function TableRow({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-between px-2 py-3 rounded-lg odd:bg-lightGrey">
      {children}
    </div>
  );
}

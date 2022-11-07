import React from "react";

export default function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto max-w-6xl p-5 pb-[5.5rem] lg:mt-16 lg:pb-5">
      {children}
    </div>
  );
}

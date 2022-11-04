import React from "react";

export default function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="p-5 pb-[5.5rem] lg:pb-5 mx-auto max-w-6xl lg:mt-16">
      {children}
    </div>
  );
}

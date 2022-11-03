import React from "react";

export default function ContentBox({ children }: React.PropsWithChildren) {
  return <div className="p-3 mt-5 bg-white rounded-3xl">{children}</div>;
}

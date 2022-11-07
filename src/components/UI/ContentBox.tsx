import React from "react";

export default function ContentBox({ children }: React.PropsWithChildren) {
  return <div className="mt-5 rounded-3xl bg-white p-3">{children}</div>;
}

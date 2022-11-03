import React from 'react'

export default function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="p-5 mx-auto max-w-6xl">{children}</div>
  )
}

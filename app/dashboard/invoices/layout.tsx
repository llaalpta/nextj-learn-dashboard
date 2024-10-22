import React, { ReactNode } from "react";

export default function InvoicesLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <section>
      Esto es el layout del dashboard:
      {children}
    </section>
  );
};


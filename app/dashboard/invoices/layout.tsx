import React, { ReactNode } from "react";

const InvoicesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      Esto es el layout del dashboard:
      {children}
    </section>
  );
};

export default InvoicesLayout
import React, { ReactNode } from "react";

export const InvoicesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      Esto es el layout de INVOICES - en InvocesLayout
      {children}
    </section>
  );
};

export default InvoicesLayout;

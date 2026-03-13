import { Suspense } from "react";
import Sidebare from "./Sidebare";
import "./dashboard.css"
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard-layout">
        <Suspense fallback={<div><h1>Loading ...</h1></div>}>
          <Sidebare />
        </Suspense>
          <div className="main-section">{children}</div>
        </div>
      </body>
    </html>
  );
}

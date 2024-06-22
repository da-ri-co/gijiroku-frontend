import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <div className="bg-whit min-w-full min-h-full">
      {children}
    </div>
  );
}

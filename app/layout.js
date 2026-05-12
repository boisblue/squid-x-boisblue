import "./globals.css";

export const metadata = {
  title: "Squid Widget",
  description: "Cross-chain swap powered by Squid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
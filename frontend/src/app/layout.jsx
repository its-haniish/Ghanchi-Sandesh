import "./globals.css";

export const metadata = {
  title: "घाँची संदेश",
  description: "घाँची संदेश "
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

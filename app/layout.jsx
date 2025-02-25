import "./globals.css";

export const metadata = {
  title: "MAXX Coffee",
  description: "Living life to the MAXX!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body>{children}</body>
    </html>
  );
}

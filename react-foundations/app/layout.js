export const metadata = {
  title: "React Foundations",
  description: "Proyecto Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

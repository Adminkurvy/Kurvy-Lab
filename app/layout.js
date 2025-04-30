import "./globals.css";

export const metadata = {
  title: "KurvyLab Wellness",
  description: "Kesihatan herba moden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

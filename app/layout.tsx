export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>KurvyLab Wellness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0 }}>{children}</body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div>
			<h1>DASHBOARD NAVBAR</h1>
			<div>{children}</div>
		</div>
  );
}


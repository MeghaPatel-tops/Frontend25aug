export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "black", color: "white", padding: "10px" }}>
          <h2>My Website</h2>
        </header>

        <main>
          {children}
        </main>

        <footer style={{ background: "gray", padding: "10px" }}>
          <p>© 2026 My App</p>
        </footer>
      </body>
    </html>
  );
}
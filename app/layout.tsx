import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import AmbientOrbs from "@/components/AmbientOrbs";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Aathmika | Software Engineer Portfolio",
  description: "Software Engineer Portfolio",
};

const themeInitScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
} catch (e) {
  document.documentElement.classList.add('dark');
}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <style>{`* { cursor: none !important; }`}</style>
      </head>
      <body suppressHydrationWarning className="selection:bg-primary-container selection:text-on-primary-container bg-background text-on-background">
        <div className="grain-overlay"></div>
        <SmoothScroll>
          <CustomCursor />
          <AmbientOrbs />
          <ThemeToggle />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import AmbientOrbs from "@/components/AmbientOrbs";

export const metadata = {
  title: "ALCHEMIST.IO | Software Artisan Portfolio",
  description: "Software Artisan Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`* { cursor: none !important; }`}</style>
      </head>
      <body className="selection:bg-primary-container selection:text-on-primary-container bg-background text-on-background">
        <div className="grain-overlay"></div>
        <SmoothScroll>
          <CustomCursor />
          <AmbientOrbs />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

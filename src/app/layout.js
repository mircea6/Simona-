// import "../../styles/style.css";
import "./globals.css";
import MouseFollower from "./components/MouseFollower";
import LoadingScreen from "./components/LoadingScreen";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

export const metadata = {
  title: "Mimi Dance Academy",
  description: "Dance academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <LoadingScreen />
        <MouseFollower />
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}

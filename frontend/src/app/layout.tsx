import './globals.css'
import Provider from "@/components/layout/provider";

export const metadata = {
  title: "Charich Store",
  description: "Charich Store is a modern e-commerce platform for all your shopping needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Provider>
        {children}
      </Provider>
      </body>
    </html>
  )
}

import { Inter } from "next/font/google";
import styles from './styles.module.css'
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "4Q Quiz",
  description: "4 quotient self reflection quiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <body>
        <div className={styles.background}>
          <div className={styles.site_margin}>
            <Navigation />
            <div className={styles.page_margin}>
            {children}
            </div>
            <Footer />
            </div>
            </div>
        </body>
    </html>
  );
}

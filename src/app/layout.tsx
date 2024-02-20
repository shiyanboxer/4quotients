import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { Inter } from "next/font/google";
import styles from './styles.module.css'
import Footer from '@/components/footer';
import Navigation from '@/components/nav';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "4 Quotients",
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
        <body className={inter.className}>
        <Theme appearance="light" accentColor="blue" radius="large" scaling="110%">
          <div className={styles.container}>
            <Navigation />
            {children}
            <Footer />
            </div>
        </Theme>
        </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/MainLayout';
import MenuContextProvider from '@/context/MenuContext';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'SideBar',
  description: 'Sidebar With next and tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}

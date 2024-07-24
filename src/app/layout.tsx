import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';

import { StyledComponentsRegistry } from '@/lib/registry';

export const metadata: Metadata = {
  title: 'weather',
  description: `This is a test to get to know one's front-end development skills, the goal here is to build a weather web app, with a responsive and intuitive design, and most importantly, good code practices.`,
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}


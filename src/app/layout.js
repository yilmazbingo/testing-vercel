
import '../scss/globals.scss';

import { Figtree } from 'next/font/google';

const figtree = Figtree({subsets: ['latin']});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        {children}
      </body>
    </html>
  );
}

// // import "./globals.css";

// // export const metadata = {
// //   title: {
// //     default: "Shop",
// //     template: "%s | Mctaba Shop",
// //   },
// //   description: "A fullstack shop built with Next.js and PostgreSQL",
// // };

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body style={{ margin: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}>

// //         <header style={{ borderBottom: "1px solid #eee" }}>
// //           <nav style={{
// //             maxWidth: 900,
// //             margin: "0 auto",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "space-between",
// //             padding: "1rem 2rem",
// //           }}>
// //             <a href="/" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
// //               Mctaba Shop
// //             </a>
// //             <div style={{ display: "flex", gap: "1.5rem" }}>
// //               <a href="/products">Products</a>
// //               <a href="/about">About</a>
// //             </div>
// //           </nav>
// //         </header>

// //         <div style={{ flex: 1 }}>
// //           {children}
// //         </div>

// //         <footer style={{
// //           borderTop: "1px solid #eee",
// //           padding: "1.5rem",
// //           textAlign: "center",
// //           fontSize: "0.85rem",
// //           color: "#666",
// //         }}>
// //           © {new Date().getFullYear()} Mctaba Shop
// //         </footer>

// //       </body>
// //     </html>
// //   );
// // }

// import "./globals.css";
// import Link from "next/link";

// export const metadata = {
//   title: {
//     default: "Shop",
//     template: "%s | Mctaba Shop",
//   },
//   description: "A fullstack shop built with Next.js and PostgreSQL",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body style={{
//         margin: 0,
//         display: "flex",
//         flexDirection: "column",
//         minHeight: "100vh",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//         backgroundColor: "#ffffff",
//         color: "#1a1a1a",
//       }}>

//         <header style={{
//           borderBottom: "1px solid #f0f0f0",
//           position: "sticky",
//           top: 0,
//           backgroundColor: "rgba(255,255,255,0.95)",
//           backdropFilter: "blur(8px)",
//           zIndex: 10,
//         }}>
//           <nav style={{
//             maxWidth: 900,
//             margin: "0 auto",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "1.25rem 2rem",
//           }}>
//             <Link href="/" style={{
//               fontWeight: 800,
//               fontSize: "20 rem",
//               color: "#111111",
//               textDecoration: "none",
//               letterSpacing: "-0.02em",
//             }}>
//               Mctaba <span style={{ color: "#ff7a00" }}>Shop</span>
//             </Link>
//             <div style={{ display: "flex", gap: "2rem" }}>
//               <Link href="/products" style={{
//                 fontWeight: 500,
//                 fontSize: "2 rem",
//                 color: "#333333",
//                 textDecoration: "none",
//                 transition: "color 0.2s",
//               }}>
//                 Products
//               </Link>
//               <Link href="/about" style={{
//                 fontWeight: 500,
//                 fontSize: "2 rem",
//                 color: "#333333",
//                 textDecoration: "none",
//                 transition: "color 0.2s",
//               }}>
//                 About
//               </Link>

//             </div>
//           </nav>
//         </header>

//         <div style={{ flex: 1 }}>
//           {children}
//         </div>

//         <footer style={{
//           borderTop: "1px solid #f0f0f0",
//           padding: "2rem 1.5rem",
//           textAlign: "center",
//           fontSize: "0.85rem",
//           color: "#888888",
//           backgroundColor: "#fafafa",
//         }}>
//           <span style={{ fontWeight: 700, color: "#1a1a1a" }}>© {new Date().getFullYear()} Mctaba Shop</span>
//           <span style={{ color: "#ff7a00" }}> · </span>
//           <span>All rights reserved</span>
//         </footer>

//       </body>
//     </html>
//   );
// }

// import { Inter } from 'next/font/google';
// import Link from 'next/link';
// import './globals.css';
// import AxeDevtools from '@/app/components/AxeDevtools';

// const inter = Inter({ subsets: ['latin'], display: 'swap' });

// export const metadata = {
//   metadataBase: new URL(
//     process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
//   ),
//   title: {
//     default: 'Shop',
//     template: '%s | Mctaba Shop',
//   },
//   description: 'A fullstack shop with Paystack checkout',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={inter.className}
//         style={{
//           margin: 0,
//           display: 'flex',
//           flexDirection: 'column',
//           minHeight: '100vh',
//         }}
//       >
//         <header style={{ borderBottom: '1px solid #eee' }}>
//           <nav
//             style={{
//               maxWidth: 900,
//               margin: '0 auto',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               padding: '1rem 2rem',
//             }}
//           >
//             <Link
//               href="/"
//               style={{
//                 fontWeight: 700,
//                 fontSize: '1.1rem',
//                 textDecoration: 'none',
//                 color: 'inherit',
//               }}
//             >
//               Mctaba Shop
//             </Link>
//             <div style={{ display: 'flex', gap: '1.5rem' }}>
//               <Link href="/products" style={{ color: 'inherit' }}>
//                 Products
//               </Link>
//               <Link href="/about" style={{ color: 'inherit' }}>
//                 About
//               </Link>
//               <Link href="/contact" style={{ color: 'inherit' }}>
//                 Contact
//               </Link>
//             </div>
//           </nav>
//         </header>

//         <div style={{ flex: 1 }}>{children}</div>

//         <footer
//           style={{
//             borderTop: '1px solid #eee',
//             padding: '1.5rem',
//             textAlign: 'center',
//             fontSize: '0.85rem',
//             color: '#666',
//           }}
//         >
//           &copy; {new Date().getFullYear()} Mctaba Shop
//         </footer>

//           <AxeDevtools />
//       </body>
//     </html>
//   );
// }

import AxeDevtools from '@/app/components/AxeDevtools';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
//add
import CartCounter from "@/app/components/CartCounter";

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: {
    default: 'Shop',
    template: '%s | Mctaba Shop',
  },
  description: 'A fullstack shop with Paystack checkout',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <header style={{ borderBottom: '1px solid #eee' }}>
          <nav
            style={{
              maxWidth: 900,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 2rem',
            }}
          >
            <Link
              href="/"
              style={{
                fontWeight: 700,
                fontSize: '1.1rem',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Mctaba Shop
            </Link>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/products" style={{ color: 'inherit' }}>
                Products
              </Link>
              <Link href="/about" style={{ color: 'inherit' }}>
                About
              </Link>
              
              <CartCounter />

              <Link href="/contact" style={{ color: 'inherit' }}>
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <div style={{ flex: 1 }}>{children}</div>

        <footer
          style={{
            borderTop: '1px solid #eee',
            padding: '1.5rem',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#666',
          }}
        >
          &copy; {new Date().getFullYear()} Mctaba Shop
        </footer>

        <AxeDevtools />
      </body>
    </html>
  );
}

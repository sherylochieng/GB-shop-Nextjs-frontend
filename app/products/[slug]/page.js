// // import { notFound } from "next/navigation";
// // import Link from "next/link";
// // import { apiFetch } from "@/lib/api";

// // export const revalidate = 60;

// // export async function generateStaticParams() {
// //   const { products } = await apiFetch("/api/products");
// //   return products.map((p) => ({ slug: p.slug }));
// // }

// // export async function generateMetadata({ params }) {
// //   const { slug } = await params;

// //   let product;
// //   try {
// //     ({ product } = await apiFetch(`/api/products/${slug}`));
// //   } catch {
// //     return { title: "Product not found" };
// //   }

// //   return {
// //     title: product.name,
// //     description: product.description,
// //   };
// // }

// // export default async function ProductPage({ params }) {
// //   const { slug } = await params;

// //   let product;
// //   try {
// //     ({ product } = await apiFetch(`/api/products/${slug}`));
// //   } catch {
// //     notFound();
// //   }

// //   return (
// //     <div>
// //       <nav style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1.5rem" }}>
// //         <Link href="/products">Products</Link>
// //         {" / "}
// //         {product.name}
// //       </nav>

// //       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>

// //         <div style={{
// //           width: "100%",
// //           aspectRatio: "1 / 1",
// //           background: "#f5f5f5",
// //           borderRadius: 8,
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           color: "#999",
// //           fontSize: "0.9rem",
// //         }}>
// //           {product.name}
// //         </div>

// //         <div>
// //           <h1 style={{ margin: 0 }}>{product.name}</h1>

// //           <p style={{ fontSize: "1.4rem", marginTop: "0.5rem", marginBottom: 0 }}>
// //             KSh {(product.price_cents / 100).toLocaleString()}
// //           </p>

// //           {product.stock > 0 ? (
// //             <p style={{ color: "#2f855a", fontSize: "0.9rem", marginTop: "0.25rem" }}>
// //               In stock ({product.stock} available)
// //             </p>
// //           ) : (
// //             <p style={{ color: "crimson", fontSize: "0.9rem", marginTop: "0.25rem" }}>
// //               Out of stock
// //             </p>
// //           )}

// //           <p style={{ marginTop: "1rem", color: "#444", lineHeight: 1.6 }}>
// //             {product.description}
// //           </p>

// //           <div style={{ marginTop: "1.5rem" }}>
// //             <button
// //               disabled={product.stock === 0}
// //               style={{
// //                 background: "#000",
// //                 color: "#fff",
// //                 padding: "0.75rem 1.5rem",
// //                 borderRadius: 4,
// //                 border: "none",
// //                 cursor: product.stock === 0 ? "default" : "pointer",
// //                 opacity: product.stock === 0 ? 0.5 : 1,
// //                 fontSize: "1rem",
// //               }}
// //             >
// //               {product.stock === 0 ? "Out of stock" : "Add to cart"}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// //UPDATED STYLE

// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { apiFetch } from "@/lib/api";

// export const revalidate = 60;

// export async function generateStaticParams() {
//   const { products } = await apiFetch("/api/products");
//   return products.map((p) => ({ slug: p.slug }));
// }

// // export async function generateMetadata({ params }) {
// //   const { slug } = await params;

// //   let product;
// //   try {
// //     ({ product } = await apiFetch(`/api/products/${slug}`));
// //   } catch {
// //     return { title: "Product not found" };
// //   }

// //   return {
// //     title: product.name,
// //     description: product.description,
// //   };
// // }

// export async function generateMetadata({ params }) {
//   let product;
//   try {
//     ({ product } = await apiFetch(`/api/products/${params.slug}`));
//   } catch {
//     return { title: "Product not found" };
//   }

//   return {
//     title: product.name,
//     description: product.description,
//     openGraph: {
//       title: product.name,
//       description: `KSh ${(product.price_cents / 100).toLocaleString()} — ${product.description}`,
//       // No `images` key needed here.
//       // Next.js automatically wires the sibling opengraph-image.js output
//       // as the og:image for this page. Adding `images` here would override it.
//     },
//   };
// }

// export default async function ProductPage({ params }) {
//   const { slug } = await params;

//   let product;
//   try {
//     ({ product } = await apiFetch(`/api/products/${slug}`));
//   } catch {
//     notFound();
//   }

//   return (
//     <div style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 2rem 3rem" }}>
//       <nav style={{ fontSize: "0.85rem", color: "#999999", marginBottom: "2.5rem" }}>
//         <Link href="/products" style={{ color: "#666666", fontWeight: 600, textDecoration: "none" }}>
//           Products
//         </Link>
//         <span style={{ margin: "0 0.4rem", color: "#ff7a00" }}>/</span>
//         <span style={{ color: "#111111", fontWeight: 600 }}>{product.name}</span>
//       </nav>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>

//         <div style={{
//           width: "100%",
//           aspectRatio: "1 / 1",
//           background: "#fafafa",
//           borderRadius: 16,
//           border: "1px solid #f0f0f0",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#bbbbbb",
//           fontSize: "0.95rem",
//           fontWeight: 600,
//         }}>
//           {product.name}
//         </div>

//         <div>
//           <h1 style={{
//             margin: 0,
//             fontSize: "2rem",
//             fontWeight: 800,
//             letterSpacing: "-0.03em",
//             color: "#111111",
//             lineHeight: 1.2,
//           }}>
//             {product.name}
//           </h1>

//           <p style={{
//             fontSize: "1.6rem",
//             fontWeight: 800,
//             marginTop: "0.75rem",
//             marginBottom: 0,
//             color: "#ff7a00",
//           }}>
//             KSh {(product.price_cents / 100).toLocaleString()}
//           </p>

//           {product.stock > 0 ? (
//             <p style={{
//               color: "#15803d",
//               fontSize: "0.85rem",
//               fontWeight: 600,
//               marginTop: "0.6rem",
//               background: "#f0fdf4",
//               display: "inline-block",
//               padding: "0.25rem 0.65rem",
//               borderRadius: 6,
//             }}>
//               In stock — <span style={{ fontWeight: 700 }}>{product.stock} available</span>
//             </p>
//           ) : (
//             <p style={{
//               color: "#dc2626",
//               fontSize: "0.85rem",
//               fontWeight: 600,
//               marginTop: "0.6rem",
//               background: "#fef2f2",
//               display: "inline-block",
//               padding: "0.25rem 0.65rem",
//               borderRadius: 6,
//             }}>
//               Out of stock
//             </p>
//           )}

//           <p style={{ marginTop: "1.5rem", color: "#555555", lineHeight: 1.7, fontSize: "1.02rem" }}>
//             {product.description}
//           </p>

//           <div style={{ marginTop: "2rem" }}>
//             <button
//               disabled={product.stock === 0}
//               style={{
//                 background: product.stock === 0 ? "#e5e5e5" : "#ff7a00",
//                 color: product.stock === 0 ? "#999999" : "#ffffff",
//                 padding: "0.9rem 2rem",
//                 borderRadius: 8,
//                 border: "none",
//                 cursor: product.stock === 0 ? "default" : "pointer",
//                 fontSize: "1rem",
//                 fontWeight: 700,
//                 boxShadow: product.stock === 0 ? "none" : "0 4px 14px rgba(255,122,0,0.35)",
//               }}
//             >
//               {product.stock === 0 ? "Out of stock" : "Add to cart"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Link from "next/link";
// import { apiFetch } from "@/lib/api";


// export const metadata = { title: "All Products" };
// export const revalidate = 60;

// export default async function ProductsPage() {
//   let products = [];
//   let error = null;

//   try {
//     const data = await apiFetch("/api/products");
//     products = data.products;
//   } catch (err) {
//     error = err.message;
//   }

//   if (error) {
//     return (
//       <div>
//         <h1>All Products</h1>
//         <div style={{
//           marginTop: "1.5rem",
//           padding: "1.5rem",
//           background: "#fff5f5",
//           border: "1px solid #fecaca",
//           borderRadius: 8,
//           color: "#991b1b",
//         }}>
//           <strong>Unable to load products.</strong>
//           <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
//             Please try again in a moment.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>All Products</h1>

//       {products.length === 0 ? (
//         <p style={{ color: "#666", marginTop: "1.5rem" }}>No products yet.</p>
//       ) : (
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//           gap: "1.5rem",
//           marginTop: "1.5rem",
//         }}>
//           {products.map((p) => (
//             <Link
//               key={p.id}
//               href={`/products/${p.slug}`}
//               style={{
//                 border: "1px solid #eee",
//                 borderRadius: 8,
//                 overflow: "hidden",
//                 color: "inherit",
//                 textDecoration: "none",
//                 display: "block",
//               }}
//             >
//               <img
//                 src={p.image_url}
//                 alt={p.name}
//                 style={{
//                   width: "100%",
//                   aspectRatio: "1 / 1",
//                   objectFit: "cover",
//                   display: "block",
//                 }}
//               />
//               <div style={{ padding: "0.75rem" }}>
//                 <div style={{ fontWeight: 600 }}>{p.name}</div>
//                 <div style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.25rem" }}>
//                   KSh {(p.price_cents / 100).toLocaleString()}
//                 </div>
//                 {p.stock === 0 && (
//                   <div style={{ color: "crimson", fontSize: "0.85rem", marginTop: "0.25rem" }}>
//                     Out of stock
//                   </div>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import Link from "next/link";
import { apiFetch } from "@/lib/api";
import AddToCartButton from "@/app/components/AddToCartButton";
import image from "next/image";


export const revalidate = 60;

export async function generateMetadata({ params }) {
  let product;

  try {
    ({ product } = await apiFetch(`/api/products/${params.slug}`));
  } catch {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: `KSh ${(product.price_cents / 100).toLocaleString()} — ${product.description}`,
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  let product;

  try {
    ({ product } = await apiFetch(`/api/products/${slug}`));
  } catch {
    notFound();
  }

  return (
    <div>
      <nav
        style={{
          fontSize: "0.85rem",
          color: "#666",
          marginBottom: "1.5rem",
        }}
      >
        <Link href="/products">Products</Link>
        {" / "}
        {product.name}
      </nav>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        <image
          src={product.image_url}
          alt={product.name}
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 8,
            display: "block",
          }}
        />

        <div>
          <h1 style={{ margin: 0 }}>{product.name}</h1>

          <p
            style={{
              fontSize: "1.4rem",
              marginTop: "0.5rem",
              marginBottom: 0,
            }}
          >
            KSh {(product.price_cents / 100).toLocaleString()}
          </p>

          {product.stock > 0 ? (
            <p
              style={{
                color: "#2f855a",
                fontSize: "0.9rem",
                marginTop: "0.25rem",
              }}
            >
              In stock ({product.stock} available)
            </p>
          ) : (
            <p
              style={{
                color: "crimson",
                fontSize: "0.9rem",
                marginTop: "0.25rem",
              }}
            >
              Out of stock
            </p>
          )}

          <p
            style={{
              marginTop: "1rem",
              color: "#444",
              lineHeight: 1.6,
            }}
          >
            {product.description}
          </p>

          <div style={{ marginTop: "1.5rem" }}>
            <AddToCartButton
              productId={product.id}
              stock={product.stock}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
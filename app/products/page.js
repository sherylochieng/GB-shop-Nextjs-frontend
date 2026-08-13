// import { apiFetch } from "../../lib/api";

// export const metadata = { title: "Products" };

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
//       <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
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
//             Please try again in a moment. If the problem persists, contact support.
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
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
//             <div key={p.id} style={{ border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
//               <div style={{
//                 width: "100%",
//                 aspectRatio: "1 / 1",
//                 background: "#f5f5f5",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "0.8rem",
//                 color: "#999",
//               }}>
//                 {p.name}
//               </div>
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
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

// import { apiFetch } from "../../lib/api";
// import Link from "next/link";

// export const metadata = { title: "Products" };

// export default async function ProductsPage() {
//   //added
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // 2 second delay
  
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
//       <main style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 2rem 3rem" }}>
//         <h1 style={{
//           fontSize: "2.25rem",
//           fontWeight: 800,
//           letterSpacing: "-0.03em",
//           color: "#111111",
//           margin: 0,
//         }}>
//           All <span style={{ color: "#ff7a00" }}>Products</span>
//         </h1>
//         <div style={{
//           marginTop: "2rem",
//           padding: "1.5rem",
//           background: "#fff5f5",
//           border: "1px solid #fecaca",
//           borderRadius: 12,
//           color: "#991b1b",
//         }}>
//           <strong style={{ fontWeight: 700 }}>Unable to load products.</strong>
//           <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", fontWeight: 400 }}>
//             Please try again in a moment. If the problem persists, contact support.
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 2rem 3rem" }}>
//       <style>{`
//         .product-card {
//           border: 1px solid #f0f0f0;
//           border-radius: 14px;
//           overflow: hidden;
//           background: #ffffff;
//           transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
//         }
//         .product-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 12px 24px rgba(0,0,0,0.08);
//           border-color: #ffd8b0;
//         }
//         .product-image {
//           width: 100%;
//           aspect-ratio: 1 / 1;
//           background: #fafafa;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 0.8rem;
//           color: #bbbbbb;
//           font-weight: 600;
//           transition: background 0.2s ease;
//         }
//         .product-card:hover .product-image {
//           background: #fff4ea;
//         }
//       `}</style>

//       <p style={{
//         color: "#ff7a00",
//         fontWeight: 700,
//         fontSize: "0.85rem",
//         letterSpacing: "0.08em",
//         textTransform: "uppercase",
//         marginBottom: "0.75rem",
//       }}>
//         Shop the collection
//       </p>

//       <h1 style={{
//         fontSize: "2.25rem",
//         fontWeight: 800,
//         letterSpacing: "-0.03em",
//         color: "#111111",
//         margin: 0,
//       }}>
//         All <span style={{ color: "#ff7a00" }}>Products</span>
//       </h1>

//       {products.length === 0 ? (
//         <p style={{ color: "#999999", marginTop: "2rem", fontSize: "1rem" }}>
//           No products yet — <span style={{ fontWeight: 600, color: "#666666" }}>check back soon.</span>
//         </p>
//       ) : (
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//           gap: "1.75rem",
//           marginTop: "2.5rem",
//         }}>
//           {products.map((p) => (
//             <div key={p.id} className="product-card">
//               <div className="product-image">
//                 {p.name}
//               </div>
//               <div style={{ padding: "1rem" }}>
//                 <div style={{ fontWeight: 700, color: "#111111", fontSize: "0.98rem" }}>
//                   {p.name}
//                 </div>

//                    <img
//                 src={p.image_url}
//                 alt={p.name}
//                 style={{
//                   width: "100%",
//                   aspectRatio: "1 / 1",
//                   objectFit: "cover",
//                   display: "block",
//                 }}
//                />

//                 <div style={{
//                   color: "#ff7a00",
//                   fontSize: "0.95rem",
//                   fontWeight: 700,
//                   marginTop: "0.35rem",
//                 }}>
//                   KSh {(p.price_cents / 100).toLocaleString()}
//                 </div>
//                 {p.stock === 0 && (
//                   <div style={{
//                     color: "#dc2626",
//                     fontSize: "0.8rem",
//                     fontWeight: 600,
//                     marginTop: "0.4rem",
//                     background: "#fef2f2",
//                     display: "inline-block",
//                     padding: "0.15rem 0.5rem",
//                     borderRadius: 4,
//                   }}>
//                     Out of stock
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

import Link from "next/link";
import { apiFetch } from "@/lib/api";

export const metadata = { title: "All Products" };
export const revalidate = 60;

export default async function ProductsPage() {
  let products = [];
  let error = null;

  try {
    const data = await apiFetch("/api/products");
    products = data.products;
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div>
        <h1>All Products</h1>
        <div style={{
          marginTop: "1.5rem",
          padding: "1.5rem",
          background: "#fff5f5",
          border: "1px solid #fecaca",
          borderRadius: 8,
          color: "#991b1b",
        }}>
          <strong>Unable to load products.</strong>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
            Please try again in a moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>All Products</h1>

      {products.length === 0 ? (
        <p style={{ color: "#666", marginTop: "1.5rem" }}>No products yet.</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}>
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              style={{
                border: "1px solid #eee",
                borderRadius: 8,
                overflow: "hidden",
                color: "inherit",
                textDecoration: "none",
                display: "block",
              }}
            >
              <img
                src={p.image_url}
                alt={p.name}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{ padding: "0.75rem" }}>
                <div style={{ fontWeight: 600 }}>{p.name}</div>
                <div style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                  KSh {(p.price_cents / 100).toLocaleString()}
                </div>
                {p.stock === 0 && (
                  <div style={{ color: "crimson", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                    Out of stock
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
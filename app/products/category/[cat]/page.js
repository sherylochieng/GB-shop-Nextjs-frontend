import { notFound } from "next/navigation";
import Link from "next/link";
import { apiFetch } from "@/lib/api";

export async function generateMetadata({ params }) {
  const categoryName = params.cat.charAt(0).toUpperCase() + params.cat.slice(1);
  return { title: categoryName };
}

export default async function CategoryPage({ params }) {
  const { products } = await apiFetch(
    `/api/products?category=${encodeURIComponent(params.cat)}`
  );

  if (products.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1 style={{ textTransform: "capitalize", margin: "0 0 1.5rem 0" }}>
        {params.cat}
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "1rem",
      }}>
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.slug}`}
            style={{
              border: "1px solid #eee",
              borderRadius: 8,
              padding: "0.75rem",
              color: "inherit",
              textDecoration: "none",
              display: "block",
            }}
          >
            <div style={{ fontWeight: 600 }}>{p.name}</div>
            <div style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.25rem" }}>
              KSh {(p.price_cents / 100).toLocaleString()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
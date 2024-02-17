import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Link href="/products">Products</Link>
      <Link href="/addproduct">Add Product</Link>
    </main>
  );
}

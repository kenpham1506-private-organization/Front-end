import Link from 'next/link';


export default function Home() {
return (
<main>
<h1>Packaging Company</h1>
<p>Quality packaging solutions</p>
<Link href="/products">View Products</Link>
</main>
);
}
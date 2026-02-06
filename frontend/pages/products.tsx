import { useEffect, useState } from 'react';
import { api } from '../lib/api';


export default function Products() {
  const [products, setProducts] = useState<any[]>([]);


  useEffect(() => {
  api('/api/products').then(setProducts);
  }, []);


  return (
    <div>
     {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          {p.externalUrl ? (
            <a href={p.externalUrl} target="_blank">Buy externally</a>
          ) : (
            <button>Add to cart</button>
          )}
        </div>
      ))}
    </div>
  );
}
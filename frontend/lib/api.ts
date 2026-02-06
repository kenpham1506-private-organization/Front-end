const API = process.env.NEXT_PUBLIC_API_URL!;


export async function api(path: string, options?: RequestInit) {
const res = await fetch(API + path, {
...options,
headers: {
'Content-Type': 'application/json',
...(options?.headers || {})
}
});
return res.json();
}
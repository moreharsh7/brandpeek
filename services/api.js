const BASE_URL = 'https://68abffa47a0bbe92cbb8e174.mockapi.io/api/v1';

export async function fetchBrands() {
  const res = await fetch(`${BASE_URL}/brands`);
  if (!res.ok) throw new Error('Failed to fetch brands');
  return res.json();
}

export async function fetchBrandById(id) {
  const res = await fetch(`${BASE_URL}/brands/${id}`);
  if (!res.ok) throw new Error('Failed to fetch brand details');
  return res.json();
}

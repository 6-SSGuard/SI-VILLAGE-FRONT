interface FetchOptions {
  method?: string; // GET, POST, PUT, DELETE, etc.
  headers?: Record<string, string>; // Additional headers (e.g., Authorization)
  body?: any; // For POST/PUT requests
  token?: string; // Optional token
}

async function fetchFromApi(endpoint: string, options: FetchOptions = {}) {
  const { method = 'GET', headers = {}, body, token } = options;

  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${process.env.API_BASE_URL}${endpoint}`, {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  return null;
}

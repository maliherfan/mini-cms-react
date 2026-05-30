import { useState, useCallback, useEffect } from 'react';

const BASE_URL = 'http://localhost:3001/pages';

export function usePages({ autoFetch = false } = {}) {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const managePage = useCallback(async (method, payload = {}) => {
    setLoading(true);
    setError(null);

    try {
      let url = BASE_URL;
      let options = { method };

      switch (method.toUpperCase()) {
        case 'GET': {
          if (payload?.id) {
            url = `${BASE_URL}/${payload.id}`;
          } else if (payload?.slug) {
            url = `${BASE_URL}?slug=${payload.slug}`;
          }

          const res = await fetch(url);
          if (!res.ok) throw new Error('GET failed');
          const data = await res.json();

          if (payload?.id) return data;
          if (payload?.slug) return data[0] || null;

          setPages(Array.isArray(data) ? data : []);
          break;
        }

        case 'POST': {
          options.headers = { 'Content-Type': 'application/json' };
          options.body = JSON.stringify(payload);

          const res = await fetch(url, options);
          if (!res.ok) throw new Error('POST failed');

          const created = await res.json();
          setPages((prev) => [...prev, created]);
          return created;
        }

        case 'PUT': {
          if (!payload.id) throw new Error('PUT requires id');

          url = `${BASE_URL}/${payload.id}`;
          options.headers = { 'Content-Type': 'application/json' };
          options.body = JSON.stringify(payload);

          const res = await fetch(url, options);
          if (!res.ok) throw new Error('PUT failed');

          const updated = await res.json();
          setPages((prev) =>
            prev.map((page) => (page.id === updated.id ? updated : page))
          );
          return updated;
        }

        case 'DELETE': {
          if (!payload.id) throw new Error('DELETE requires id');

          url = `${BASE_URL}/${payload.id}`;

          const res = await fetch(url, { method: 'DELETE' });
          if (!res.ok) throw new Error('DELETE failed');

          setPages((prev) => prev.filter((page) => page.id !== payload.id));
          return true;
        }

        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    } catch (err) {
      console.error('managePage error:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (autoFetch) {
      managePage('GET');
    }
  }, [autoFetch, managePage]);

  return { pages, loading, error, managePage };
}

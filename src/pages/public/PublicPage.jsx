import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePages } from '../../hooks/usePages';
import PageRenderer from '../../renderer/PageRenderer';

export default function PublicPage() {
  //get page name from address
  const { slug } = useParams();
  const { managePage } = usePages();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const pageData = await managePage('GET', { slug });
        setPage(pageData);
      } catch (err) {
        console.error('Page load failed:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPageData();
  }, [slug, managePage]);

  if (loading) return <div>Loading...</div>;
  if (!page) return <div>404 - Page Not Found</div>;

  return (
    <div className="public-page-wrapper">
      {/* use pagerenderer in public mode */}
      <PageRenderer sections={page.sections || []} mode="public" />
    </div>
  );
}

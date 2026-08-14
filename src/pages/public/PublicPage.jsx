import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePages } from '../../hooks/usePages';
import PageRenderer from '../../renderer/PageRenderer';
import '../styles/CommonPagesStyle.css';
import './PublicPage.css';

export default function PublicPage() {
  //get page name from address
  const { slug } = useParams();
  const { managePage } = usePages();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        setError(null);
        setPage(null);

        const pageData = await managePage('GET', { slug });
        setPage(pageData);
      } catch (err) {
        console.error('Page load failed:', err);
        setError('Failed to load page. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPageData();
  }, [slug, managePage]);

  if (loading) {
    return (
      <div className="page-loading">
        <div className="page-spinner"></div>
        <span>در حال بارگذاری...</span>
      </div>
    );
  }
  if (error) return <div className="error-message">{error}</div>;
  if (!page) return <div className="error-message">404 - Page Not Found</div>;

  return (
    <div className="public-page-wrapper">
      {/* use pagerenderer in public mode */}
      <PageRenderer sections={page.sections || []} mode="public" />
    </div>
  );
}

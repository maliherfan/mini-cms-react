import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePages } from '../../../hooks/usePages';
import CreateDeletePageModal from '../../../components/modal/CreateDeletePageModal';
import './PagesDashboard.css';

export default function PagesDashboard() {
  const { pages, loading, error, managePage } = usePages({ autoFetch: true });

  const [modalType, setModalType] = useState(null); // "create" | "delete"
  const [selectedPage, setSelectedPage] = useState(null);

  const openCreateModal = () => {
    setModalType('create');
  };

  const openDeleteModal = (page) => {
    setSelectedPage(page);
    setModalType('delete');
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedPage(null);
  };

  const handleConfirm = async (data) => {
    if (modalType === 'create') {
      await managePage('POST', { ...data, sections: [] });
    }

    if (modalType === 'delete') {
      await managePage('DELETE', { id: data });
    }

    closeModal();
  };

  return (
    <div className="pages-dashboard">
      <h1 className="pages-dashboard-title">داشبورد صفحات</h1>

      <button
        type="button"
        className="pages-dashboard-button pages-dashboard-button-create"
        onClick={openCreateModal}
      >
        + ایجاد صفحه جدید
      </button>

      {loading && <p className="pages-dashboard-status">Loading...</p>}
      {error && <p className="pages-dashboard-error">{error}</p>}

      <div className="pages-dashboard-table-wrap">
        <table className="pages-dashboard-table">
          <thead>
            <tr>
              <th>عنوان</th>
              <th>Slug</th>
              <th>اقدامات</th>
            </tr>
          </thead>

          <tbody>
            {pages.map((page) => (
              <tr key={page.id}>
                <td>{page.title}</td>
                <td>
                  <Link
                    className="pages-dashboard-slug-link"
                    to={`/pages/${page.slug}`}
                  >
                    <span className="pages-dashboard-slash">/</span>
                    <span className="pages-dashboard-slug">{page.slug}</span>
                  </Link>
                </td>
                <td className="pages-dashboard-actions">
                  <Link
                    className="pages-dashboard-button pages-dashboard-button-edit"
                    to={`/admin/editor/${page.id}`}
                  >
                    ویرایش
                  </Link>
                  <button
                    className="pages-dashboard-button pages-dashboard-button-delete"
                    onClick={() => openDeleteModal(page)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal conditional rendering */}
      {modalType && (
        <CreateDeletePageModal
          type={modalType}
          page={selectedPage}
          pages={pages}
          onClose={closeModal}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

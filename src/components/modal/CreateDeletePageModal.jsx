import { useState } from 'react';
import './CreateDeletePageModal.css';

export default function CreateDeletePageModal({
  type, // "create" | "delete"
  page,
  pages,
  onClose,
  onConfirm,
}) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [validationError, setValidationError] = useState('');

  if (!type) return null;

  const handleCreate = (e) => {
    e.preventDefault();
    const isTitleDuplicate = pages.some(
      (p) => p.title.trim().toLowerCase() === title.trim().toLowerCase()
    );
    const isSlugDuplicate = pages.some(
      (p) => p.slug.trim().toLowerCase() === slug.trim().toLowerCase()
    );
    if (isTitleDuplicate) {
      setValidationError('این عنوان صفحه قبلاً استفاده شده است.');
      return;
    }
    if (isSlugDuplicate) {
      setValidationError('این Slug تکراری است.');
      return;
    }
    setValidationError('');
    onConfirm({ title, slug });
  };

  return (
    <div className="page-modal-backdrop">
      <div className="page-modal">
        {type === 'create' && (
          <>
            <h2 className="page-modal-title">ایجاد صفحه جدید</h2>

            <form className="page-modal-form" onSubmit={handleCreate}>
              <input
                className="page-modal-input"
                type="text"
                placeholder="Page Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setValidationError('');
                }}
                required
              />

              <input
                className="page-modal-input page-modal-input-slug"
                type="text"
                placeholder="Slug"
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value);
                  setValidationError('');
                }}
                required
              />

              {validationError && (
                <p className="page-modal-error-message">{validationError}</p>
              )}

              <div className="page-modal-actions">
                <button
                  className="page-modal-button page-modal-button-create"
                  type="submit"
                >
                  ایجاد
                </button>

                <button
                  className="page-modal-button page-modal-button-cancel"
                  type="button"
                  onClick={onClose}
                >
                  کنسل
                </button>
              </div>
            </form>
          </>
        )}

        {type === 'delete' && (
          <>
            <h2 className="page-modal-title">حذف صفحه</h2>

            <p className="page-modal-text">
              آیا از حذف صفحه "{page?.title}" مطمئن هستید؟
            </p>

            <div className="page-modal-actions">
              <button
                type="button"
                className="page-modal-button page-modal-button-delete"
                onClick={() => onConfirm(page.id)}
              >
                حذف
              </button>

              <button
                type="button"
                className="page-modal-button page-modal-button-cancel"
                onClick={onClose}
              >
                کنسل
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

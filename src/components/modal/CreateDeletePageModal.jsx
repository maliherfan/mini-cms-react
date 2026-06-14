import { useState } from 'react';
import './CreateDeletePageModal.css';

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') //replace whitespaces with -
    .replace(/[^\w\u0600-\u06FF-]+/g, '') //remove invalid characters(persian supported)
    .replace(/--+/g, '-'); //remove additional -
};

export default function CreateDeletePageModal({
  type, // "create" | "delete"
  page,
  pages = [],
  onClose,
  onConfirm,
}) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isAutoSlug, setIsAutoSlug] = useState(true);

  if (!type) return null;

  const handleCreate = (e) => {
    e.preventDefault();
    const normalizedTitle = title.trim();
    const normalizedSlug = slug.trim().toLowerCase();

    if (!normalizedTitle || !normalizedSlug) {
      setValidationError('لطفاً تمامی فیلدها را پر کنید.');
      return;
    }

    const isTitleDuplicate = pages.some(
      (p) => p.title.trim().toLowerCase() === normalizedTitle.toLowerCase()
    );
    const isSlugDuplicate = pages.some(
      (p) => p.slug.trim().toLowerCase() === normalizedSlug
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
    onConfirm({
      title: normalizedTitle,
      slug: normalizedSlug,
    });
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setValidationError('');

    if (isAutoSlug) {
      setSlug(slugify(newTitle));
    }
  };

  const handleSlugChange = (e) => {
    const val = e.target.value;

    setSlug(val);
    setValidationError('');
    setIsAutoSlug(false);

    if (val === '') {
      setIsAutoSlug(true);
      setSlug(slugify(title));
    }
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
                onChange={handleTitleChange}
                autoFocus
                required
              />

              <input
                className="page-modal-input page-modal-input-slug"
                type="text"
                placeholder="Slug"
                value={slug}
                onChange={handleSlugChange}
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
                onClick={() => onConfirm(page?.id)}
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

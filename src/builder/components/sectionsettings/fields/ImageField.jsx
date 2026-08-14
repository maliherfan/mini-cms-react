import { useState, useId } from 'react';
export default function ImageField({ field, value, onChange }) {
  const [error, setError] = useState(false);
  
  return (
    <div className="admin-field">
      <label>{field.label}</label>

      <input
        type="text"
        placeholder="Image URL"
        value={value || ''}
        onChange={(e) => {
          setError(false);
          onChange(e.target.value);
        }}
      />

      {value && !error && (
        <div className="editor-image-preview">
          <img
            src={value}
            alt="preview"
            className="editor-image-preview-img"
            onError={() => setError(true)}
          />

          <button
            type="button"
            onClick={() => {
              setError(false);
              onChange('');
            }}
            className="editor-button editor-button-remove"
          >
            حذف تصویر
          </button>
        </div>
      )}
      {error && <div className="editor-image-error">Image failed to load</div>}
    </div>
  );
}

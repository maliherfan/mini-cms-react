import { useState, useId } from 'react';
export default function ImageField({ field, value, onChange }) {
  const [error, setError] = useState(false);
  const inputId = useId();
  const handleFile = (file) => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    onChange(url);
  };
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

      <input
        id={inputId}
        type="file"
        accept="image/*"
        className="editor-file-input"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      <label htmlFor={inputId} className="editor-button editor-button-file">
        Choose Image
      </label>

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
            Remove
          </button>
        </div>
      )}
      {error && <div className="editor-image-error">Image failed to load</div>}
    </div>
  );
}

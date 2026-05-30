export default function ImageField({ field, value, onChange }) {
  return (
    <div className="admin-field">
      <label>{field.label}</label>

      <input
        type="text"
        placeholder="Image URL"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <div className="editor-image-preview">
          <img src={value} alt="preview" className="editor-image-preview-img" />
        </div>
      )}
    </div>
  );
}

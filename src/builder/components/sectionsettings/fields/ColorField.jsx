export default function ColorField({ field, value, onChange }) {
  return (
    <div className="admin-field">
      <label>{field.label}</label>

      <div className="editor-color-row">
        <input
          type="color"
          value={value || '#000000'}
          onChange={(e) => onChange(e.target.value)}
        />

        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

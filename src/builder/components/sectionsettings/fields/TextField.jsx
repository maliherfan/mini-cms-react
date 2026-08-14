export default function TextField({ field, value, onChange }) {
  return (
    <div className="admin-field">
      <label>{field.label}</label>
      <input
        type="text"
        value={value || ''}
        placeholder={field.placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

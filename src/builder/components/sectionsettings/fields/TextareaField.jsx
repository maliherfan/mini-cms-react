export default function TextareaField({ field, value, onChange }) {
  return (
    <div className="admin-field">
      <label>{field.label}</label>
      <textarea
        rows={5}
        value={value || ''}
        placeholder={field.placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

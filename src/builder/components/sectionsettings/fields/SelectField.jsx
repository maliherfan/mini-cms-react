export default function SelectField({ field, value, onChange }) {
  return (
    <div className="admin-field">
      <label>{field.label}</label>
      <select value={value || ''} onChange={(e) => onChange(e.target.value)}>
        {field.options?.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

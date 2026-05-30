export default function SwitchField({ field, value, onChange }) {
  return (
     <div className="admin-field admin-field-switch">
      <label>{field.label}</label>

      <input
        type="checkbox"
        checked={!!value}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
}

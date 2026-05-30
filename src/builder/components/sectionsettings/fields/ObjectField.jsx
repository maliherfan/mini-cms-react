import { fieldRegistry } from '../fieldRegistry';

export default function ObjectField({ field, value = {}, onChange }) {
  const handleFieldChange = (key, newValue) => {
    onChange({
      ...(value || {}),
      [key]: newValue,
    });
  };

  return (
    <div className="admin-field editor-object-group">
      {field.label && (
        <label className="object-group-label">{field.label}</label>
      )}
      <div className="editor-object-content">
        {(field.fields || []).map((subField) => {
          const SubComponent = fieldRegistry[subField.type];
          if (!SubComponent) return null;

          return (
            <SubComponent
              key={subField.name}
              field={subField}
              value={(value || {})[subField.name]}
              onChange={(val) => handleFieldChange(subField.name, val)}
            />
          );
        })}
      </div>
    </div>
  );
}

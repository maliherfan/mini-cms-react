import { fieldRegistry } from '../fieldRegistry';
import { shouldShowField } from '../../../utils/shouldShowField';

export default function ArrayField({ field, value = [], onChange }) {
  const handleItemChange = (index, key, newValue) => {
    const updated = [...value];
    updated[index] = {
      ...updated[index],
      [key]: newValue,
    };
    onChange(updated);
  };

  const addItem = () => {
    const buildDefaultValue = (f) => {
      if (f.type === 'array') return [];
      if (f.type === 'switch') return false;
      if (f.type === 'object') {
        const obj = {};
        (f.fields || []).forEach((sub) => {
          obj[sub.name] = buildDefaultValue(sub);
        });
        return obj;
      }
      return '';
    };

    const newItem = {};
    field.itemfields.forEach((f) => {
      newItem[f.name] = buildDefaultValue(f);
    });

    onChange([...value, newItem]);
  };

  const removeItem = (index) => {
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="admin-field editor-array">
      <label>{field.label}</label>

      {value.map((item, index) => (
        <div key={index} className="editor-array-item">
          {field.itemfields.map((subField) => {
            if (!shouldShowField(subField, item)) return null;

            const SubComponent = fieldRegistry[subField.type];
            if (!SubComponent) return null;

            return (
              <SubComponent
                key={subField.name}
                field={subField}
                value={item[subField.name]}
                onChange={(val) => handleItemChange(index, subField.name, val)}
              />
            );
          })}
          <div className="editor-array-actions">
            <button
              type="button"
              className="editor-button editor-button-delete"
              onClick={() => removeItem(index)}
            >
              حذف آیتم
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="editor-button editor-button-add"
        onClick={addItem}
      >
        افزودن آیتم
      </button>
    </div>
  );
}

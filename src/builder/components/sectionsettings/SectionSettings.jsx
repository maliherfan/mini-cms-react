import { useMemo } from 'react';
import { fieldRegistry } from './fieldRegistry';
import { useEditorStore } from '../../../store/useEditorStore';
import { sectionSchemas } from '../../../sections/schemas/sectionSchemas';
import '../../styles/builder.css';

function SectionSettings() {
  const selectedSection = useEditorStore((s) =>
    s.sections.find((sec) => sec.id === s.selectedSectionId)
  );

  const updateSectionProps = useEditorStore((s) => s.updateSectionProps);

  const selectedSchema = useMemo(() => {
    return selectedSection ? sectionSchemas[selectedSection.type] : null;
  }, [selectedSection?.type]);

  if (!selectedSection || !selectedSchema) {
    return (
      <div className="section-settings">
        <p>برای ویرایش تنظیمات، یک سکشن را انتخاب کنید.</p>
      </div>
    );
  }

  return (
    <div className="section-settings">
      <h3 className="section-settings-title">
        {selectedSection.type} Settings
      </h3>

      {selectedSchema.map((field) => {
        const FieldComponent = fieldRegistry[field.type];

        if (!FieldComponent) return null;

        return (
          <FieldComponent
            key={field.name}
            label={field.label}
            field={field}
            value={selectedSection.props?.[field.name]}
            onChange={(value) => updateSectionProps(field.name, value)}
          />
        );
      })}
    </div>
  );
}

export default SectionSettings;

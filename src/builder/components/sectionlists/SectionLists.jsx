import { sectionRegistry } from '../../../sections/sectionRegistry';
import { useEditorStore } from '../../../store/useEditorStore';
import '../../styles/builder.css';

export default function SectionList() {
  const addSection = useEditorStore((s) => s.addSection);
  const types = Object.keys(sectionRegistry);

  return (
    <div className="section-list">
      <h3 className="section-list-title">Sections</h3>

      {types.map((type) => (
        <button
          key={type}
          className="section-list-button"
          onClick={() => addSection(type)}
        >
          + {type}
        </button>
      ))}
    </div>
  );
}

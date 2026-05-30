import SectionControls from '../sectioncontrols/SectionControls';
import { useEditorStore } from '../../../store/useEditorStore';
import '../../styles/builder.css';

export default function SectionWrapper({ section, children }) {
  const isSelected = useEditorStore(
    (state) => state.selectedSectionId === section.id
  );
  const setSelectedSectionId = useEditorStore(
    (state) => state.setSelectedSectionId
  );
  return (
    <div
      className={`section-wrapper ${isSelected ? 'is-selected' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedSectionId(section.id);
      }}
    >
      <SectionControls sectionId={section.id} />
      {children}
    </div>
  );
}

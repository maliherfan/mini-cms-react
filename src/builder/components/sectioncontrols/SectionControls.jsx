import { useEditorStore } from '../../../store/useEditorStore';
import '../../styles/builder.css';

export default function SectionControls({ sectionId }) {
  const handleAction = useEditorStore((s) => s.handleSectionAction);

  return (
    <div className="section-controls">
      <button onClick={() => handleAction(sectionId, 'moveUp')}>↑</button>
      <button onClick={() => handleAction(sectionId, 'moveDown')}>↓</button>
      <button onClick={() => handleAction(sectionId, 'delete')}>✕</button>
    </div>
  );
}

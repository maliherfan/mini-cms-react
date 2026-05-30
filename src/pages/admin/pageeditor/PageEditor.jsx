import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePages } from '../../../hooks/usePages';
import PageRenderer from '../../../renderer/PageRenderer';
import SectionList from '../../../builder/components/sectionlists/SectionLists';
import SectionSettings from '../../../builder/components/sectionsettings/SectionSettings';
import { useEditorStore } from '../../../store/useEditorStore';
import './pageEditor.css';

export default function PageEditor() {
  // get id from url
  const { id } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(null);
  const { managePage } = usePages();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const sections = useEditorStore((s) => s.sections);
  const initEditor = useEditorStore((s) => s.initEditor);
  const isDirty = useEditorStore((s) => s.isDirty);
  const setSaved = useEditorStore((s) => s.setSaved);

  //loading page from server
  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const data = await managePage('GET', { id });
        if (data) {
          setPage(data);
          initEditor(data.sections || []);
        }
      } catch (err) {
        console.error('Load failed:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPage();
  }, [id, initEditor, managePage]);

  //save on server
  const handleSave = async () => {
    try {
      setSaving(true);
      const updatedPage = {
        ...page,
        sections: sections,
      };
      const savedPage = await managePage('PUT', updatedPage);
      if (savedPage) {
        setPage(savedPage);
        initEditor(savedPage.sections || []);
      }
      setSaved();
      alert('Page updated successfully!');
    } catch (err) {
      alert('Save failed!');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return <div className="page-editor-loading">Loading Builder...</div>;

  return (
    <div className="page-editor">
      <div className="page-editor-header">
        <span className="page-editor-title">Editing: {page?.title}</span>
        <div className="page-editor-header-actions">
          <button
            type="button"
            className="page-editor-button page-editor-button-cancel"
            onClick={() => navigate('/admin')}
          >
            Dashboard
          </button>
          <button
            type="button"
            className="page-editor-button page-editor-button-save"
            onClick={handleSave}
            disabled={saving || !isDirty}
          >
            {saving ? 'Saving...' : 'Save Page'}
          </button>
        </div>
      </div>

      <div className="page-editor-body">
        <aside className="page-editor-sidebar page-editor-sidebar-right">
          <SectionList />
        </aside>

        <main className="page-editor-preview">
          <PageRenderer sections={sections} mode="admin" />
        </main>

        <aside className="page-editor-sidebar page-editor-sidebar-left">
          <SectionSettings />
        </aside>
      </div>
    </div>
  );
}

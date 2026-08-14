import { create } from 'zustand';
import { getDefaultSectionProps } from '../sections/sectionDefaults';

export const useEditorStore = create((set, get) => ({
  sections: [],
  selectedSectionId: null,
  isDirty: false,

  initEditor: (sections) =>
    set({
      sections: sections || [],
      selectedSectionId: null,
      isDirty: false,
    }),

  setSelectedSectionId: (id) => set({ selectedSectionId: id }),

  addSection: (type) => {
    const newSection = {
      id: `sec_${Date.now()}`,
      type,
      props: getDefaultSectionProps(type),
    };
    set((state) => ({
      sections: [...state.sections, newSection],
      selectedSectionId: newSection.id,
      isDirty: true,
    }));
  },

  updateSectionProps: (key, value) => {
    const { selectedSectionId, sections } = get();
    if (!selectedSectionId) return;
    set({
      sections: sections.map((s) =>
        s.id === selectedSectionId
          ? { ...s, props: { ...s.props, [key]: value } }
          : s
      ),
      isDirty: true,
    });
  },

  handleSectionAction: (id, action) => {
    const { sections, selectedSectionId } = get();
    let newSections = [...sections];
    const index = newSections.findIndex((s) => s.id === id);

    if (action === 'delete') {
      newSections = newSections.filter((s) => s.id !== id);
      set({
        sections: newSections,
        selectedSectionId: selectedSectionId === id ? null : selectedSectionId,
        isDirty: true,
      });
    } else {
      if (action === 'moveUp' && index > 0) {
        [newSections[index - 1], newSections[index]] = [
          newSections[index],
          newSections[index - 1],
        ];
      } else if (action === 'moveDown' && index < newSections.length - 1) {
        [newSections[index + 1], newSections[index]] = [
          newSections[index],
          newSections[index + 1],
        ];
      }
      set({ sections: newSections, isDirty: true });
    }
  },

  setSaved: () => set({ isDirty: false }),
}));

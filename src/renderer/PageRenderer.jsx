import { sectionRegistry } from '../sections/sectionRegistry';
import SectionWrapper from '../builder/components/sectionwrapper/SectionWrapper';

export default function PageRenderer({ sections = [], mode = 'public' }) {
  if (!Array.isArray(sections) || sections.length === 0) return null;
  return (
    <>
      {sections.map((section) => {
        const Component = sectionRegistry[section.type];
        if (!Component) return null;

        if (mode === 'admin') {
          return (
            <SectionWrapper key={section.id} section={section}>
              <Component {...section.props} />
            </SectionWrapper>
          );
        }

        return <Component key={section.id} {...section.props} />;
      })}
    </>
  );
}

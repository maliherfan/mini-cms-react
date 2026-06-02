import { useState } from 'react';
import '../../styles/sections.css';
import './faq.css';

export default function FAQSection(props) {
  const { title, items = [], backgroundColor } = props;
  const [openIndex, setOpenIndex] = useState(null);
  const cssVars = {
    '--faq-bg': backgroundColor,
  };
  return (
    <div className="faq-section" style={cssVars}>
      {title && <h3 className="faq-title">{title}</h3>}
      <div className="faq-container">
        {items.map((item, i) => (
          <div key={i} className="faq-item">
            <button
              type="button"
              className="faq-question"
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.question}
            </button>

            {openIndex === i && (
              <div id={`faq-answer-${i}`} className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import '../../styles/sections.css';
import { useState } from 'react';

export default function FAQSection({ title, items = [], backgroundColor }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-component" style={{ backgroundColor }}>
      {title && <h3 className="faq-component-title">{title}</h3>}
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

            {openIndex === i && <div id={`faq-answer-${i}`  } className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

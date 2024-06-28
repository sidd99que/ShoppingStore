import React from 'react';

function Section({ id, children }) {
  return (
    <section id={id} className="vh-80">
      {children}
    </section>
  );
}

export default Section;

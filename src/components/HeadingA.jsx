import React from 'react';

const HeadingA = ({ text, className }) => {
  // "#" প্রতীককে প্রতিস্থাপন করে "<span class='one'>" এবং "</span>" এর মাধ্যমে
  let clrheading = text.split('#').map((part, index) =>
    index % 2 === 1 ? `<span class='one'>${part}</span>` : part
  ).join('');

  return (
    <h1 className={className} dangerouslySetInnerHTML={{ __html: clrheading }}></h1>
  );
};

export default HeadingA;





// import React from 'react';


// const TextComponent = ({ className, text, one }) => {
//   return (
//     <div className={className}>
//       {text.split('#').map((word, index) => (
//         <span key={index} className={one.includes(word) ? 'text-btnclr' : ''}>
//           {word}{' '}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default TextComponent;
 
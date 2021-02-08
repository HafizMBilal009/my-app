import React from 'react';
function QoutesTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Quote</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {props.quotesList.map((quote) => (
          <tr>
            <td>{quote.quote}</td>
            <td>{quote.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default QoutesTable;

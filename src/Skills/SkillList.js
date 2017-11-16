import React from 'react';

const skillList = (props) => (
  <tr>
    <td className="mdl-data-table__cell--non-numeric">{props.title}</td>
    <td className="mdl-data-table__cell--non-numeric">{props.skills}</td>
  </tr>
);

export default skillList;

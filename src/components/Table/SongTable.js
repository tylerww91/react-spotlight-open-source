import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import songs from '../../songData.js';
import './SongTable.css';
import 'rsuite-table/dist/css/rsuite-table.css';

// const customColumn = React.forwardRef((props, ref) => {
//   return <Column ref={ref} sortable align="center" flexGrow={1} fullText {...props} />;
// });

export default function SongTable() {
  return (
    <div className="table">
      <Table height={400} data={songs}>
        <Column align="left">
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>title</HeaderCell>
          <Cell dataKey="title" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>artist</HeaderCell>
          <Cell dataKey="artist" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>album</HeaderCell>
          <Cell dataKey="album" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>genre</HeaderCell>
          <Cell dataKey="genre" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>year</HeaderCell>
          <Cell dataKey="year" />
        </Column>
      </Table>
    </div>
  );
}

'use strict';

{
  const createColumn = (col) => {
    const source = Array.from({ length: 15 }, (_, i) => i + 1 + 15 * col);
    return Array.from(
      { length: 5 },
      () => source.splice(Math.floor(Math.random() * source.length), 1)[0]
    );
  };

  const createColumns = () => {
    const columns = Array.from({ length: 5 }, (_, i) => createColumn(i));
    columns[2][2] = 'FREE';
    return columns;
  };

  const createCell = (content, isFree = false) => {
    const cell = document.createElement('td');
    cell.textContent = content;
    if (isFree) cell.classList.add('free');
    return cell;
  };

  const renderBingo = (columns) => {
    const tbody = document.querySelector('tbody');
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = createCell(columns[col][row], columns[col][row] === 'FREE');
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  };

  const initBingo = () => {
    const columns = createColumns();
    renderBingo(columns);
  };

  initBingo();
}

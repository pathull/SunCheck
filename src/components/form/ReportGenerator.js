import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { format } from 'date-fns';

const generatePDF = (formArg) => {
  const doc = new jsPDF();
  const tableColumn = ['Date', 'IU', 'Description'];
  const tableRows = [];

  formArg.forEach((event) => {
    const eventData = [format(new Date(event.date), 'yyyy-MM-dd'), event.check, event.activity];

    tableRows.push(eventData);
  });

  doc.autoTable(tableColumn, tableRows);
  const date = Date().split(' ');
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { NavLink } from 'react-router-dom';

export default function GraphTable() {
  const [rows, setRows] = React.useState([
    { id: 1, SMS_type: '00/00/0000', Scheduled_templet_name: '900000000', SMS_frequency: 'Name1', Trigger_point: 'oiseifvfvefv', Targeted_subscribers: 'All Member', Template_id: '5,000', SMS_content: 'jhbhfef', SMS_status: 'wgbcvhww', count: 0 },
    { id: 2, SMS_type: '00/00/0000', Scheduled_templet_name: '900000000', SMS_frequency: 'Name1', Trigger_point: 'A2000110', Targeted_subscribers: 'All Member', Template_id: '5,000', SMS_content: 'jhbhfef', SMS_status: 'wgbcvhww', count: 0 },
    { id: 3, SMS_type: '00/00/0000', Scheduled_templet_name: '900000000', SMS_frequency: 'Name1', Trigger_point: 'A2000110', Targeted_subscribers: 'All Member', Template_id: '5,000', SMS_content: 'jhbhfef', SMS_status: 'wgbcvhww', count: 0 },
  ]);

  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    console.log(rows);
    setRows(rows.map(row => row.id === +event.target.id ? { ...row, Targeted_subscribers: event.target.value } : row));

  };
  const handleIncrement = (id) => {
    setRows(rows.map(row => row.id === id ? { ...row, count: row.count + 1 } : row));
  };

  const handleDecrement = (id) => {
    setRows(rows.map(row => row.id === id ? { ...row, count: row.count - 1 } : row));
  };

  const columns = [
    { field: 'SMS_type', headerName: 'SMS type', flex: 1 },
    { field: 'Scheduled_templet_name', headerName: 'Scheduled templet name', flex: 1 },
    {
      field: 'Trigger_point', headerName: 'Trigger point', flex: 1.5,
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
            <div style={{ width: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <button style={{ width: '30px', height: '30px', backgroundColor: 'blue' }} onClick={() => handleDecrement(params.id)}>-</button>
              <span style={{ margin: '0 0', fontSize: '20px', width: '30px', height: '30px', textAlign: 'center' }}>{params.row.count}</span>
              <button style={{ width: '30px', height: '30px', backgroundColor: 'blue' }} onClick={() => handleIncrement(params.id)}>+</button>
            </div>
            <span style={{ textAlign: 'start', width: '' }}> {params.value}</span>
          </div>
        );
      },
    },
    {
      field: 'SMS_frequency',
      headerName: 'SMS frequency',
      flex: 1,
      renderCell: (params) => {
        return (
          <NavLink>{params.value}</NavLink>
        );
      },
    },
    {
      field: 'Targeted_subscribers',
      headerName: 'Targeted subscribers',
      flex: 1,
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
             <select  onChange={handleChange} id={params.id} style={{ padding: '10px', fontSize: '16px',border: 'none',
    background: 'transparent' }}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
          </div>
        );
      },
    },
    {
      field: 'Template_id',
      headerName: 'Template id',
      flex: 1,
    },
    {
      field: 'SMS_content',
      headerName: 'SMS content',
      flex: 1,
    },
    {
      field: 'SMS_status',
      headerName: 'SMS status',
      flex: 1,
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        sx={{
          maxWidth: "300",
          '& .MuiDataGrid-cell': {
            fontSize: "14px",
            color: 'rgb(34, 43, 69)',
            padding: "16px",
            lineHeight: "22px",
            fontFamily: 'open sans',
            fontWeight: "400",
            borderBottom: '0.5px solid #222B451A'
          },
          '& .MuiDataGrid-columnHeader': {
            fontSize: '16px',
            lineHeight: '24px',
            fontFamily: 'open sans',
            color: 'rgb(34, 43, 69)',
            background: '#F9FAFB',
            padding: "18px",
            backgroundColor: "#F9FAFB",
            fontWeight: "600",
          },
          '& .MuiDataGrid-columnHeader:first-child': {
            borderLeft: '0px solid rgb(34, 43, 69)',
          },
          '& .MuiDataGrid-cell:first-child': {
            borderLeft: '0px solid rgb(34, 43, 69)',
          },
          "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
            fontSize: '16px',
            lineHeight: '22px',
            fontFamily: 'open sans',
            color: 'rgb(34, 43, 69)',
            fontWeight: "600",
          },
          "& .css-1hlmldf-MuiDataGrid-columnHeaders": {
            borderBottom: "none"
          },
          "& .css-7rq5hm": {
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScrollerContent--overflowed .MuiDataGrid-row--lastVisible .MuiDataGrid-cell": {
            borderBottomColor: "#222B451A",
            borderBottom: '2.5px solid #222B451A',
          },
          "& .css-cc8tf1": {
            textOverflow: "ellipsis",
            overflow: 'hidden',
            whiteSpace: "nowrap",
            fontWeight: "600"
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            overflow: 'visible',
          }
        }}
        rows={rows}
        columns={columns}
      />
    </div>
  );
}

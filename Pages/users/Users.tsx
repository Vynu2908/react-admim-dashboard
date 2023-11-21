import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Datatable from "../../Components/dataTable/Datatable"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../Components/add/Add";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
      field:'avatar',
      headerName:'Avatar',
      width:60,
      renderCell:(params)=>{
          return <img src={params.row.img || '/noavatar.png'} alt=''/>
      }
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
      field:'verified',
      headerName:'Verified',
      width:80,
      type:"boolean",
  },
  
  {
      field:'createdAt',
      headerName:'Created At',
      width:100,
      
  },

  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
 {/* {
      field:'action',
      headerName:'Action',
      width:60,
      renderCell:(params)=>{
          return(
              <div className="action">
                  <div className="view">View</div>
                  <div className="delete">Delete</div>
              </div>
          )
      }

  },
*/}
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,verified:'true'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 ,verified:'true'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Users = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className='users'>
      <div className="info">
      <h1>Users</h1>
      <button onClick={()=>setOpen(true)}>Add Button</button>
     
      <div className="dataTable"><Datatable slug="users" columns={columns} rows={userRows}/></div>
      {open && <Add slug="users" columns={columns} setOpen={setOpen}/>}
      </div>
    </div>
  )
}

export default Users
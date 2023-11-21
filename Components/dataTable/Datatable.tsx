import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import './datatable.scss';
import { Link } from 'react-router-dom';

type Props=[
    columns:GridColDef[],
    rows:object[],
    slug:string,

]

const Datatable = (props:Props) => {
    const handleDelete=(id:number)=>{
        console.log('The following id is deleted'+id)
    }
    const actionColumn:GridColDef={
        field:"action",
        headerName:'Action',
        renderCell:(params)=>{
            return(
                <div className="action">
                    <Link to={'/${props.slug}/${params.row.id}'}>
                    <img src='/view.svg' alt=''/></Link>
                    <div className="delete" onClick={()=>handleDelete(params.row.id)}>
                        <img src='/delete.svg' alt=''/>
                    </div>
                </div>
            )
        }
    }
  return (
    <div className='datatable'>
          <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid className='dataGrid'
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500},
            },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}

export default Datatable
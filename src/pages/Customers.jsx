import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Selection, Sort, Filter, Page, ExcelExport, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { customersData, contextMenuItems, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
        width='auto'
        dataSource={customersData}
        allowPaging
        allowSorting
        editSettings={ { allowEditing: true, allowAdding: true, allowDeleting: true } }
        toolbar={['Delete' , 'Selection' ,  'Edit' ]}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page,  Toolbar, Selection, Filter, Sort, Edit]} />
      </GridComponent>
    </div>
  )
}

export default Customers
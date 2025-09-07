import React from 'react' // - React core library for component creation
import Card from './Card.tsx' // - Custom Card wrapper component for consistent styling and layout
import Table from './Table.tsx' // - Custom Table component with built-in CRUD actions and Ant Design integration

export default function TableCrudExample({
  columns, // - Table column configuration with sorting, filtering, and display settings
  records, // - Array of data objects to display in table rows
  handleEdit, // - Function to handle Edit button clicks, loads record into form
  handleDelete // - Function to handle Delete button clicks, removes record from data

}: any) { // - Functional component that wraps Table with Card container and handles empty state
  return (
    <Card title="Records" style={{ height: 'fit-content' }}> {/* - Card container with "Records" title and auto height adjustment */}
      <Table
        columns={columns} // - Pass column definitions for table structure and behavior
        data={records} // - Pass records array as data source for table rows
        handleEdit={handleEdit} // - Pass edit handler to Table for Edit button functionality
        handleDelete={handleDelete} // - Pass delete handler to Table for Delete button functionality
        pagination={records.length > 10} // - Enable pagination only when more than 10 records for better UX
        size="middle" // - Set table size to medium for balanced spacing and readability
      /> {/* - Reusable Table component handles rendering, actions, sorting, and filtering */}
      {/* Empty state message */}
      {records.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          No records found. Create your first record using the form.
        </div>
      )} {/* - Show helpful empty state message when no data exists to guide user action */}
    </Card> //Card wrapper provides consistent styling and visual separation 
  )
}

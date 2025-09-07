// Import custom Card component to wrap the table and content
import Card from './Card.tsx'
// Import custom Table component to display tabular data
import Table from './Table.tsx'

// Define and export the TabelCrudExample component
export default function TableCrudExample({
    columns,   // Array of column definitions for the table
    records    // Array of data records to display in the table
}:any) {
  return (
    // Render the Card component as the main container for the table
    <Card title="Records" style={{ height: 'fit-content' }}>
      {/* Render the Table component with columns and data */}
      <Table
        columns={columns}                  // Pass column definitions to Table
        data={records}                     // Pass data records to Table
        pagination={records.length > 10}   // Enable pagination if more than 10 records
        size="middle"                      // Set table size to 'middle'
      />
      {/* Show an empty state message if there are no records */}
      {records.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          No records found. Create your first record using the form.
        </div>
      )}
    </Card>
  )
}
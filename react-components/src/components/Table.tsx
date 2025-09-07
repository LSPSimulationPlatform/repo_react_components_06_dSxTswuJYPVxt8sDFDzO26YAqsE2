import React from 'react'; // - React core library for component creation
import { Table as AntTable, Button as AntButton, Space } from 'antd'; // - Ant Design components: Table for data display, Button for actions, Space for layout
import type { ColumnsType } from 'antd/es/table'; // - TypeScript type definition for table column configuration

 

/**
 * Reusable Table component built on top of Ant Design
 * Generic component that accepts any data type
 * 
 * @param columns - Table column definitions
 * @param data - Array of data objects to display
 * @param loading - Shows loading state
 * @param pagination - Enables pagination
 * @param size - Table size variant
 * @param actions - Custom action buttons for each row
 * @param onEdit - Edit handler function
 * @param onDelete - Delete handler function
 */
function Table<T extends Record<string, any>>({
  columns, // - Array of column definitions with sorting, filtering, and display configurations
  data, // - Array of data objects to populate table rows
  loading = false, // - Boolean to show loading spinner overlay on table
  pagination = true, // - Enable/disable pagination controls (default enabled)
  size = 'middle', // - Table size variant: 'small', 'middle', or 'large' for spacing
  actions, // - Array of custom action objects for additional row buttons
  handleEdit, // - Function called when Edit button is clicked, receives record as parameter
  handleDelete, // - Function called when Delete button is clicked, receives record as parameter
  className, // - Optional CSS class for table container styling
  style, // - Optional inline styles for table container
}: any) { // - Generic function component that accepts any data type extending Record<string, any>
  // Create action column if edit/delete handlers or custom actions are provided
  const actionColumn: ColumnsType<T>[0] | null = (handleEdit || handleDelete || actions) ? {
    title: 'Actions', // - Column header text for action buttons column
    key: 'actions', // - Unique identifier for the actions column
    width: 150, // - Fixed width in pixels to prevent layout shifts
    render: (_, record) => ( // - Custom render function for action buttons, receives full record data
      <Space size="small">  
        {handleEdit && (
          <AntButton 
            type="primary" // - Primary button styling for Edit action
            size="small" // - Small button size to fit in table rows
            onClick={() => handleEdit(record)} // - Call edit handler with current record data
          >
            Edit
          </AntButton>
        )}  
        {handleDelete && (
          <AntButton 
            type="primary" // - Primary button styling for consistency
            danger // - Red danger styling to indicate destructive action
            size="small" // - Small button size to fit in table rows
            onClick={() => handleDelete(record)} // - Call delete handler with current record data
          >
            Delete
          </AntButton>
        )} {/* Conditionally render Delete button only if handler is provided */}
        {actions && actions.map((action) => (
          <AntButton
            key={action.key} // - Unique key for React list rendering
            type={action.type || 'default'} // - Button type from action config, fallback to default
            danger={action.danger} // - Optional danger styling for destructive custom actions
            size="small" // - Consistent small size for all action buttons
            onClick={() => action.onClick(record)} // - Call custom action handler with record data
          >
            {action.label} {/* - Display text from action configuration */}
          </AntButton>
        ))} {/* - Render any additional custom action buttons from actions array */}
      </Space>
    ),
  } : null; // - Return null if no action handlers provided, prevents empty column

  // Combine columns with action column
  const finalColumns = actionColumn ? [...columns, actionColumn] : columns; // - Append actions column to existing columns or use original columns if no actions

  return (
    <AntTable
      columns={finalColumns} // - Pass combined column configuration to Ant Design Table
      dataSource={data} // - Array of data objects to populate table rows
      loading={loading} // - Show loading spinner overlay when true
      pagination={pagination ? { pageSize: 10, showSizeChanger: true } : false} // - Configure pagination with 10 rows per page and size options, or disable completely
      size={size} // - Control table spacing and row height (small/middle/large)
      className={className} // - Apply custom CSS classes for additional styling
      style={style} // - Apply inline styles for layout customization
      rowKey={(record) => record.id || Math.random().toString()} // - Generate unique key for each row, prefer record.id or fallback to random string
    />
  );
}

export default Table; // - Export component as default for use in other components
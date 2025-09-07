// Import React for building UI components
import React from 'react';
// Import Ant Design's Table, Button, and Space components
import { Table as AntTable, Button, Space } from 'antd';
// Import type for table columns from Ant Design
import type{ ColumnsType } from 'antd/es/table';
// Import type for table props from Ant Design
import  type { TableProps as AntTableProps } from 'antd';

// Define types for custom actions that can be rendered in the Actions column
interface TableAction<T> {
  key: string; // Unique key for the action
  label: string; // Button label
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text'; // Button style type
  danger?: boolean; // If true, button is styled as dangerous
  onClick: (record: T) => void; // Handler for button click, receives row record
}

// Define the props interface for the Table component, using generics for flexibility
interface TableProps<T> {
  columns: ColumnsType<T>; // Table column definitions
  data: T[]; // Array of data objects to display
  loading?: boolean; // Show loading spinner if true
  pagination?: boolean | AntTableProps<T>['pagination']; // Pagination config or toggle
  size?: 'small' | 'middle' | 'large'; // Table size variant
  actions?: TableAction<T>[]; // Custom action buttons for each row
  onEdit?: (record: T) => void; // Handler for edit action
  onDelete?: (record: T) => void; // Handler for delete action
  className?: string; // Optional CSS class for the table
  style?: React.CSSProperties; // Optional inline styles
  rowKey?: keyof T | ((record: T) => React.Key); // Unique row key or function to generate it
}

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
function Table<T extends object = any>({
  columns,        // Table columns
  data,           // Table data
  loading = false,// Loading state (default: false)
  pagination = true, // Pagination enabled (default: true)
  size = 'middle',// Table size (default: 'middle')
  actions,        // Custom row actions
  onEdit,         // Edit handler
  onDelete,       // Delete handler
  className,      // Optional CSS class
  style,          // Optional inline styles
  rowKey,         // Row key or generator function
}: TableProps<T>) {
  
  // Create action column if edit/delete handlers or custom actions are provided
  const actionColumn: ColumnsType<T>[number] | null = 
    (onEdit || onDelete || actions) ? {
      title: 'Actions', // Column header
      key: 'actions',   // Unique key for column
      width: 150,       // Fixed width for actions column
      fixed: 'right' as const, // Fix column to the right
      render: (_, record: T) => (
        // Render a horizontal space for action buttons
        <Space size="small">
        </Space>
      ),
    } : null;

  // Combine columns with action column if present
  const finalColumns = actionColumn ? [...columns, actionColumn] : columns;

  // Handle rowKey generation for each row
  const getRowKey = (record: T): React.Key => {
    if (rowKey) {
      if (typeof rowKey === 'function') {
        // If rowKey is a function, call it with the record
        return rowKey(record);
      }
      // If rowKey is a property name, use it from the record
      return record[rowKey] as React.Key;
    }
    // Fallback: generate a random key (not recommended for production)
    return Math.random().toString();
  };

  return (
    <AntTable
      columns={finalColumns} // Table columns (with actions if present)
      dataSource={data}      // Table data
      loading={loading}      // Loading spinner
      pagination={pagination === true ? { 
        pageSize: 10, 
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
      } : pagination}        // Pagination config
      size={size}            // Table size
      className={className}  // Optional CSS class
      style={style}          // Optional inline styles
      rowKey={getRowKey}     // Unique row key
      scroll={{ x: true }}   // Enable horizontal scroll for wide tables
    />
  );
}

// Export the Table component as default
export default Table;
import React from 'react';
import { Table as AntTable, Button as AntButton, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

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
  columns, /* column definitions */
  data, /* array of rows */
  loading = false, /* show loading state */
  pagination = true, /* enable pagination */
  size = 'middle', /* table size */
  actions, /* custom row actions */
  onEdit, /* row edit handler */
  onDelete, /* row delete handler */
  className, /* optional className */
  style, /* optional style */
}: any) {
  // Create action column if edit/delete handlers or custom actions are provided
  const actionColumn: ColumnsType<T>[0] | null = (onEdit || onDelete || actions) ? {
    title: 'Actions',
    key: 'actions',
    width: 150,
    render: (_, record) => (
      <Space size="small">
        {onEdit && (
          <AntButton 
            type="primary" 
            size="small" 
            onClick={() => onEdit(record)} /* call edit handler with row record */
          >
            Edit
          </AntButton>
        )}
        {onDelete && (
          <AntButton 
            type="primary" 
            danger 
            size="small" 
            onClick={() => onDelete(record)} /* call delete handler with row record */
          >
            Delete
          </AntButton>
        )}
        {actions && actions.map((action) => (
          <AntButton
            key={action.key}
            type={action.type || 'default'}
            danger={action.danger}
            size="small"
            onClick={() => action.onClick(record)} /* custom action click */
          >
            {action.label}
          </AntButton>
        ))}
      </Space>
    ),
  } : null; /* actionColumn: optional actions column appended to end */

  // Combine columns with action column
  const finalColumns = actionColumn ? [...columns, actionColumn] : columns; /* finalColumns: base columns plus actions if present */

  return (
    <AntTable
      columns={finalColumns} /* columns to render */
      dataSource={data} /* table data */
      loading={loading} /* loading indicator */
      pagination={pagination ? { pageSize: 10, showSizeChanger: true } : false} /* pagination config or false */
      size={size} /* table density */
      className={className} /* optional styling class */
      style={style} /* optional inline style */
      rowKey={(record) => record.id || Math.random().toString()} /* unique row key */
    />
  );
}

export default Table;
// Import React and useState for state management in functional components
import { useState } from 'react'
// Import ColumnsType for typing table columns from Ant Design
import type{ ColumnsType } from 'antd/es/table';

// Define and export the useCrudExample custom hook
export default function useCrudExample() {

  // Data storage (simulating a database) - holds the list of records
  const [records, setRecords] = useState<any[]>([]);

  // Category options for the select dropdown in the form
  const categoryOptions: any[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ];

  // Table column configuration for displaying records in the table
  const columns: ColumnsType<any> = [
    {
      title: 'Name', // Column header
      dataIndex: 'name', // Field in the data source
      key: 'name', // Unique key for the column
      sorter: (a, b) => a.name.localeCompare(b.name), // Alphabetical sorting by name
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: categoryOptions.map(opt => ({ text: opt.label, value: opt.value })), // Filter options for categories
      onFilter: (value, record) => record.category === value, // Filtering logic for category
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true, // Truncate long text with ellipsis
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => date.toLocaleDateString(), // Format date as locale string
      sorter: (a, b) => a.createdAt.getTime() - b.createdAt.getTime(), // Sort by date
    },
  ];

  // Return the options, records, and columns for use in components
  return {
    categoryOptions,
    records,
    columns
  }
}
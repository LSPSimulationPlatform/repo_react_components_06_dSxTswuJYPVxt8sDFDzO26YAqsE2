import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
// import { ColumnsType } from 'antd/es/table';
import useCrudExample from '../hooks/useCrudExample.tsx';
import TableCrudExample from '../components/TableCrudExample.tsx';

/**
 * CRUD Example Component
 * 
 * Demonstrates a complete CRUD (Create, Read, Update, Delete) interface using:
 * - Reusable form components
 * - In-memory data management
 * - Ant Design layout components
 * - Table with sorting/filtering capabilities
 * 
 * Features:
 * - Form validation
 * - Edit state management
 * - Loading states
 * - User feedback (success/error messages)
 */
const CrudExample: React.FC = () => {
  // Call the custom hook to get category options, records, and table columns
  const {
    categoryOptions, // Options for the category dropdown in the form
    records,         // Array of data records for the table
    columns          // Table column definitions
  } = useCrudExample();

  return (
    // Main container with padding and centered max width
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Responsive layout using Ant Design Grid */}
      <Row gutter={[24, 24]}>
        {/* Form Section (left column on desktop) */}
        <Col xs={24} lg={8}>
          
        </Col>

        {/* Table Section (right column on desktop) */}
        <Col xs={24} lg={16}>
          {/* Render the table with columns and records */}
          <TableCrudExample 
            columns={columns}
            records={records}
          />
        </Col>
      </Row>
    </div>
  );
};

// Export the CrudExample component as default
export default CrudExample;
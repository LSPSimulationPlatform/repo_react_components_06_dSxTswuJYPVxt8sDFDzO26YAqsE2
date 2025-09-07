import React from 'react';
import { Row, Col } from 'antd';
import useCrudExample from '../hooks/useCrudExample.tsx';
import CreateUpdateCrudExample from '../components/CreateUpdateCrudExample.tsx';
import TabelCrudExample from '../components/TableCrudExample.tsx';

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
  // Form state management
  const {
    formData /* current form values object */, setFormData /* setter to update formData */,
    categoryOptions /* select options for category field */,
    handleInputChange /* callback to update text inputs */,
    handleSelectChange /* callback to update select inputs */,
    handleSubmit /* called to create/update a record */,
    columns /* column definitions for table */,
    records /* array of data rows to display */,
    editingRecord /* current record object when editing */, setEditingRecord /* setter to change editingRecord */,
    isSubmitting /* disables UI while submitting */, setIsSubmitting /* setter for isSubmitting */
  } = useCrudExample()

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Responsive layout using Ant Design Grid */}
      <Row gutter={[24, 24]}>
        {/* Form Section (left column on desktop) */}
        <Col xs={24} lg={8}>
          <CreateUpdateCrudExample
            formData={formData} /* current form values object */
            handleInputChange={handleInputChange} /* callback to update text inputs */
            handleSelectChange={handleSelectChange} /* callback to update select inputs */
            handleSubmit={handleSubmit} /* called to create/update a record */
            isSubmitting={isSubmitting} /* disables UI while submitting */
            editingRecord={editingRecord} /* current record object when editing */
            categoryOptions={categoryOptions} /* select options for category field */
          />
        </Col>

        {/* Table Section (right column on desktop) */}
        <Col xs={24} lg={16}>
          <TabelCrudExample
            columns={columns} /* column definitions for table */
            records={records} /* array of data rows to display */
          />
        </Col>
      </Row>
    </div>
  );
};

export default CrudExample;
import React, { useState } from 'react'; // - React core library for component creation
import { Row, Col, message } from 'antd'; // - Ant Design grid components for responsive layout
import useCrudExample from '../hooks/useCrudExample.tsx'; // - Custom hook containing all CRUD logic and state management
import CreateUpdateCrudExample from '../components/CreateUpdateCrudExample.tsx'; // - Form component for creating/editing records
import TabelCrudExample from '../components/TableCrudExample.tsx'; // - Table component for displaying records with actions

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
  formData, // - Current form values (name, category, description)
  categoryOptions, // - Static array of dropdown options for category field
  handleInputChange, // - Function for handling text input and textarea changes
  handleSelectChange, // - Function for handling dropdown selection changes
  handleSubmit, // - Async function for create/update operations with validation
  handleEdit, // - Function to populate form with existing record for editing
  handleDelete, // - Function to remove record from data array
  handleCancelEdit, // - Function to exit edit mode and clear form
  columns, // - Table column configuration with sorting and filtering setup
  records, // - Array of all CRUD records for table display
  editingRecord, setEditingRecord, // - State for currently selected record being edited
  isSubmitting, setIsSubmitting // - Loading state for form submission operations
}=useCrudExample() // - Extract all CRUD functionality from custom hook

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}> {/* - Main container with centered layout and responsive padding */}
      {/* Responsive layout using Ant Design Grid */}
      <Row gutter={[24, 24]}> {/* - Grid row with 24px horizontal and vertical spacing between columns */}
        {/* Form Section (left column on desktop) */}
        <Col xs={24} lg={8}> {/* - Full width on mobile (xs=24), 1/3 width on large screens (lg=8) */}
          <CreateUpdateCrudExample
           formData={formData} // - Pass current form values to populate input fields
           categoryOptions={categoryOptions} // - Pass dropdown options for category selection
           handleInputChange={handleInputChange} // - Pass input change handler for text fields
           handleSelectChange={handleSelectChange} // - Pass selection handler for dropdown
           handleSubmit={handleSubmit} // - Pass submit handler for form processing
           handleCancelEdit={handleCancelEdit} // - Pass cancel handler to exit edit mode
           isSubmitting={isSubmitting} // - Pass loading state for button and form disabling
           editingRecord={editingRecord} // - Pass current editing record to determine form mode (create vs edit)
          /> {/* - Form component handles all user input and validation display */}
        </Col>

        {/* Table Section (right column on desktop) */}
        <Col xs={24} lg={16}> {/* - Full width on mobile (xs=24), 2/3 width on large screens (lg=16) */}
          <TabelCrudExample 
              columns={columns} // - Pass table column configuration with sorting and filtering
              records={records} // - Pass data array for table rows
              handleEdit={handleEdit} // - Pass edit handler for Edit button clicks
              handleDelete={handleDelete} // - Pass delete handler for Delete button clicks
          /> {/* - Table component displays data with action buttons for each row */}
        </Col>
      </Row> {/* - Responsive grid automatically stacks columns on mobile devices */}
    </div>
  );
};

export default CrudExample; // - Export component for use in main App component and routing
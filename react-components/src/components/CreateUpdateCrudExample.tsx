// Import custom Card component for wrapping the form
import Card from './Card.tsx'
// Import custom Button component for form actions
import Button from './Button.tsx'
// Import custom Input component for text input fields
import Input from './Input.tsx'
// Import custom SelectBox component for dropdown selection
import SelectBox from './SelectBox.tsx'
// Import custom TextArea component for multi-line text input
import TextArea from './TextArea.tsx'


// Define and export the CreateUpdateCrudExample component
export default function CreateUpdateCrudExample({
  categoryOptions, // Array of category options to display in the SelectBox
}:any) {
  return (
    // Render the Card component as the main container
    <Card
      title={'Create New Record'} // Card header title
      footer={
        // Card footer with action buttons, aligned to the right
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
         // {/* Primary action button for submitting the form */}
        / <Button
            // onClick={handleSubmit} // (Commented out) Handler for form submission
            variant="primary" // Button style variant
          />
       </div>
      }
    >
      {/* Form fields arranged in a vertical column with spacing */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Input field for the record name */}
        <Input
          label="Name" // Field label
          placeholder="Enter name" // Placeholder text
          // onChange={handleInputChange('name')} // (Commented out) Change handler
          required // Field is required
        />

        {/* Dropdown for selecting a category */}
       <SelectBox
          label="Category" // Field label
          options={categoryOptions} // Options for the dropdown
          placeholder="Select a category" // Placeholder text
          required // Field is required
        />  

        {/* Multi-line text area for description */}
<TextArea
          label="Description" // Field label
          placeholder="Enter description" // Placeholder text
          // onChange={handleInputChange('description')} // (Commented out) Change handler
          rows={4} // Number of visible rows
          maxLength={500} // Maximum allowed characters
          showCount // Show character count
        />
      </div>
    </Card>
  )
}
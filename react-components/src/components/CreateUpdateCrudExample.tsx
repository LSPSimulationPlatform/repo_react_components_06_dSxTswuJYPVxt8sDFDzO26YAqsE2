
import Card from './Card.tsx'
import Button from './Button.tsx'
import Input from './Input.tsx'
import SelectBox from './SelectBox.tsx'
import TextArea from './TextArea.tsx'

export default function CreateUpdateCrudExample({
  formData,
  categoryOptions,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
  isSubmitting,
  editingRecord
}) {
  return (
    <Card
    title={editingRecord ? 'Edit Record' : 'Create New Record'}
    footer={
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        
        <Button
          text={editingRecord ? 'Update' : 'Create'}
          handleSubmit={handleSubmit}
          variant="primary"
          loading={isSubmitting}
        />
      </div>
    }
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Name"
        placeholder="Enter name"
        value={formData.name}
        handleInputChange={handleInputChange('name')}
        required
      />

      <SelectBox
        label="Category"
        options={categoryOptions}
        value={formData.category}
        handleSelectChange={handleSelectChange}
        placeholder="Select a category"
        required
      />

      <TextArea
        label="Description"
        placeholder="Enter description"
        value={formData.description}
        handleInputChange={handleInputChange('description')}
        rows={4}
        maxLength={500}
        showCount
      />
    </div>
  </Card>
  )
}


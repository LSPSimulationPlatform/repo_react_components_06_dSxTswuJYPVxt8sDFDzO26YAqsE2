import React from 'react';
import Card from './Card.tsx'; // - Custom Card wrapper component
import Button from './Button.tsx'; // - Custom Button component with loading states
import Input from './Input.tsx'; // - Custom Input component
import SelectBox from './SelectBox.tsx'; // - Custom SelectBox component
import TextArea from './TextArea.tsx'; // - Custom TextArea component


type FormData = {
  name: string;
  surname: string;
  email: string;
  category: string;
  country: string;
  description: string;
};

type Option = { label: string; value: string };

type Props = {
  formData: FormData;
  categoryOptions: Option[];
  countryOptions: Option[];
  handleInputChange: (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (field: 'category' | 'country', value: string) => void;
  handleSubmit: () => void;
  handleCancelEdit: () => void;
  isSubmitting: boolean;
  editingRecord: any; 
};

export default function CreateUpdateCrudExample({
  formData,
  categoryOptions,
  countryOptions,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
  handleCancelEdit,
  isSubmitting,
  editingRecord
}: Props) { 

  return (
    <Card
      title={editingRecord ? 'Edit Record' : 'Create New Record'}
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          {editingRecord && (
            <Button
              text="Cancel"
              onClick={handleCancelEdit}
              variant="secondary"
            />
          )}
          <Button
            text={editingRecord ? 'Update' : 'Create'}
            onClick={handleSubmit}
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
        <Input
          label="Surname"
          placeholder="Enter surname"
          value={formData.surname}
          handleInputChange={handleInputChange('surname')}
          required
        />
        <Input
          label="Email"
          placeholder="Enter email"
          value={formData.email}
          handleInputChange={handleInputChange('email')}
          required
        />
        <SelectBox
          label="Category"
          options={categoryOptions}
          value={formData.category}
          handleSelectChange={(value:string) => handleSelectChange('category', value)}
          placeholder="Select a category"
          required
        />
        <SelectBox
          label="Country"
          options={countryOptions}
          value={formData.country}
          handleSelectChange={(value:string) => handleSelectChange('country', value)}
          placeholder="Select a country"
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
  );
}

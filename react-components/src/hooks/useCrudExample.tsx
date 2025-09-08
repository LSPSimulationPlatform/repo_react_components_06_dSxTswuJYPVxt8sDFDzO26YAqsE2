import React, { useState } from 'react'
import { message } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export default function useCrudExample() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    category: '',
    country: '',
    description: '',
  }); // - Form state object that holds current input values for create/edit operations

  // Data storage (simulating a database)
  const [records, setRecords] = useState<any[]>([]); // - Array holding all CRUD records, simulates database storage in memory
  const [editingRecord, setEditingRecord] = useState<any | null>(null); // - Currently selected record for editing, null when creating new record
  const [isSubmitting, setIsSubmitting] = useState(false); // - Loading state to prevent multiple form submissions and show loading UI


    const countryOptions: any[] = [
  { label: 'Azerbaijan', value: 'azerbaijan' },
  { label: 'Türkiye', value: 'turkiye' }, 
  { label: 'USA', value: 'usa' },
  { label: 'Germany', value: 'germany' },
  { label: 'UK', value: 'uk' },
];

  // Category options for the select dropdown
  const categoryOptions: any[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ]; // - Static dropdown options for category field, each with display label and internal value

  /**
   * Handles input changes for form fields
   * @param field - The field name to update
   * @returns Change event handler
   */
  const handleInputChange = (field: string) => 
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value })); // - Updates specific field in formData using dynamic key, preserving other fields
    }; // - Returns curried function that captures field name and handles input/textarea change events

  /**
   * Handles select dropdown changes
   * @param value - The selected value
   */
  const handleSelectChange = (field: 'category' | 'country', value: string) => {
  setFormData(prev => ({ ...prev, [field]: value }));
};


  /**
   * Handles form submission for both create and update operations
   */
  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.name.trim()) {
      message.error('Name is required'); // - Shows error toast if name field is empty or only whitespace
      return; // - Exit early to prevent form submission
    }
    if (!formData.surname.trim()) {
      message.error('Surname is required'); 
      return; 
    }
 if (!formData.email.trim()) {
      message.error('Email is required'); 
      return; 
    }

    if (!formData.category) {
      message.error('Category is required'); // - Shows error toast if no category is selected
      return; // - Exit early to prevent form submission
    }
     if (!formData.country) {
      message.error('Country is required'); 
      return; 
    }

    setIsSubmitting(true); // - Set loading state to disable form and show loading indicators

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500)); // - Simulates network delay, replace with actual API call

      if (editingRecord) {
        // Update existing record
        setRecords(prev =>
          prev.map(record =>
            record.id === editingRecord.id
              ? { ...record, ...formData } // - Merge form data into existing record
              : record // - Keep other records unchanged
          )
        ); // - Updates the specific record being edited in the records array
        message.success('Record updated successfully!'); // - Show success toast for update operation
        setEditingRecord(null); // - Clear edit state to return to create mode
      } else {
        // Create new record
        const newRecord: any = {
          id: Date.now().toString(), // - Generate unique ID using timestamp
          ...formData, // - Spread form data into new record
          createdAt: new Date(), // - Add creation timestamp
        };
        setRecords(prev => [...prev, newRecord]); // - Add new record to end of records array
        message.success('Record created successfully!'); // - Show success toast for create operation
      }

      // Reset form
      setFormData({ name: '', surname: '', email: '', category: '', country: '', description: '' }); // - Clear form fields after successful submission
    } catch (error) {
      message.error('An error occurred. Please try again.'); // - Show generic error message for any failures
    } finally {
      setIsSubmitting(false); // - Reset loading state regardless of success/failure
    }
  };

  /**
   * Loads a record into the form for editing
   * @param record - The record to edit
   */
  const handleEdit = (record: any) => {
    setFormData({
      name: record.name,
      surname: record.surname,
      email: record.email,
      category: record.category,
      country: record.country,
      description: record.description,
    }); // - Populate form fields with values from selected record for editing
    setEditingRecord(record); // - Set current record as being edited, changes form to update mode
    message.info('Record loaded for editing'); // - Show info toast to confirm edit mode activation
  };

  /**
   * Deletes a record from the data
   * @param record - The record to delete
   */
  const handleDelete = (record: any) => {
    setRecords(prev => prev.filter(r => r.id !== record.id)); // - Remove record with matching ID from records array
    message.success('Record deleted successfully!'); // - Show success toast for delete operation
    
    // Clear edit state if deleting the record being edited
    if (editingRecord?.id === record.id) {
      setEditingRecord(null); // - Clear edit state if deleted record was being edited
      setFormData({ name: '', surname:'', email:'', category: '', country:'', description: '' }); // - Reset form fields to prevent editing deleted record
    } // - Handles edge case where user deletes record that's currently loaded in form
  };

  /**
   * Cancels the current edit operation
   */
  const handleCancelEdit = () => {
    setEditingRecord(null); // - Clear currently editing record, returns form to create mode
    setFormData({name: '', surname:'', email:'', category: '', country:'', description: '' }); // - Reset all form fields to empty values
    message.info('Edit cancelled'); // - Show info toast to confirm edit operation was cancelled
  };

  // Table column configuration
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name), // - Alphabetical sorting for name column using locale-aware comparison
    },
{
      title: 'Surname',
      dataIndex: 'surname',
      key: 'surname',
      sorter: (a, b) => a.surname.localeCompare(b.surname), // - Alphabetical sorting for name column using locale-aware comparison
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email), // - Alphabetical sorting for name column using locale-aware comparison
    },

    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: categoryOptions.map(opt => ({ text: opt.label, value: opt.value })), // - Create filter options from categoryOptions array
      onFilter: (value, record) => record.category === value, // - Filter function to show only records matching selected category
    },
     {
      title: 'Country',
      dataIndex: 'country',
      key: 'country', 
      filters: countryOptions.map(opt => ({ text: opt.label, value: opt.value })),
      onFilter: (value, record) => record.country === value,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true, // - Truncate long description text with ellipsis to prevent table overflow
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => date.toLocaleDateString(), // - Format Date object to readable string using browser locale
      sorter: (a, b) => a.createdAt.getTime() - b.createdAt.getTime(), // - Sort by timestamp for chronological ordering
    },
  ]; // - Column definitions for Ant Design Table component with sorting and filtering capabilities
  return {
    formData, setFormData, // - Current form state and setter for direct manipulation if needed
    categoryOptions, // - Static array of category options for dropdown component
    countryOptions,
    handleInputChange, // - Curried function for handling input/textarea changes
    handleSelectChange, // - Function for handling dropdown selection changes
    handleSubmit, // - Async function for create/update operations with validation
    handleEdit, // - Function to load record into form for editing
    handleDelete, // - Function to remove record from data with cleanup
    handleCancelEdit, // - Function to exit edit mode and reset form
    columns, // - Table column configuration with sorting and filtering
    records, // - Array of all CRUD records for display in table
    editingRecord, setEditingRecord, // - Current editing state and setter
    isSubmitting, setIsSubmitting // - Loading state and setter for form submission
  } // - Return object exposing all necessary state and functions for CRUD operations
}

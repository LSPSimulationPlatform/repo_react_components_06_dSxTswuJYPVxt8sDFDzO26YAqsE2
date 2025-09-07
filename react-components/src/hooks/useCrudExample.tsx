import React, { useState } from 'react'
import { message } from 'antd';
import type { ColumnsType } from 'antd/es/table';


export default function useCrudExample() {

  // Hook: manages form and table state plus CRUD handlers for the page

  const [formData, setFormData] = useState({ name: '', category: '', description: '' }); /* formData: values for the form; setFormData: update function */

  // In-memory data and UI state
  const [records, setRecords] = useState<any[]>([]); /* records: saved items (in-memory) */
  const [editingRecord, setEditingRecord] = useState<any | null>(null); /* editingRecord: item being edited or null */
  const [isSubmitting, setIsSubmitting] = useState(false); /* isSubmitting: true while submitting */



  /**
   * Handles input changes for form fields
   * @param field - The field name to update
   * @returns Change event handler
   */
  const handleInputChange = (field: string) => /* returns change handler that sets field value */
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value })); /* set form field value */
    };

  /**
   * Handles select dropdown changes
   * @param value - The selected value
   */
  const handleSelectChange = (value: string) => /* set category value in formData */ {
    setFormData(prev => ({ ...prev, category: value })); /* set category field */
  };

  /**
   * Handles form submission for both create and update operations
   */
  const handleSubmit = async () => /* validate form and create a new record */ {
    // Validate required fields
    if (!formData.name.trim()) {
      message.error('Name is required');
      return;
    }
    if (!formData.category) {
      message.error('Category is required');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Create new record
      const newRecord: any = { id: Date.now().toString(), ...formData, createdAt: new Date() }; /* new record */
      setRecords(prev => [...prev, newRecord]); /* add record to list */
      message.success('Record created successfully!');


      // Reset form
      setFormData({ name: '', category: '', description: '' });
    } catch (error) {
      message.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Loads a record into the form for editing
   * @param record - The record to edit
   */

  /**
   * Deletes a record from the data
   * @param record - The record to delete
   */



  // Category options for the select dropdown
  const categoryOptions: any[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ]; /* categoryOptions: select options */

  // Table column configuration
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name), // alphabetical
    }, /* Column: Name - displays record name; sortable */
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: categoryOptions.map(opt => ({ text: opt.label, value: opt.value })),
      onFilter: (value, record) => record.category === value, // filter by category
    }, /* Column: Category - shows category with filter options */
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true, // truncate long text
    }, /* Column: Description - optional text, truncated for display */
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => date.toLocaleDateString(), // format date
      sorter: (a, b) => a.createdAt.getTime() - b.createdAt.getTime(), // sort by date
    }, /* Column: Created At - record creation date, formatted and sortable */
  ];
  return {
    formData /* form values */, setFormData /* update form values */,
    categoryOptions /* select options */,
    handleInputChange /* set individual field */,
    handleSelectChange /* set category */,
    handleSubmit /* create/update record */,
    columns /* table columns */,
    records /* saved records */,
    editingRecord /* currently edited record */, setEditingRecord /* set editing record */,
    isSubmitting /* submission flag */, setIsSubmitting /* set submission flag */
  }
}

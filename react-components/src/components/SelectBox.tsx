import React from 'react';
import { Select } from 'antd';

/**
 * Enhanced Select Dropdown Component
 * 
 * A reusable select input built on Ant Design's Select component with:
 * - Custom label support
 * - Required field indication
 * - Type-safe options
 * - Full control over selection state
 * 
 * @param props - Configuration options for the select box
 */
const SelectBox: React.FC<any> = ({
  label,          // The text label shown above the select
  options,        // Array of {label, value} objects for dropdown
  value,          // Currently selected value (controlled)
  handleSelectChange,       // Handler when selection changes (receives new value)
  placeholder = 'Please select...', // Default placeholder text
  required = false, // Default to not show required indicator
  disabled = false, // Default to enabled state
  allowClear = true, // Default to showing clear button
  className,      // Optional CSS class for the container
  style,          // Optional inline styles for the container
}) => {
  return (
    // Container div for the select component
    <div className={className} style={style}>
      {/* Label with optional required indicator */}
      <label style={{ 
        display: 'block', 
        marginBottom: 8, 
        fontWeight: 500 
      }}>
        {label}
        {/* Red asterisk for required fields */}
        {required && (
          <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>
        )}
      </label>
      
      {/* Ant Design Select component with all configured props */}
      <Select
        // Current selected value (undefined clears the selection)
        value={value || undefined}
        
        // Handler called when selection changes
        // Receives the new value string
        onChange={handleSelectChange}
        
        // Placeholder text when nothing is selected
        placeholder={placeholder}
        
        // Disables interaction when true
        disabled={disabled}
        
        // Shows X button to clear selection when true
        allowClear={allowClear}
        
        // Ensures select fills its container
        style={{ width: '100%' }}
        
        // The selectable options
        // Each option must have label (display text) and value
        options={options}
        
        // Additional Ant Design Select props could be added here:
        // showSearch - enables search filtering
        // mode - for multiple selection
        // etc.
      />
    </div>
  );
};

export default SelectBox;
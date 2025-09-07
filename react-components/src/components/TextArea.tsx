import React from 'react';
import { Input } from 'antd';

// Destructure Ant Design's TextArea component
const { TextArea: AntTextArea } = Input;


/**
 * Enhanced TextArea Component
 * 
 * A reusable multi-line text input built on Ant Design with:
 * - Custom label support
 * - Required field indication
 * - Character counting
 * - Size and length controls
 * - Full accessibility support
 * 
 * @param props - Configuration options for the textarea
 */
const TextArea: React.FC<any> = ({
  label,          // The text label shown above the textarea
  placeholder,    // Hint text when empty
  value,          // Current text content
  handleInputChange,       // Handler for text changes
  required = false, // Default to not show required indicator
  disabled = false, // Default to enabled state
  rows = 4,       // Default visible rows
  maxLength,      // Optional character limit
  showCount = false, // Default to hide character counter
  className,      // Optional CSS class for container
  style,          // Optional inline styles for container
}) => {
  return (
    // Container div for the textarea component
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
      
      {/* Ant Design TextArea component with all configured props */}
      <AntTextArea
        // Placeholder text when empty
        placeholder={placeholder}
        
        // Current text value
        value={value}
        
        // Handler called on text changes
        // Receives the React change event
        onChange={handleInputChange}
        
        // Disables interaction when true
        disabled={disabled}
        
        // Visible number of text lines
        rows={rows}
        
        // Maximum allowed characters
        maxLength={maxLength}
        
        // Shows character counter when true
        showCount={showCount}
        
        // Additional Ant Design TextArea props could be added here:
        // autoSize - for dynamic height
        // allowClear - to show clear button
        // etc.
      />
    </div>
  );
};

export default TextArea;
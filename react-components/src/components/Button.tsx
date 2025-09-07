import React from 'react';
import { Button as AntButton } from 'antd';

/**
 * Interface defining the Button component's props
 * 
 * @property text - Display text of the button (required)
 * @property onClick - Click handler function (optional)
 * @property variant - Visual style variant ('primary' | 'secondary')
 * @property loading - Shows loading spinner when true (default: false)
 * @property disabled - Makes button non-interactive when true (default: false)
 * @property htmlType - Native button type attribute (default: 'button')
 * 
 * Inherits from BaseComponentProps:
 * @property className - Optional CSS class for custom styling
 * @property style - Optional inline styles
 */


/**
 * Enhanced Button Component
 * 
 * A reusable button built on Ant Design with:
 * - Custom variant system
 * - Loading states
 * - Type-safe props
 * - HTML button type support
 * - Accessibility built-in
 * 
 * @param props - Configuration options for the button
 */
const Button: React.FC<any> = ({
  text="Create",          // The button's display text
  // onClick,       // Click handler function
  variant = 'secondary', // Default to secondary style
  loading = false, // Default not loading
  disabled = false, // Default enabled
  htmlType = 'button', // Default HTML button type
  className,     // Optional CSS class
  style,         // Optional inline styles
}) => {
  /**
   * Maps our custom variant names to Ant Design's button types
   * @returns Ant Design's button type string
   */
  const getButtonType = (): 'primary' | 'default' => {
    switch (variant) {
      case 'primary':
        return 'primary'; // Ant Design's primary style
      case 'secondary':
      default:
        return 'default'; // Ant Design's default style
    }
  };

  return (
    /**
     * Ant Design Button component with configured props
     * 
     * Features:
     * - Automatic accessibility attributes
     * - Built-in hover/focus states
     * - Loading spinner integration
     * - Proper button semantics
     */
    <AntButton
      type={getButtonType()}    // Visual style type
      // onClick={onClick}         // Click handler
      loading={loading}         // Loading state
      disabled={disabled}       // Disabled state
      htmlType={htmlType}       // Native button type
      className={className}     // Custom CSS class
      style={style}             // Inline styles
    >
      {text} {/* The visible button text */}
    </AntButton>
  );
};

export default Button;
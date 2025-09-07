import React from 'react';
import { Card as AntCard } from 'antd';


/**
 * Interface defining the props for the Card component
 * 
 * @property title - The title displayed in the card header (required)
 * @property children - Main content of the card (required)
 * @property footer - Content displayed in the footer area (optional)
 * @property hoverable - Enables hover effect with box shadow (default: false)
 * @property loading - Shows loading skeleton instead of content (default: false)
 * 
 * Inherits from BaseComponentProps:
 * @property className - Optional CSS class for custom styling
 * @property style - Optional inline styles
 */
/**
 * Enhanced Card Component
 * 
 * A reusable card container built on Ant Design with:
 * - Title section
 * - Main content area
 * - Optional footer
 * - Hover effects
 * - Loading states
 * - Custom styling options
 * 
 * @param props - Configuration options for the card
 */
const Card: React.FC<any> = ({
  title,          // The header title text (required)
  children,       // Main content (required)
  footer,         // Footer content (optional)
  hoverable = false, // Default no hover effect
  loading = false,   // Default not in loading state
  className,      // Optional CSS class
  style,          // Optional inline styles
}) => {
  return (
    /**
     * Ant Design Card component with configured props
     * 
     * The card has three distinct sections:
     * 1. Header (title)
     * 2. Body (children)
     * 3. Footer (actions)
     */
    <AntCard
      title={title}             // Sets the card header text
      hoverable={hoverable}     // Enables/disables hover effect
      loading={loading}         // Shows loading skeleton when true
      className={className}     // Passes custom CSS class
      style={style}             // Applies inline styles
      actions={footer ? [footer] : undefined} // Footer content (wrapped in array)
    >
      {children} {/* The main content area */}
    </AntCard>
  );
};

export default Card;
// Import React library for building UI components
import React from 'react';
// Import ConfigProvider from Ant Design for theme/context configuration
import { ConfigProvider } from 'antd';
// Import Ant Design's CSS reset for consistent styling
import 'antd/dist/reset.css'; // Import Ant Design styles
// Import the main CRUD example page/component
import CrudExample from './pages/CrudExample.tsx';

/**
 * Main App component
 * 
 * This example demonstrates:
 * ✅ TypeScript with React
 * ✅ Component-based architecture with Ant Design
 * ✅ Reusable UI components with proper typing
 * ✅ Simple CRUD operations (Create, Read, Update, Delete)
 * ✅ Form validation and state management
 * ✅ When to use interface vs type (see components for examples)
 * ✅ Default props with TypeScript
 * ✅ Generic components (Table component accepts any data type)
 */

// Define the App component as a React functional component with TypeScript
const App: React.FC = () => {
  return (
    // Provide Ant Design theme and context to all child components
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff', // Set the primary color for the theme
          borderRadius: 6,         // Set the default border radius
        },
      }}
    >
      {/* Main container with minimum height and background color */}
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        {/* Header section with background, padding, shadow, and margin */}
        <header style={{ 
          background: '#fff', 
          padding: '16px 24px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '24px'
        }}>
          {/* Main title with custom color and no margin */}
          <h1 style={{ margin: 0, color: '#1890ff' }}>
            React + TypeScript + Ant Design Component Library
          </h1>
          {/* Subtitle/description with muted color and margin */}
          <p style={{ margin: '8px 0 0 0', color: '#666' }}>
            Demonstrating reusable components, proper TypeScript usage, and CRUD operations
          </p>
        </header>
        
        {/* Main content area where the CRUD example is rendered */}
        <main>
          <CrudExample />
        </main>
      </div>
    </ConfigProvider>
  );
};

// Export the App component as the default export
export default App;
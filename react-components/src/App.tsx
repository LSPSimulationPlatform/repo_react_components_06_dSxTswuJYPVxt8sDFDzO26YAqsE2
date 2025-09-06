// Import the core React library
import React from 'react';

// Import Ant Design's ConfigProvider for global theming
import { ConfigProvider } from 'antd';

// Import Ant Design's reset CSS to ensure consistent styling across browsers
import 'antd/dist/reset.css';


// Define the main App component using TypeScript's React.FC (Function Component) type
const App: React.FC = () => {
  return (
    // ConfigProvider is used to customize the global theme settings for all Ant Design components
    <ConfigProvider
      theme={{
        token: {
          // Set the primary color used across Ant Design components (buttons, links, etc.)
          colorPrimary: '#1890ff',
          // Customize the default border radius (e.g., for buttons, cards, inputs)
          borderRadius: 6,
        },
      }}
    >
      {/* Main container with minimum height to fill the screen and a light gray background */}
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        {/* Header section of the page with white background, padding, and a subtle shadow */}
        <header style={{ 
          background: '#fff', 
          padding: '16px 24px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // light drop shadow
          marginBottom: '24px' // space below the header
        }}>
          
          {/* Main heading with no margin and styled in primary color */}
          <h1 style={{ margin: 0, color: '#1890ff' }}>
            React + TypeScript + Ant Design Component Library
          </h1>
          
          {/* Subheading with a smaller font and gray color */}
          <p style={{ margin: '8px 0 0 0', color: '#666' }}>
            Demonstrating reusable components, proper TypeScript usage, and CRUD operations
          </p>
        </header>

     
        
      </div>
    </ConfigProvider>
  );
};

// Export the App component as the default export so it can be used in index.tsx or other modules
export default App;

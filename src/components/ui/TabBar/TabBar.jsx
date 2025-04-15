import { useState } from 'react';
import TabBarItem from '../TabItem/TabItem.jsx';

const tabs = ['New Arrival', 'Best Sellers', 'Trending Plants'];

export default function TabBar() {
  const [activeTab, setActiveTab] = useState('New Arrival');

  const renderContent = () => {
    switch (activeTab) {
      case 'New Arrival':
        return (
          <p>
            New Arrival
          </p>
        );
      case 'Best Sellers':
        return (
          <p>
            Best Sellers
          </p>
        );
      case 'Trending Plants':
        return (
          <p>
            Trending Plants
          </p>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
        {tabs.map((tab) => (
          <TabBarItem
            key={tab}
            title={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      <div className="text-gray-800 dark:text-white">
        {renderContent()}
      </div>
    </div>
  );
}

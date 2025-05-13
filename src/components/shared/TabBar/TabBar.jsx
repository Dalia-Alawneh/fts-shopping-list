import TabBarItem from '#components/ui/TabItem';

export default function TabBar({ activeTab, onTabChange, tabs }) {
  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
      {tabs.map((tab) => (
        <TabBarItem
          key={tab.id}
          title={tab.name}
          isActive={activeTab.id === tab.id}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </div>
  );
}

export default function TabBarItem({ title, isActive, onClick, disabled = false }) {
  const baseClasses = "px-4 py-2 text-sm transition-all border-b-2";

  if (disabled) {
    return (
      <button disabled className="px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
        {title}
      </button>
    );
  }

  const activeClasses = isActive
    ? "text-primary-green border border-b border-primary-green font-bold"
    : "text-gray-500 hover:text-primary-green border-transparent";

  return (
    <button onClick={onClick} className={`${baseClasses} ${activeClasses}`}>
      {title}
    </button>
  );
}

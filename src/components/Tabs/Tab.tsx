interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <div title={label} className="hidden">
      {children}
    </div>
  );
};

export default Tab;

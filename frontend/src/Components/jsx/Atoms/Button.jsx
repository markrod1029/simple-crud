export default function Button({ children, variant = 'primary', ...props }) {
  const styles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };
  return (
    <button {...props} className={`px-4 py-2 rounded-lg font-medium transition-colors ${styles[variant] || ''}`}>
      {children}
    </button>
  );
}

export default function InputField({ value, onChange, type = 'text', placeholder, variant = 'clasic' }) {

    styles = {
        clasic: 'focus:ring-blue-500 focus:border-transparent'
    }
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 ${styles[variant] || ''}`}
        />
    );
}

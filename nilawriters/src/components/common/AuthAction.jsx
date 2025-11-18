// src/components/common/AuthAction.jsx
export default function AuthAction({ label, buttonText, onClick, color }) {
  return (
    <div className="flex flex-col items-start">
      <button
        className={`px-4 py-2 rounded font-semibold text-white shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ${color}`}
        onClick={onClick}
      >
        {buttonText}
      </button>
      <span className="mt-2 text-white text-sm font-medium">{label}</span>
    </div>
  );
}

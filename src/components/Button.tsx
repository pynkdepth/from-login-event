export const Button = ({ label, type = "button", isLoading }: any) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="bg-blue-600 text-white p-2 rounded"
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};
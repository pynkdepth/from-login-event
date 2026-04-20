interface InputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  type?: string;
}

export const Input = ({ label, name, register, error, type = "text" }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input {...register(name)} type={type} className="border p-2 rounded" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
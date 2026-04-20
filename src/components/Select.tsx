export const Select = ({ label, name, register, error, options }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <select {...register(name)} className="border p-2 rounded">
        <option value="">Pilih...</option>
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
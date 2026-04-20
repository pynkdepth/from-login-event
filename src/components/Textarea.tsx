export const Textarea = ({ label, name, register, error }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <textarea {...register(name)} className="border p-2 rounded" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
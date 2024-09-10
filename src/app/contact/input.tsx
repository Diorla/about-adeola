import { useId } from "react";

export default function Input({
  label,
  name,
  placeholder,
  type,
  required,
  pattern,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  pattern?: string;
}) {
  const id = useId();
  return (
    <div className="sm:col-span-4  mt-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-zinc-200"
      >
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-zinc-600 sm:max-w-md">
          <input
            pattern={pattern}
            required={required}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-zinc-100 placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
          />
        </div>
      </div>
    </div>
  );
}

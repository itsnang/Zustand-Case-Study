import { HTMLAttributes } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { UseFormRegisterReturn } from "react-hook-form";

export default function InputField({
  register,
  error,
  name,
  type,
  placeholder,
  defaultValue,
  label,
  className,
  errorClassName,
  disabled = false,
}: {
  register: UseFormRegisterReturn<any>;
  error?: any;
  name: string;
  type: string;
  className?: HTMLAttributes<HTMLInputElement>["className"];
  placeholder?: string;
  defaultValue?: string;
  label?: string;
  errorClassName?: HTMLAttributes<HTMLParagraphElement>["className"];
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col items-start w-full z-0">
      <input
        {...register}
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={`sm:h-14 h-12 focus:ring-primary rounded-xl border border-gray-200 px-4 text-gray-900 focus:outline-none focus:ring ${className} ${
          label ? "mt-2" : ""
        } ${
          type === "time" || type === "date"
            ? "form-input focus:border-none"
            : ""
        }`}
        placeholder={placeholder}
        disabled={disabled}
      />

      {error && (
        <p
          className={
            errorClassName ? errorClassName : "pl-4 text-red-500 text-sm"
          }
        >
          {error.message}
        </p>
      )}
    </div>
  );
}

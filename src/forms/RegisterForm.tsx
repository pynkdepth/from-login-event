import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../schemas/registerSchema";
import type { RegisterFormData } from "../schemas/registerSchema";

import { Input } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";
import { Select } from "../components/Select";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    await new Promise((res) => setTimeout(res, 1000)); // simulasi loading
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md mx-auto">

      <Input
        label="Nama Lengkap"
        name="name"
        register={register}
        error={errors.name?.message}
      />

      <Input
        label="Email"
        name="email"
        register={register}
        error={errors.email?.message}
        type="email"
      />

      <PasswordInput
        label="Password"
        name="password"
        register={register}
        error={errors.password?.message}
      />

      <Select
        label="Event"
        name="event"
        register={register}
        error={errors.event?.message}
        options={[
          { label: "Invofest", value: "invofest" },
          { label: "Workshop AI", value: "ai" },
        ]}
      />

      <Textarea
        label="Bio"
        name="bio"
        register={register}
        error={errors.bio?.message}
      />

      <Button type="submit" label="Daftar" isLoading={isSubmitting} />

    </form>
  );
}
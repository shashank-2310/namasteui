"use client"

import React from "react"
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "./button";
import Label from "./label";
import Input from "./input";


export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {

  // The schema can be edited to add more fields or change the validation rules.
  const schema = z.object({
    name: z.string().min(2, "Name is required").regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(5, "Message must be at least 10 characters long"),
  })

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    // Form submission logic
    console.log('Form Submitted!')
    console.log(data)
  }

  return (
    // Below is a simple contact form with name, email, and message fields.
    <div className="w-full max-w-xl p-3 sm:px-6 lg:px-8 lg:py-6 my-4 sm:my-6 lg:my-8 space-y-4 bg-primary text-background border border-muted-foreground/30 rounded-lg overflow-hidden">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600">Get in Touch</h2>
        <p className="mt-1 text-xs sm:text-sm lg:text-base">
          Fill out the form below and We&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name" className="block text-xs sm:text-sm lg:text-base font-medium">
            Name
          </Label>
          <div className="mt-1">
            <Input
              // {...register('name')}  --> This is the react-hook-form way of registering the input field. Uncomment this line while using the form.
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className={`block w-full sm:text-sm text-xs px-3 py-2 bg-primary ${errors.name ? "border-red-500" : ""
                }`}
            />
            {errors.name && <p className="mt-1 text-xs sm:text-sm lg:text-base text-red-500">{String(errors.name.message)}</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="block text-xs sm:text-sm lg:text-base font-medium">
            Email
          </Label>
          <div className="mt-1">
            <Input
              // {...register('email')} --> This is the react-hook-form way of registering the input field. Uncomment this line while using the form.
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              className={`block w-full sm:text-sm text-xs px-3 py-2 bg-primary ${errors.email ? "border-red-500" : ""
                }`}
            />
            {errors.email && <p className="mt-1 text-xs sm:text-sm lg:text-base text-red-500">{String(errors.email.message)}</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="message" className="block text-xs sm:text-sm lg:text-base font-medium">
            Message
          </Label>
          <div className="mt-1">
            <textarea
              // {...register('message')} --> This is the react-hook-form way of registering the input field. Uncomment this line while using the form.
              id="message"
              name="message"
              rows={4}
              placeholder="Your message"
              className={`block w-full sm:text-sm text-xs rounded-lg p-2 bg-primary border-muted-foreground/30 focus:border-none focus:outline-none ${errors.message ? "border-red-500" : ""
                }`}
            />
            {errors.message && <p className="mt-1 text-xs sm:text-sm lg:text-base text-red-500">{String(errors.message.message)}</p>}
          </div>
        </div>
        <div>
          <Button type="submit" variant="primary" className="w-full rounded-xl">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
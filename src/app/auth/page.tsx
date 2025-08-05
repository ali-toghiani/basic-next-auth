"use client"

import { useRef } from "react";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useInput } from "@/hooks/useInput";
import classes from "./auth.module.scss";
import { PhoneSchema } from "@/validation/phone-schema";

export default function AuthPage() {
  const { 
    value: phoneNumber,
    onChange: phoneInputChange,
    onBlur,
    isTouched,
    error: phoneError,
  } = useInput("", PhoneSchema);

  return (
    <div className={classes['auth-form-container']}>
      <h1 className={classes['auth-form-title']}>Login</h1>
      <form className={classes['auth-form']}>
        <Input
          value={phoneNumber}
          errorMessage={isTouched && phoneError ? phoneError : ''}
          type="tel"
          id="phone"
          label="Phone"
          disabled={false}
          name="phone"
          placeholder="Please Enter your phone number"
          onChange={phoneInputChange}
          onBlur={onBlur}
        />
        <Button type='submit'>
          <span className={classes['submit-btn']}>Submit</span>
        </Button>
      </form>
    </div>
  );
}

"use client"

import { useRef } from "react";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

import classes from "./auth.module.scss";

export default function AuthPage() {
  const phoneNumber = useRef(null);

  return (
    <div className={classes['auth-form-container']}>
      <h1 className={classes['auth-form-title']}>Login</h1>
      <form className={classes['auth-form']}>
        <Input
          ref={phoneNumber}
          type="tel"
          id="phone"
          label="Phone"
          disabled={false}
          name="phone"
          placeholder="Enter your phone number"
          onChange={() => {}}
        />
        <Button type='submit'>
          <span className={classes['submit-btn']}>Submit</span>
        </Button>
      </form>
    </div>
  );
}

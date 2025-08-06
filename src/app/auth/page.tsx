"use client"

import { useContext, useEffect } from "react";
import { useRouter } from 'next/navigation';

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

import { fetchRandomUser } from "@/app/http";
import { useInput } from "@/hooks/useInput";
import { useFetch } from "@/hooks/useFetch";
import { PhoneSchema } from "@/validation/phone-schema";
import { UserContext } from "@/context/UserContext";
import { User } from "@/types/User";

import classes from "./auth.module.scss";
import { Routes } from "@/enums/routes";

export default function AuthPage() {
  const userCtx = useContext(UserContext);
  const router = useRouter();

  const { 
    value: phoneNumber,
    onChange: phoneInputChange,
    onBlur,
    isTouched,
    error: phoneError,
  } = useInput("", PhoneSchema);
  const {
        isFetching,
        error,
        fetchedData: randomUserData,
        executeFetch,
      } = useFetch(fetchRandomUser, {});

  useEffect(() => {
    if (randomUserData && Array.isArray(randomUserData.results) && randomUserData.results.length > 0) {
      userCtx.setUser(randomUserData.results[0] as User);
      userCtx.setLoading(false);
      userCtx.setError(null);
      router.push(Routes.DASHBOARD);
    }
  }, [randomUserData, userCtx, router]);

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!phoneError) {
      // Submit the form
      await executeFetch();
    }
  }

  return (
    <div className={classes['auth-form-container']}>
      <h1 className='auth-form-title'>Login</h1>
      <form
       className='auth-form'
       onSubmit={(e) => handleFormSubmit(e)}>
        <Input
          value={phoneNumber}
          errorMessage={isTouched && phoneError ? phoneError : ''}
          type="tel"
          id="phone"
          label="Phone"
          disabled={isFetching}
          name="phone"
          placeholder="Please Enter your phone number"
          onChange={phoneInputChange}
          onBlur={onBlur}
        />
        <Button type='submit' disabled={!!phoneError || isFetching}>
          <span className={classes['submit-btn']}>Submit</span>
        </Button>
      </form>
    </div>
  );
}

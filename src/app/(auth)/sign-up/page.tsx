'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'

import { authPayload } from '@/lib/validators/auth'

export default  function SignUpPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<authPayload>({
    resolver: zodResolver({}),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: authPayload) => {
    try {
      setIsLoading(true)
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          expiresInMins: 30, // optional, defaults to 60
        })
      })
      toast.success('Store is created.')
      window.location.assign('/dashboard/stores')
    } catch (error: any) {
      toast.error(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='mx-auto'>
      <Card className='w- xl:w-[500px]'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Sign up</CardTitle>
          <CardDescription>
            Create your account
          </CardDescription>
        </CardHeader>
        <CardContent className='grid grid-cols-1'>
        <Form {...form}>
            <form
              className='grid w-full max-w-xl gap-5'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Your First Name'
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Your Last Name '
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Your Email address'
                        disabled={isLoading}
                        type='email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button isLoading={isLoading}>
                Sign Up
                <span className='sr-only'>Sign Up</span>
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='flex flex-wrap items-center justify-between gap-2'>
          <div className='text-sm text-muted-foreground'>
            <span className='mr-1 inline-block'>
              Already have an account?
            </span>
            <Link
              aria-label='Sign in'
              href='/sign-in'
              className='text-primary underline-offset-4 transition-colors hover:underline'>
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

"use client"

import { useActionState } from "react"
import { greet } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GreetingForm() {
  const [state, formAction, pending] = useActionState(greet, { success: false, message: "" })

  return (
    <Card className="w-full max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle>Enter Your Name</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Input type="text" name="name" placeholder="Your name" required />
          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {state && (
          <p className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
        )}
      </CardContent>
    </Card>
  )
}


"use server"

export async function greet(prevState: {
  success: boolean
  message: string
}, formData: FormData) {
  const name = formData.get("name")
  if (typeof name !== "string" || name.length === 0) {
    return { message: "Please enter a valid name.", success: false }
  }
  return { message: `Hello ${name}!`, success: true }
}


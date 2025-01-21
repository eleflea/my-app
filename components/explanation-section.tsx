import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ExplanationSection() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
      <AccordionItem value="server-actions">
        <AccordionTrigger>How Server Actions Work</AccordionTrigger>
        <AccordionContent>
          Server Actions process the input on the server-side. When the form is submitted, the 'greet' function is
          called on the server. It extracts the name from the FormData, validates it, and returns a response object.
          This allows for secure data processing without exposing sensitive logic to the client.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shadcn-ui">
        <AccordionTrigger>Shadcn UI Components Used</AccordionTrigger>
        <AccordionContent>
          This application uses several Shadcn UI components: Button, Input, Card (with CardHeader, CardContent, and
          CardTitle), and Accordion. These components provide a consistent, modern look and feel while simplifying the
          implementation of common UI patterns.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="next-js-features">
        <AccordionTrigger>Key Next.js 15.1 Features</AccordionTrigger>
        <AccordionContent>
          This app leverages Next.js 15.1 features such as Server Actions for form processing, the App Router for
          simplified routing, and Server Components for improved performance. The 'use client' directive is used to
          explicitly mark client-side components, while the rest benefit from server-side rendering.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


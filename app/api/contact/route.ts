import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  projectType: z.string(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, just log and return success
    console.log('Contact form submission:', validatedData);
    
    // In production, you would send an email here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'contact@softinities.com',
    //   subject: `New Contact Form Submission from ${validatedData.name}`,
    //   html: `<p>Name: ${validatedData.name}</p><p>Email: ${validatedData.email}</p>...`,
    // });
    
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}



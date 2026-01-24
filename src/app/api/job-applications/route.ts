import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getDatabase } from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, currentSalary, expectedSalary, message, cv, cvFileName } = body;

    // Validate required fields
    if (!name || !email || !phone || !expectedSalary) {
      return NextResponse.json(
        { message: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // 1. SAVE TO DATABASE
    const db = await getDatabase();
    const applicationData = {
      name,
      email,
      phone,
      currentSalary: currentSalary || 'Not provided',
      expectedSalary,
      message: message || 'No message provided',
      cvFileName: cvFileName || 'No CV',
      cvData: cv, // Base64 encoded CV
      status: 'new',
      appliedDate: new Date(),
      updatedDate: new Date(),
    };

    const result = await db.collection('job_applications').insertOne(applicationData);
    console.log('✅ Job application saved to database:', result.insertedId);

    // 2. SEND EMAIL NOTIFICATION
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const htmlEmail = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2b3d4f; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafa; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #2b3d4f; font-size: 12px; text-transform: uppercase; }
              .value { margin-top: 5px; padding: 12px; background: white; border-left: 4px solid #1ABC9C; border-radius: 4px; }
              .badge { display: inline-block; background: #1ABC9C; color: white; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin:0;">💼 New Job Application!</h1>
                <span class="badge">Database ID: ${result.insertedId}</span>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">📱 Phone</div>
                  <div class="value">${phone}</div>
                </div>
                
                <div class="field">
                  <div class="label">💰 Current Salary</div>
                  <div class="value">${currentSalary || 'Not provided'}</div>
                </div>
                
                <div class="field">
                  <div class="label">💵 Expected Salary</div>
                  <div class="value">${expectedSalary}</div>
                </div>
                
                <div class="field">
                  <div class="label">📄 CV Attached</div>
                  <div class="value">${cvFileName || 'No CV'}</div>
                </div>
                
                <div class="field">
                  <div class="label">📝 Message</div>
                  <div class="value">${message || 'No message provided'}</div>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
                  <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
                  <p><strong>Status:</strong> <span class="badge" style="background:#4CAF50;">NEW</span></p>
                  <p style="margin-top:15px; font-size:11px; color:#999;">
                    View this application in your admin dashboard at /admin/applications
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `💼 New Job Application: ${name}`,
        html: htmlEmail,
      });

      console.log('✅ Email notification sent');
    } catch (emailError) {
      console.error('⚠️ Email notification failed (application still saved):', emailError);
    }

    return NextResponse.json({
      message: 'Success',
      applicationId: result.insertedId,
    }, { status: 200 });

  } catch (error) {
    console.error('❌ Error processing job application:', error);
    return NextResponse.json(
      { message: 'Error processing your application' },
      { status: 500 }
    );
  }
}

// GET - Fetch all job applications (for admin)
export async function GET(request: Request) {
  try {
    const db = await getDatabase();
    const applications = await db
      .collection('job_applications')
      .find({})
      .sort({ appliedDate: -1 })
      .toArray();

    return NextResponse.json({ applications }, { status: 200 });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { message: 'Error fetching applications' },
      { status: 500 }
    );
  }
}
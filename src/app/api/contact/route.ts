import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getDatabase } from '@/lib/mongodb';
import type { Lead } from '@/lib/types';

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { fullName, email, company, annualRevenue} = body;

//         if (!fullName || !email) {
//       return NextResponse.json(
//         { message: 'Name and email are required' },
//         { status: 400 }
//       );
//     }

//         // 1. SAVE TO DATABASE FIRST (most important!)
//     const db = await getDatabase();
//     const leadData: Lead = {
//       fullName,
//       email,
//       // phone: phone || null,
//       company: company || null,
//       // country: country || null,
//       // service: service || null,
//       // challenges: challenges || null,
//       status: 'new',
//       source: 'website',
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };

//     const result = await db.collection('leads').insertOne(leadData);
//     console.log('✅ Lead saved to database:', result.insertedId);


//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       // secure: true,
//       port: 587,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "kthakur99100@gmail.com",
//       subject: 'New Lead from Website',
//       text: `
//         Full Name: ${fullName || 'N/A'}
//         Email: ${email || 'N/A'}
//         Company: ${company || 'N/A'}
//         Annual Revenue: ${annualRevenue || 'N/A'}
//       `,
//     };

//     // Send email
//     const res = await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//     return NextResponse.json({ message: 'Success' }, { status: 200 });
//   } catch (error) {
//     console.error('Email error:', error);
//     return NextResponse.json({ message: 'Error', error: String(error) }, { status: 500 });
//   }
// }


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, country, service, challenges } = body;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // 1. SAVE TO DATABASE FIRST (most important!)
    const db = await getDatabase();
    const leadData: Lead = {
      fullName,
      email,
      phone: phone || null,
      company: company || null,
      country: country || null,
      service: service || null,
      challenges: challenges || null,
      status: 'new',
      source: 'website',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection('leads').insertOne(leadData);
    console.log('✅ Lead saved to database:', result.insertedId);

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
        
        
          
            
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2b3d4f; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafa; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #2b3d4f; font-size: 12px; text-transform: uppercase; }
              .value { margin-top: 5px; padding: 12px; background: white; border-left: 4px solid #1ABC9C; border-radius: 4px; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #ddd; font-size: 12px; color: #666; }
              .badge { display: inline-block; background: #1ABC9C; color: white; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: bold; }
              .btn { display: inline-block; background: #2b3d4f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 10px; }
            
          
          
            
              
                🎯 New Lead from Website!
                Database ID: ${result.insertedId}
              
              
                
                  👤 Full Name
                  ${fullName}
                
                
                
                  📧 Email
                  ${email}
                
                
                
                  📱 Phone
                  ${phone || 'Not provided'}
                
                
                
                  🏢 Company
                  ${company || 'Not provided'}
                
                
                
                  🌍 Country
                  ${country || 'Not provided'}
                
                
                
                  💼 Service Interest
                  ${service || 'Not specified'}
                
                
                
                  📝 Message / Challenges
                  ${challenges || 'No message provided'}
                
                
                
                  Received: ${new Date().toLocaleString()}
                  Status: NEW
                  Reply to ${fullName}
                  
                    This lead has been automatically saved to your database.
                    View all leads in your admin dashboard.
                  
                
              
            
          
        
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `🎯 New Lead: ${fullName} - ${company || 'Website Contact'}`,
        html: htmlEmail,
      });

      console.log('✅ Email notification sent');
    } catch (emailError) {
      // Email failed but lead is saved - log but don't fail the request
      console.error('⚠️ Email notification failed (lead still saved):', emailError);
    }

    return NextResponse.json({
      message: 'Success',
      leadId: result.insertedId,
    }, { status: 200 });

  } catch (error) {
    console.error('❌ Error processing lead:', error);
    return NextResponse.json(
      { message: 'Error processing your request' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// GET - Fetch all leads
export async function GET(request: Request) {
  try {
    const db = await getDatabase();
    const leads = await db
      .collection('leads')
      .find({})
      .sort({ createdAt: -1 }) // Most recent first
      .toArray();

    return NextResponse.json({ leads }, { status: 200 });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { message: 'Error fetching leads' },
      { status: 500 }
    );
  }
}

// PATCH - Update lead status
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { leadId, status, notes } = body;

    if (!leadId) {
      return NextResponse.json(
        { message: 'Lead ID is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const updateData: any = {
      updatedAt: new Date(),
    };

    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    const result = await db.collection('leads').updateOne(
      { _id: new ObjectId(leadId) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Lead updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { message: 'Error updating lead' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a lead
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const leadId = searchParams.get('id');

    if (!leadId) {
      return NextResponse.json(
        { message: 'Lead ID is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const result = await db.collection('leads').deleteOne({
      _id: new ObjectId(leadId)
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Lead deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return NextResponse.json(
      { message: 'Error deleting lead' },
      { status: 500 }
    );
  }
}
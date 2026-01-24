import type { ObjectId } from 'mongodb';

export interface Lead {
  _id?: ObjectId;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  service?: string;
  challenges?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  createdAt: Date;
  updatedAt: Date;
  notes?: string;
  source: 'website' | 'referral' | 'other';
}
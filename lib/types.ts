import type { ObjectId } from 'mongodb';

export interface Lead {
  _id?: ObjectId;
  fullName?: string;
  email: string;
  phone: string;
  company?: string;
  country?: string;
  service?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  message?: string;
  createdAt: Date;
  updatedAt: Date;
  source: 'website' | 'referral' | 'other';
}
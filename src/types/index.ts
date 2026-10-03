import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  ecoFeature: string;
  capabilities: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  confirmationId?: string;
  message: string;
  error?: string;
}

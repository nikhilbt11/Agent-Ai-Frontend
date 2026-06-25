export interface Business {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface WhatsAppAccount {
  id: string;
  phoneNumberId: string;
  whatsappNumber: string;
  accessToken: string;
  isActive: boolean;
}

export interface BusinessPayload {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface WhatsAppPayload {
  accessToken: string;
  isActive: boolean;
}
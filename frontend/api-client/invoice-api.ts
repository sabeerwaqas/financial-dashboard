import { apiRequest } from "./client";
import {
  PendingInvoiceAmountResponse,
  PaidInvoiceAmountResponse,
  TotalInvoiceCountResponse,
  InvoiceResponse,
  CustomerField,
  InvoiceRequest,
} from "./types";

const INVOICE_API = "/api/invoice";

export function getPendingInvoiceAmount() {
  return apiRequest<PendingInvoiceAmountResponse>(
    `${INVOICE_API}/pending-amount`,
    {
      method: "GET",
    },
  );
}

export function getPaidInvoiceAmount() {
  return apiRequest<PaidInvoiceAmountResponse>(`${INVOICE_API}/paid-amount`, {
    method: "GET",
  });
}

export function getTotalInvoices() {
  return apiRequest<TotalInvoiceCountResponse>(`${INVOICE_API}/count`, {
    method: "GET",
  });
}

export function getInvoices() {
  return apiRequest<InvoiceResponse[]>(INVOICE_API, {
    method: "GET",
  });
}

export function getInvoiceById({ invoiceId }: { invoiceId: string }) {
  return apiRequest<InvoiceResponse>(`${INVOICE_API}/${invoiceId}`, {
    method: "GET",
  });
}

export function deleteInvoices({ id }: { id: string }) {
  return apiRequest<any>(`${INVOICE_API}/${id}`, {
    method: "DELETE",
  });
}

export function createInvoice({ data }: { data: CustomerField }) {
  return apiRequest<any>(INVOICE_API, {
    method: "POST",
    body: data,
  });
}

export function updateInvoice({ data }: { data: InvoiceRequest }) {
  return apiRequest<any>(INVOICE_API, {
    method: "PUT",
    body: data,
  });
}

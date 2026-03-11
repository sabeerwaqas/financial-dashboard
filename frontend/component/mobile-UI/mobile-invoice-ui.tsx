import Image from "next/image";
import InvoiceStatus from "../invoices/status";
import { Button } from "../button";
import { formatDateToLocal } from "@/app/lib/utils";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { InvoiceResponse } from "@/api-client";

export const MobileInvoiceUI = ({
  invoices,
  onDelete,
}: {
  invoices: InvoiceResponse[];
  onDelete: (id: string) => void;
}) => {
  return (
    <div className="md:hidden">
      {invoices?.map((invoice) => (
        <div
          key={invoice.invoiceId}
          className="mb-2 w-full rounded-md bg-white p-4"
        >
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <div className="mb-2 flex items-center">
                <Image
                  src={invoice.image_url}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt={`${invoice.customerName}'s profile picture`}
                />
                <p>{invoice.customerName}</p>
              </div>
              <p className="text-sm text-gray-500">{invoice.customerEmail}</p>
            </div>
            <InvoiceStatus status={invoice.status} />
          </div>
          <div className="flex w-full items-center justify-between pt-4">
            <div>
              <p className="text-xl font-medium">{invoice.amount}</p>
              <p>{formatDateToLocal(invoice.date)}</p>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                buttonType="link"
                type="submit"
                href={`/dashboard/invoices/${invoice.invoiceId}/edit`}
                className="rounded-md border !p-2 bg-white hover:bg-gray-100 !text-gray-700"
              >
                <PencilIcon className="w-5" />
              </Button>
              <button
                onClick={() => onDelete(invoice.invoiceId)}
                type="submit"
                className="rounded-md border p-2 hover:bg-gray-100"
              >
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

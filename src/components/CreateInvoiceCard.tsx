import { Plus } from 'lucide-react';

export default function CreateInvoiceCard() {
  return (
    // Added a subtle custom shadow to match Figma
    <div className="rounded-3xl bg-white p-6 text-center shadow-figma">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#A435F0] to-[#5844FE]">
        <Plus className="h-8 w-8 text-white" />
      </div>
      <h2 className="bg-gradient-to-r from-[#A435F0] to-[#5844FE] bg-clip-text text-2xl font-bold text-transparent">
        Create New Invoice
      </h2>
      <p className="mt-1 text-sm text-[#6B7280]">
        Start by creating and sending new invoice
      </p>
    </div>
  );
}
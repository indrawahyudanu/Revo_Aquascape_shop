import { CardProps, PageSectionProps, ModalProps } from "../types/product";

export function Card({ children }: CardProps) {
  return (
    <div className="border border-gray-700 rounded-lg p-4">
      {children}
    </div>
  );
}

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      {children}
    </section>
  );
}

export function Modal({ header, children }: ModalProps) {
  return (
    <div className="border border-blue-500 rounded-lg max-w-sm overflow-hidden bg-gray-900">
      <div className="bg-blue-600 px-4 py-2 font-semibold text-white">
        {header}
      </div>
      <div className="p-4 text-gray-200">
        {children}
      </div>
    </div>
  );
}
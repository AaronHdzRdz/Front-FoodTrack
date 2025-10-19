import { Account } from "@/data/accounts";

type Props = {
  account: Account;
};

export default function AccountCard({ account }: Props) {
  return (
    <button className="rounded-2xl border-gray-100 border-2 overflow-hidden text-left bg-white shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
      <img src={account.image} alt={account.table ?? account.type} className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover" />
      <div className="p-3 sm:p-4 md:p-5 flex flex-col gap-1.5 sm:gap-2 md:gap-3">
        <div className="bg-Blue-50 rounded-lg w-fit py-1 px-3 text-xs sm:text-sm">{account.type}</div>
        {account.table && <h3 className="text-navy-900 text-sm sm:text-base md:text-lg font-medium">{account.table}</h3>}
        <p className="text-navy-900 font-actor text-xs sm:text-sm font-normal leading-6">MESERO: {account.waiter}</p>
        <p className="text-navy-900 font-actor text-xs sm:text-sm font-normal leading-6">N.TICKET: {account.ticketNumber}</p>
        <p className="mt-2 text-right text-Blue-700 font-actor text-lg sm:text-xl md:text-2xl font-normal leading-6">${account.total.toFixed(2)}</p>
      </div>
    </button>
  );
}


type Props = {
    totalUsers: number;
    title: string;
    icon: React.ReactNode;
};

export default function UserStatCard({ totalUsers, title, icon }: Props) {
    return (
        <div className="rounded-2xl bg-white border-1 border-Blue-200 p-4 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-1">
                <p className="text-gray-700 font-sans text-sm not-italic font-normal leading-5">
                    {title}
                </p>
                <p className="text-navy-900 font-sans text-2xl not-italic font-normal leading-8">
                    {totalUsers}
                </p>
            </div>
            <div className="text-navy-900">{icon}</div>
        </div>
    );
}

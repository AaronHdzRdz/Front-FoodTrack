type Props = {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    roleFilter: 'all' | 'meseros' | 'cajeros';
    onRoleFilterChange: (role: 'all' | 'meseros' | 'cajeros') => void;
};

export default function UserFilters({ searchTerm, onSearchChange, roleFilter, onRoleFilterChange }: Props) {
    return (
        <section className="flex flex-col md:flex-row gap-4">
            <input
                type="text"
                autoComplete="new-password"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="Buscar por nombre de usuario..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="border border-gray-300 rounded-2xl py-2 px-4  bg-white w-full text-sm md:text-base"
                aria-label="Search"
            />
            <div className="flex flex-row gap-2">
                <button
                    onClick={() => onRoleFilterChange('all')}
                    aria-pressed={roleFilter === 'all'}
                    className={roleFilter === 'all'
                        ? 'bg-Blue-700 hover:bg-navy-900 rounded-2xl px-4 py-2 text-white'
                        : 'bg-white hover:bg-gray-100 rounded-2xl px-4 py-2 text-gray-900 border border-gray-300'}
                >
                    Todos
                </button>
                <button
                    onClick={() => onRoleFilterChange('meseros')}
                    aria-pressed={roleFilter === 'meseros'}
                    className={roleFilter === 'meseros'
                        ? 'bg-Blue-700 hover:bg-navy-900 rounded-2xl px-4 py-2 text-white'
                        : 'bg-white hover:bg-gray-100 rounded-2xl px-4 py-2 text-gray-900 border border-gray-300'}
                >
                    Meseros
                </button>
                <button
                    onClick={() => onRoleFilterChange('cajeros')}
                    aria-pressed={roleFilter === 'cajeros'}
                    className={roleFilter === 'cajeros'
                        ? 'bg-Blue-700 hover:bg-navy-900 rounded-2xl px-4 py-2 text-white'
                        : 'bg-white hover:bg-gray-100 rounded-2xl px-4 py-2 text-gray-900 border border-gray-300'}
                >
                    Cajeros
                </button>
            </div>
        </section>
    );
}

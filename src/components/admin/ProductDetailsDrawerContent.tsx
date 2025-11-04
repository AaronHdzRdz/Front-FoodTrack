"use client";
import {
    useEffect,
    useRef,
    useState,
    useCallback,
    type ReactNode,
    type ChangeEvent,
    type KeyboardEvent,
} from "react";
import {
    BoxOutline,
    DollarMinimalisticOutline,
    DollarOutline,
    FileTextOutline,
    TagOutline,
    TrashBinTrashOutline,
} from "solar-icon-set";
import { DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "../ui/drawer";

type SubTitleProps = {
    title: string;
    icon: ReactNode;
};

function SubTitle({ icon, title }: SubTitleProps) {
    return (
        <div className="flex flex-row items-center text-navy-900 gap-2">
            <div className="flex items-center justify-center w-5 h-5">{icon}</div>
            <p className="text-[#0D1748] font-arial text-[14px] font-normal leading-[14px]">
                {title}
            </p>
        </div>
    );
}

const OTHER_CATEGORY = "other" as const;

export default function ProductDetailsDrawerContent() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Estado de formulario controlado
    const [productName, setProductName] = useState("Tacos al Pastor");
    const [description, setDescription] = useState(
        "Deliciosos tacos de cerdo marinado con piña, cilantro y cebolla. Servidos en tortilla de maíz recién hecha."
    );
    const [stock, setStock] = useState<string>("10");
    const [categories, setCategories] = useState<string[]>([
        "Tacos",
        "Bebidas",
        "Postres",
        "Aperitivos",
    ]);
    const [selectedCategory, setSelectedCategory] = useState<string>("Tacos");
    const [newCategoryInput, setNewCategoryInput] = useState("");
    const [cost, setCost] = useState<string>("10.00");
    const [price, setPrice] = useState<string>("15.00");

    // Auto-resize del textarea dependiente del contenido (sin event listeners)
    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    }, [description]);

    // Handlers reutilizables con tipos
    const handleIntegerKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            const blocked = new Set([".", ",", "e", "E", "-"]);
            if (blocked.has(event.key)) event.preventDefault();
        },
        []
    );

    const handleMonetaryKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            // Permitimos decimales (',' o '.') pero bloqueamos '-' y notación científica
            const blocked = new Set(["e", "E", "-"]);
            if (blocked.has(event.key)) event.preventDefault();
        },
        []
    );

    const handleCategoryChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            setSelectedCategory(value);
            if (value !== OTHER_CATEGORY) setNewCategoryInput("");
        },
        []
    );

    const handleAddCategory = useCallback(() => {
        const trimmed = newCategoryInput.trim();
        if (trimmed && !categories.includes(trimmed)) {
            setCategories((prev) => [...prev, trimmed]);
            setSelectedCategory(trimmed);
            setNewCategoryInput("");
        }
    }, [newCategoryInput, categories]);

    const margin = (() => {
        const c = parseFloat(cost.replace(",", ".")) || 0;
        const p = parseFloat(price.replace(",", ".")) || 0;
        if (p <= 0) return 0;
        const m = ((p - c) / p) * 100;
        return Number.isFinite(m) ? m : 0;
    })();

    return (
        <DrawerContent className="bg-gray-50 w-full md:w-1/2 max-h-full flex flex-col">
            <DrawerHeader className="px-8 py-6 bg-navy-900 sticky top-0 z-10">
                <DrawerTitle className="text-white font-arial text-[24px] font-bold leading-[32px]">
                    Detalles del Producto
                </DrawerTitle>
            </DrawerHeader>
            <div className="px-5 py-2 gap-5 flex flex-col flex-1 overflow-y-auto">
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.KnlN7pmj9o0fTnpxNVLczAHaD4?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Imagen del producto"
                    className="w-full h-70 rounded-2xl object-cover"
                />
                <div className="flex justify-center items-center px-3 py-1 rounded-2xl bg-Blue-50 w-fit">
                    <p className="text-navy-900 font-arial text-[16px] font-normal leading-[24px]">
                        Entradas
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <SubTitle icon={<TagOutline />} title="Nombre del Producto" />
                    <input
                        type="text"
                        autoCapitalize="off"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Ej. Tacos al Pastor"
                        className="bg-gray-100 border-gray-300 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <SubTitle icon={<FileTextOutline />} title="Descripción" />
                    <textarea
                        ref={textareaRef}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe el producto..."
                        className="bg-gray-100 border-gray-300 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500 h-auto resize-none overflow-hidden min-h-[48px]"
                    ></textarea>
                </div>

                <div className="flex flex-col gap-2">
                    <SubTitle icon={<BoxOutline />} title="Stock Disponible" />
                    <input
                        type="number"
                        autoCapitalize="off"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Ej. 10"
                        className="bg-gray-100 border-gray-300 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500"
                        step={1}
                        onKeyDown={handleIntegerKeyDown}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <SubTitle icon={<TagOutline />} title="Categoría" />
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="bg-gray-100 border-gray-300 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500 appearance-none"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                        <option value={OTHER_CATEGORY}>— Otra / Agregar Nueva...</option>
                    </select>
                    {selectedCategory === OTHER_CATEGORY && (
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newCategoryInput}
                                onChange={(e) => setNewCategoryInput(e.target.value)}
                                placeholder="Escribe la nueva categoría"
                                className="flex-grow bg-gray-100 border-gray-300 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500"
                            />
                            <button
                                onClick={handleAddCategory}
                                className="bg-navy-900 text-white rounded-2xl px-4 py-3 w-28 text-center disabled:opacity-50"
                                disabled={newCategoryInput.trim() === ""}
                            >
                                Agregar
                            </button>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="gap-2 flex flex-col col-span-1">
                        <SubTitle icon={<DollarOutline />} title="Costo" />
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900">
                                $
                            </span>
                            <input
                                type="number"
                                autoCapitalize="off"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                                placeholder="Ej. 10.00"
                                className="bg-gray-100 border-gray-300 rounded-2xl px-4 py-3 pl-8 pr-16 text-gray-900 placeholder:text-gray-500 w-full"
                                step="0.01"
                                min="0"
                                onKeyDown={handleMonetaryKeyDown}
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                                MXN
                            </span>
                        </div>
                    </div>
                    <div className=" gap-2 flex flex-col col-span-1">
                        <SubTitle
                            icon={<DollarMinimalisticOutline />}
                            title="Precio de Venta"
                        />
                        <div className="relative text-Blue-700">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-Blue-700">
                                $
                            </span>
                            <input
                                type="number"
                                autoCapitalize="off"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Ej. 15.00"
                                className="bg-Blue-200/20 border-Blue-200 rounded-2xl px-4 py-3 pl-8 pr-16 text-Blue-700 placeholder:text-gray-500 w-full"
                                step="0.01"
                                min="0"
                                onKeyDown={handleMonetaryKeyDown}
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-Blue-700 text-sm">
                                MXN
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-start self-stretch px-[16px] py-[12px] rounded-2xl border border-Blue-200 bg-Blue-200/20">
                    <p className="text-navy-900 font-arial text-[16px] font-normal leading-[24px] col-span-2">
                        Margen de Ganancia
                    </p>
                    <p className="text-Blue-700 font-arial text-[16px] font-normal leading-[24px] col-span-1">
                        {margin.toFixed(1)}%
                    </p>
                </div>
            </div>
            <DrawerFooter className="px-8 gap-4 py-4 flex flex-row justify-between items-center border-t-gray-500 border-t-2 w-full bg-gray-100">
                <button className="w-fit text-negativo flex gap-2 items-center border-negativo/50 border-2 rounded-2xl  py-4 px-3">
                    <TrashBinTrashOutline />Eliminar
                </button>
                <button className="w-full bg-Blue-700 rounded-2xl py-4 px-3 text-white">
                    Editar Producto
                </button>
            </DrawerFooter>
        </DrawerContent>
    );
}

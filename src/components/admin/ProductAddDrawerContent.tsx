"use client";
import {
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
    GalleryOutline,
    TagOutline,
} from "solar-icon-set";
import { DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "../ui/drawer";
import { useAutoResizeTextArea } from "@/hooks/useAutoResizeTextArea";
import FileDropzone from "./FileDropzone";

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

export default function ProductAddDrawerContent() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    // Estado de formulario controlado
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState<string>("");
    const [categories, setCategories] = useState<string[]>([
        "Tacos",
        "Bebidas",
        "Postres",
        "Aperitivos",
    ]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [newCategoryInput, setNewCategoryInput] = useState("");
    const [cost, setCost] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    // Errores de validación
    const [errors, setErrors] = useState<{
        productName?: string;
        imageFile?: string;
        description?: string;
        stock?: string;
        category?: string;
        cost?: string;
        price?: string;
    }>({});

    // Auto-resize del textarea con hook robusto
    useAutoResizeTextArea(textareaRef, description);

    // Handlers reutilizables con tipos
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

    const parseMoney = (val: string) => parseFloat(val.replace(",", "."));

    const handleSubmit = useCallback(() => {
        const nextErrors: typeof errors = {};

        // Nombre
        if (productName.trim().length < 3) {
            nextErrors.productName = "El nombre es obligatorio (mín. 3 caracteres).";
        }

        // Imagen requerida
        if (!imageFile) {
            nextErrors.imageFile = "La imagen del producto es obligatoria.";
        }

        // Stock
        const stockNum = Number.isFinite(Number(stock)) ? parseInt(stock, 10) : NaN;
        if (Number.isNaN(stockNum) || stockNum < 0) {
            nextErrors.stock = "Ingresa un stock válido (entero ≥ 0).";
        }

        // Categoría
        if (!selectedCategory) {
            nextErrors.category = "Selecciona una categoría.";
        } else if (selectedCategory === OTHER_CATEGORY) {
            if (newCategoryInput.trim().length < 3) {
                nextErrors.category = "Escribe la nueva categoría (mín. 3 caracteres).";
            }
        }

        // Costos
        const costNum = parseMoney(cost);
        if (!Number.isFinite(costNum) || costNum < 0) {
            nextErrors.cost = "Ingresa un costo válido (≥ 0).";
        }

        const priceNum = parseMoney(price);
        if (!Number.isFinite(priceNum) || priceNum <= 0) {
            nextErrors.price = "Ingresa un precio válido (> 0).";
        } else if (Number.isFinite(costNum) && priceNum < costNum) {
            nextErrors.price = "El precio debe ser mayor o igual al costo.";
        }

        setErrors(nextErrors);

        // Si hay errores, no continuamos
        if (Object.keys(nextErrors).length > 0) return;

        const finalCategory =
            selectedCategory === OTHER_CATEGORY ? newCategoryInput.trim() : selectedCategory;

        const payload = {
            name: productName.trim(),
            description: description.trim() || null,
            stock: stockNum,
            category: finalCategory,
            cost: Number(costNum.toFixed(2)),
            price: Number(priceNum.toFixed(2)),
            image: imageFile,
        };

        console.log("[Producto - Nuevo]", payload);
        // Cerrar el drawer tras envío exitoso
        closeRef.current?.click();
    }, [productName, imageFile, stock, selectedCategory, newCategoryInput, cost, price, description]);

    return (
        <DrawerContent className="bg-gray-50 flex flex-col">
            <DrawerHeader className="px-8 py-6 bg-navy-900 md:sticky md:top-0 md:z-10">
                <DrawerTitle className="text-white font-arial text-[24px] font-bold leading-[32px]">
                    Agregar Nuevo Producto
                </DrawerTitle>
            </DrawerHeader>
            <div className="px-5 py-2 gap-5 flex flex-col flex-1 overflow-y-auto">
                <div className="flex flex-col gap-2">
                    <SubTitle icon={<TagOutline />} title="Nombre del Producto" />
                    <input
                        type="text"
                        autoCapitalize="off"
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Ej. Tacos al Pastor"
                        aria-invalid={!!errors.productName}
                        className={`bg-gray-100 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500 border ${errors.productName ? "border-negativo" : "border-gray-300"}`}
                    />
                    {errors.productName && (
                        <p className="text-negativo text-sm">{errors.productName}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <SubTitle icon={<GalleryOutline />} title="Imagen del Producto *" />
                    <FileDropzone
                        accept="image/png,image/jpeg,image/gif"
                        maxSizeMB={5}
                        onFileSelect={(file) => {
                            setImageFile((Array.isArray(file) ? file[0] : file) ?? null);
                        }}
                        className="bg-gray-100"
                    />
                    {errors.imageFile && (
                        <p className="text-negativo text-sm">{errors.imageFile}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <SubTitle icon={<FileTextOutline />} title="Descripción" />
                    <textarea
                        ref={textareaRef}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe el producto..."
                        className="bg-gray-100 border-gray-300 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500 resize-none  min-h-[48px] leading-6 h-full"
                        rows={5}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <SubTitle icon={<BoxOutline />} title="Stock Disponible" />
                    <input
                        type="number"
                        autoCapitalize="off"
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Ej. 10"
                        aria-invalid={!!errors.stock}
                        className={`bg-gray-100 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500 border ${errors.stock ? "border-negativo" : "border-gray-300"}`}
                        step={1}
                    />
                    {errors.stock && (
                        <p className="text-negativo text-sm">{errors.stock}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <SubTitle icon={<TagOutline />} title="Categoría" />
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        aria-invalid={!!errors.category}
                        className={`bg-gray-100 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500 appearance-none border ${errors.category ? "border-negativo" : "border-gray-300"}`}
                    >
                        <option value="" disabled>
                            Selecciona una categoría
                        </option>
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
                                aria-invalid={!!errors.category}
                                className={`flex-grow bg-gray-100 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500 border ${errors.category ? "border-negativo" : "border-gray-300"}`}
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
                    {errors.category && (
                        <p className="text-negativo text-sm">{errors.category}</p>
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
                                onChange={(e) => setCost(e.target.value)}
                                placeholder="Ej. 10.00"
                                aria-invalid={!!errors.cost}
                                className={`bg-gray-100 rounded-2xl px-4 py-3 pl-8 pr-16 text-gray-900 placeholder:text-gray-500 w-full border ${errors.cost ? "border-negativo" : "border-gray-300"}`}
                                step="0.01"
                                min="0"
                                onKeyDown={handleMonetaryKeyDown}
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                                MXN
                            </span>
                        </div>
                        {errors.cost && (
                            <p className="text-negativo text-sm">{errors.cost}</p>
                        )}
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
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Ej. 15.00"
                                aria-invalid={!!errors.price}
                                className={`bg-Blue-200/20 rounded-2xl px-4 py-3 pl-8 pr-16 text-Blue-700 placeholder:text-gray-500 w-full border ${errors.price ? "border-negativo" : "border-Blue-200"}`}
                                step="0.01"
                                min="0"
                                onKeyDown={handleMonetaryKeyDown}
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-Blue-700 text-sm">
                                MXN
                            </span>
                        </div>
                        {errors.price && (
                            <p className="text-negativo text-sm">{errors.price}</p>
                        )}
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
                <DrawerClose asChild>
                    <div className="w-fit text-gray-700 flex gap-2 items-center border-gray-700/50 border-2 rounded-2xl  py-4 px-3">
                        Cancelar
                    </div>
                </DrawerClose>
                <button onClick={handleSubmit} className="w-full bg-Blue-700 rounded-2xl py-4 px-3 text-white">
                    Agregar
                </button>
                <DrawerClose asChild>
                    <button ref={closeRef} className="hidden" aria-hidden />
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    );
}

"use client";
import React, { useCallback, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { UploadOutline } from "solar-icon-set";

type Props = {
  accept?: string; // e.g., "image/png,image/jpeg,image/gif"
  maxSizeMB?: number; // e.g., 5
  multiple?: boolean;
  className?: string;
  onFileSelect?: (files: File[] | File | null) => void;
};

export default function FileDropzone({
  accept = "image/png,image/jpeg,image/gif",
  maxSizeMB = 5,
  multiple = false,
  className,
  onFileSelect,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  const openFileDialog = () => inputRef.current?.click();

  const validate = (files: FileList | File[]): File[] => {
    const list = Array.from(files);
    const maxBytes = maxSizeMB * 1024 * 1024;

    const valid: File[] = [];
    for (const f of list) {
      const typeOk = accept.split(",").some((a) => {
        const t = a.trim();
        if (t.includes("/")) return f.type === t || f.type.startsWith(t.replace("*", ""));
        return true;
      });
      if (!typeOk) {
        setError("Tipo de archivo no permitido");
        continue;
      }
      if (f.size > maxBytes) {
        setError(`El archivo supera ${maxSizeMB}MB`);
        continue;
      }
      valid.push(f);
    }

    if (valid.length) setError(null);
    return valid;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const valid = validate(files);
    if (valid.length === 0) return;

    const selected = multiple ? valid : [valid[0]];
    onFileSelect?.(multiple ? selected : selected[0] ?? null);

    // Previews
    setPreviews((prev) => {
      prev.forEach((url) => URL.revokeObjectURL(url));
      return selected.map((f) => URL.createObjectURL(f));
    });
  };

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const dt = e.dataTransfer;
    handleFiles(dt.files);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  useEffect(() => {
    return () => {
      setPreviews((prev) => {
        prev.forEach((url) => URL.revokeObjectURL(url));
        return [];
      });
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div
        role="button"
        tabIndex={0}
        onClick={openFileDialog}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openFileDialog(); }}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={cn(
          "rounded-2xl border-2 border-dashed p-8 sm:p-10 text-center cursor-pointer select-none",
          "bg-gray-100 border-gray-300 text-gray-500",
          isDragging && "bg-gray-200 border-gray-400",
          className
        )}
      >
        {previews.length > 0 ? (
          <div className="flex items-center justify-center">
            <img
              src={previews[0]}
              alt="Vista previa"
              className="max-h-48 rounded-xl object-contain"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <UploadOutline className="w-10 h-10"/>
            <p className="text-gray-500"><span className="font-semibold">Click para subir</span> o arrastra y suelta</p>
            <p className="text-gray-500 text-sm">PNG, JPG, GIF hasta {maxSizeMB}MB</p>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
      {error && <p className="text-negativo text-sm">{error}</p>}
    </div>
  );
}

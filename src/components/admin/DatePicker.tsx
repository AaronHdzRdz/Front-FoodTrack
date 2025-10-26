"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Calendar22({
  value,
  onChange,
}: {
  value?: Date
  onChange?: (d: Date) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(value)

  React.useEffect(() => {
    setDate(value)
  }, [value])

  return (
    <div className="flex flex-col gap-3 text-gray-700">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="bg-white w-50
            rounded-2xl 
            border-2 border-gray-300 
            p-2 flex-row flex justify-between h-fit
            text-gray-900 font-sans text-sm font-normal leading-5 not-italic
            "
          >
            {(value ?? date) ? (value ?? date)!.toLocaleDateString() : "Selecciona la fecha"}
            <ChevronDownIcon className="text-gray-900" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value ?? date}
            captionLayout="dropdown"
            onSelect={(d) => {
              if (d) {
                if (onChange) onChange(d as Date)
                else setDate(d)
              }
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default Calendar22

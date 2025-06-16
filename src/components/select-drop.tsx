import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import timezoneData from '../lib/country-timezones.json';

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            {timezoneData.length && timezoneData.map((data)=>(
                <>
                <SelectLabel>{data?.country_label}</SelectLabel>
                {data?.timezones?.map((timezone)=>(
                <SelectItem value={timezone?.value}>{timezone?.label}</SelectItem>
                ))}
                </>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

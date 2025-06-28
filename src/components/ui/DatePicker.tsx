import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
	name?: string;
	value?: Date;
	onChange?: (value: Date | undefined) => void;
}

export function DatePicker(props: Readonly<Props>) {
	const { value, onChange } = props;

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					data-empty={!value}
					className='data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal'
				>
					<CalendarIcon />
					{value ? format(value, "PPP") : <span>select_date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar mode='single' selected={value} onSelect={onChange} />
			</PopoverContent>
		</Popover>
	);
}

import { useState } from "react";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroupItem } from "./ui/radio-group";

const HouseholdMember = ({
  member,
  index,
}: {
  member: HouseHoldMember;
  index: number;
}) => {
  const [firstName, lastName] = member.name.split(" ");
  const initials = firstName[0] + lastName[0];
  const [covered, setCovered] = useState(member.covered);
  const [insurance, setInsurance] = useState(member.insurance);
  return (
    <>
      <Checkbox
        checked={covered}
        onCheckedChange={() => setCovered(!covered)}
        className="self-center justify-self-center text-center"
      />

      <div className="flex flex-wrap items-center justify-start gap-2 md:flex-nowrap">
        <Avatar
          className={cn(
            member.faveColor,
            "inline rounded-full p-1 text-xs text-white",
          )}
        >
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-light capitalize md:whitespace-nowrap">
          {member.name}
        </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          ({member.preferredName})
        </span>
      </div>
      <RadioGroupItem
        value={index.toString()}
        className="self-center justify-self-center border-2 border-[#70C4BB] text-center data-[state=checked]:text-[#70C4BB]"
      />
      <div className="flex items-center justify-center">
        <Select
          value={insurance}
          disabled={member.dependent}
          onValueChange={() => setInsurance}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Options</SelectLabel>
              <SelectItem value="primary">Primary</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-center">
        <Input
          placeholder={member.dependent ? "" : "Ins. ID/SSN"}
          disabled={member.dependent}
        />
      </div>
    </>
  );
};

export default HouseholdMember;

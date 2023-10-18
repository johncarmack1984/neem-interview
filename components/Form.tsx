"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import InformationCircleSolid from "@/icons/information-circle-solid";
import { cn } from "@/lib/utils";
import { Fragment, useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ChevronLeft, X } from "lucide-react";

interface HouseHoldMember {
  faveColor: string;
  covered: boolean;
  name: string;
  preferredName: string;
  insurance: string;
  id: number;
  dependent: boolean;
}

function Form() {
  const [subscriber, setSubscriber] = useState<number>(0);
  // prettier-ignore
  const household: HouseHoldMember[] = [
    { faveColor: "bg-[#C985FF]", covered: true, name: "Jerome Bell", preferredName: "Rome", insurance: "primary", id: 1111111111, dependent: false },
    { faveColor: "bg-[#5B8AF0]", covered: true, name: "Stacy Bell", preferredName: "Stacy", insurance: "primary", id: 1111111111, dependent: false },
    { faveColor: "bg-[#EB8F24]", covered: false, name: "Rebecca Bell", preferredName: "Becca", insurance: "", id: 1111111111, dependent: true },
 ];
  return (
    <div className="container mx-auto py-8 px-4">
      <form className="flex flex-col space-y-6 max-w-32 border border-gray-300 p-4 m-4 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">Patient Insurance</h1>
          <Button aria-label="Close" variant="ghost">
            <X />
          </Button>
        </div>
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label htmlFor="search-insurance">Insurance</Label>
              <span className="text-xs text-muted-foreground">+Add new</span>
            </div>
            <Input
              id="search-insurance"
              placeholder="Search insurance..."
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="employer">Employer</Label>
            <Input id="employer" placeholder="Employer" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="carrier">Carrier</Label>
            <Input id="carrier" placeholder="Carrier" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan">Plan</Label>
            <Input id="plan" placeholder="Plan" required />
          </div>
        </div>
        <div className="flex gap-4">
          <Button disabled className="w-full font-normal" variant="outline">
            <ChevronLeft size={16} className="mr-2" /> Insurance details
          </Button>
          <Button disabled className="w-full font-normal" variant="outline">
            <ChevronLeft size={16} className="mr-2" />
            Coverage and Deductible
          </Button>
        </div>
        <h2 className="text-md font-medium">Household</h2>
        <RadioGroup
          value={subscriber.toString()}
          onValueChange={(e) => setSubscriber(parseInt(e))}
        >
          <div className="grid grid-cols-5 grid-flow-row-dense gap-2 font-light text-xs text-left">
            <div className="max-w-fit">
              <span className="mr-1">Covered</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InformationCircleSolid />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Is this person covered?</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="">Name</div>
            <div className="text-center">Subscriber</div>
            <div className="">Insurance</div>
            <div className="">ID</div>
            {household.map((member, i) => (
              <HouseholdMember key={i} index={i} member={member} />
            ))}
          </div>
        </RadioGroup>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="household-member">Household member</Label>
            <span className="text-xs text-muted-foreground font-light">
              +Add new member
            </span>
          </div>
          <Input id="household-member" placeholder="Search..." required />
        </div>
        <Button
          className="bg-[#70C4BB] w-[129px] whitespace-nowrap self-end text-white"
          type="submit"
        >
          Save and Close
        </Button>
      </form>
    </div>
  );
}

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
  return (
    <>
      <Checkbox
        checked={covered}
        onCheckedChange={() => setCovered(!covered)}
        className="text-center justify-self-center self-center"
      />
      <div className="flex flex-wrap justify-start items-center gap-2">
        <Avatar
          className={cn(
            member.faveColor,
            "rounded-full p-1 text-xs text-white inline"
          )}
        >
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <span className="font-light capitalize whitespace-nowrap">
          {member.name}
        </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400 font-light">
          ({member.preferredName})
        </span>
      </div>
      <RadioGroupItem
        value={index.toString()}
        className="data-[state=checked]:text-[#70C4BB] border-[#70C4BB] border-2 text-center justify-self-center self-center"
      />
      <div className="flex justify-center items-center">
        <Select value={member.insurance} disabled={member.dependent}>
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
      <div className="flex justify-center items-center">
        <Input
          placeholder={member.dependent ? "" : "Ins. ID/SSN"}
          disabled={member.dependent}
        />
      </div>
    </>
  );
};

export default Form;

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
import { useEffect, useState } from "react";

interface HouseHoldMember {
  faveColor: string;
  covered: boolean;
  name: string;
  preferredName: string;
  subscriber: boolean;
  insurance: string;
  id: number;
}

function Form() {
  const [subscriber, setSubscriber] = useState<number | null>(null);
  useEffect(() => {
    setSubscriber(0);
  }, []);
  // prettier-ignore
  const household = [
    { faveColor: "bg-[#C985FF]", covered: true, name: "Jerome Bell", preferredName: "Rome", insurance: "primary", id: "1111111111" },
    { faveColor: "bg-[#5B8AF0]", covered: true, name: "Stacy Bell", preferredName: "Stacy", insurance: "primary", id: "1111111111" },
    { faveColor: "bg-[#EB8F24]", covered: false, name: "Rebecca Bell", preferredName: "Becca", insurance: "", id: "1111111111" },
  ];
  return (
    <div className="container mx-auto py-8 px-4 text-semibold sans text-gray-500">
      <form className="flex flex-col space-y-6 max-w-32 border border-gray-300 p-4 m-4 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Patient Insurance</h1>
          <Button aria-label="Close" variant="ghost">
            <svg
              className=" h-6 w-6"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label htmlFor="search-insurance">Insurance</Label>
              <span className="text-xs">+Add new...</span>
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
          <Button className="w-full" variant="outline">
            Insurance details
          </Button>
          <Button className="w-full" variant="outline">
            Coverage and Deductible
          </Button>
        </div>
        <h2 className="text-xl font-semibold">Household</h2>
        <div className="">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="text-xs mb-2">
                <th className="font-normal text-left pr-2">
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
                </th>
                <th className="font-normal text-left pr-2">Name</th>
                <th className="font-normal text-left pr-2">Subscriber</th>
                <th className="font-normal text-left pr-2">Insurance</th>
                <th className="font-normal text-left pr-2">ID</th>
              </tr>
            </thead>
            <tbody className="">
              {household.map((member, i) => {
                const [firstName, lastName] = member.name.split(" ");
                const initials = firstName[0] + lastName[0];
                return (
                  <tr key={i} className="align-middle">
                    <td className="text-center align-middle">
                      <Checkbox
                        checked={member.covered}
                        onChange={() => (member.covered = !member.covered)}
                      />
                    </td>
                    <td className="flex items-center gap-2 pt-2">
                      <Avatar
                        className={cn(
                          member.faveColor,
                          "rounded-full p-1 text-xs text-white"
                        )}
                      >
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center gap-1">
                        <span className="capitalize">{member.name}</span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {" "}
                          ({member.preferredName})
                        </span>
                      </div>
                    </td>
                    <td className="pr-4 text-center">
                      <input
                        type="radio"
                        checked={subscriber === i}
                        onChange={() => setSubscriber(i)}
                      />
                    </td>
                    <td className="pr-4 py-2">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Primary" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Options</SelectLabel>
                            <SelectItem value="primary">Primary</SelectItem>
                            <SelectItem value="secondary">Secondary</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="pr-4">
                      <Input placeholder="Ins. ID/SSN" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="household-member">Household member</Label>
            <span className="text-xs">Add new...</span>
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

const HouseHoldMember = ({
  covered,
  faveColor,
  name,
  preferredName,
  subscriber,
  insurance,
  id,
}: HouseHoldMember) => {
  const [firstName, lastName] = name.split(" ");
  const initials = firstName[0] + lastName[0];
  return (
    <tr className="align-middle">
      <td className="text-center align-middle">
        <Checkbox />
      </td>
      <td className="flex items-center gap-2" valign="middle">
        <Avatar
          className={cn(faveColor, "rounded-full p-1 text-xs text-white")}
        >
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-1">
          <span className="capitalize">{name}</span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {" "}
            ({preferredName})
          </span>
        </div>
      </td>
      <td className="pr-4 py-2 text-center">
        <input type="radio" />
      </td>
      <td className="pr-4 py-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Primary" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Options</SelectLabel>
              <SelectItem value="primary">Primary</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </td>
      <td className="pr-4 py-2">
        <Input placeholder="Ins. ID/SSN" />
      </td>
    </tr>
  );
};

export default Form;

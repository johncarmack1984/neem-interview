import { useState } from "react";
import InformationCircleSolid from "@/icons/information-circle-solid";
import { ChevronLeft, SearchIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HouseholdMember from "./household-member";
import { RadioGroup } from "./ui/radio-group";
import { Separator } from "./ui/separator";

function Form() {
  const [subscriber, setSubscriber] = useState<number>(0);
  // prettier-ignore
  const household: HouseHoldMember[] = [
    { faveColor: "bg-[#C985FF]", covered: true, name: "Jerome Bell", preferredName: "Rome", insurance: "primary", id: 1111111111, dependent: false },
    { faveColor: "bg-[#5B8AF0]", covered: true, name: "Stacy Bell", preferredName: "Stacy", insurance: "primary", id: 1111111111, dependent: false },
    { faveColor: "bg-[#EB8F24]", covered: false, name: "Rebecca Bell", preferredName: "Becca", insurance: "", id: 1111111111, dependent: true },
 ];
  return (
    <div className="container mx-auto py-8 sm:px-4">
      <form className="max-w-32 flex flex-col space-y-6 rounded-md border border-gray-300 p-4 md:m-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">Patient Insurance</h1>
          <Button aria-label="Close" variant="ghost">
            <X />
          </Button>
        </div>
        <Separator className="h-[1px] bg-input" />
        <div className="space-y-2 text-2xl font-light tracking-wide">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label
                className="text-base font-medium"
                htmlFor="search-insurance"
              >
                Insurance
              </Label>
              <span className="text-xs text-muted-foreground">+Add new</span>
            </div>
            <Input
              id="search-insurance"
              placeholder="Search insurance"
              className="tracking-wide"
              onChange={() => {}}
              required
              Icon={SearchIcon}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="employer">Employer</Label>
            <Input
              id="employer"
              value="Company F"
              onChange={() => {}}
              placeholder="Employer"
              Icon={X}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="carrier">Carrier</Label>
            <Input
              id="carrier"
              value="Delta Insurance"
              onChange={() => {}}
              placeholder="Carrier"
              Icon={X}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan">Plan</Label>
            <Input
              id="plan"
              value="Dental Primary"
              onChange={() => {}}
              placeholder="Plan"
              Icon={X}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <Button
            disabled
            className="w-full border-[#C2C8D6] py-6 font-normal"
            variant="outline"
          >
            <ChevronLeft size={16} className="mr-2 h-4 w-4" /> Insurance details
          </Button>
          <Button
            disabled
            className="w-full whitespace-nowrap border-muted-foreground py-6 font-normal"
            variant="outline"
          >
            <ChevronLeft size={16} className="mr-2 h-4 w-4" />
            Coverage and Deductibles
          </Button>
        </div>
        <h2 className="text-md font-medium">Household</h2>
        <RadioGroup
          value={subscriber.toString()}
          onValueChange={(e) => setSubscriber(parseInt(e))}
        >
          <div className="grid grid-cols-7 gap-x-1 gap-y-2 text-left text-xs font-light md:gap-4">
            <div className="flex items-end justify-center">
              <span className="mr-1">Covered</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="hidden sm:block">
                    <InformationCircleSolid className="h-4 w-4 fill-[#9DA7BE]" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Is this person covered?</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-end">Name</div>
            <div className="hyphens-manual text-center">Sub&shy;scriber</div>
            <div className="col-span-2 flex items-end">Insurance</div>
            <div className="col-span-2 flex items-end">ID</div>
            {household.map((member, i) => (
              <HouseholdMember key={i} index={i} member={member} />
            ))}
          </div>
        </RadioGroup>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label className="text-xs font-light" htmlFor="household-member">
              Household member
            </Label>
            <span className="text-xs font-light text-muted-foreground">
              +Add new member
            </span>
          </div>
          <Input
            id="household-member"
            className="font-light"
            placeholder="Select household member"
            Icon={SearchIcon}
            required
          />
        </div>
        <Button
          className="w-full self-end whitespace-nowrap bg-[#70C4BB] text-white md:w-[129px]"
          type="submit"
        >
          Save and Close
        </Button>
      </form>
    </div>
  );
}

export default Form;

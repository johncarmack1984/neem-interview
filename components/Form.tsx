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
        <div className="flex gap-4">
          <Button
            disabled
            className="w-full py-6 font-normal"
            variant="outline"
          >
            <ChevronLeft size={16} className="mr-2" /> Insurance details
          </Button>
          <Button
            disabled
            className="w-full py-6 font-normal"
            variant="outline"
          >
            <ChevronLeft size={16} className="mr-2" />
            Coverage and Deductible
          </Button>
        </div>
        <h2 className="text-md font-medium">Household</h2>
        <RadioGroup
          value={subscriber.toString()}
          onValueChange={(e) => setSubscriber(parseInt(e))}
        >
          <div className="grid grid-cols-5 gap-x-1 gap-y-2 text-left text-xs font-light md:gap-2">
            <div>
              <span className="mr-1">Covered</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger onMouseDown={() => {}}>
                    <InformationCircleSolid />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Is this person covered?</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div>Name</div>
            <div className="text-center">Subscriber</div>
            <div>Insurance</div>
            <div>ID</div>
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
            placeholder="Search..."
            Icon={SearchIcon}
            required
            type="number"
          />
        </div>
        <Button
          className="w-[129px] self-end whitespace-nowrap bg-[#70C4BB] text-white"
          type="submit"
        >
          Save and Close
        </Button>
      </form>
    </div>
  );
}

export default Form;

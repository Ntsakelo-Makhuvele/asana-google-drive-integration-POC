import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import ppt from '@/assets/ppt.ico'
import googleDrive from '@/assets/googledrive.ico'
import { tickets, type TicketsList } from '@/constants/data'
import { Draggable } from "@/components/Draggable"
import { EllipsisHorizontalIcon, TrashIcon, PencilIcon, PencilSquareIcon, CheckIcon, ClockIcon, PlusCircleIcon, CheckCircleIcon, ChevronDownIcon, EyeIcon,XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react"

type Col = 'review' | 'create' | 'approved'

export const Home = () => {
  const [ticketsList, setTickesList] = useState<TicketsList>(tickets)
  const [date, setDate] = useState<Date>()

  // const columns = Object.keys(tickets)
  const handleUpdateTicket = (ticket_id: number, current_col: Col, target_col: Col) => {
    const targetTicket = ticketsList[current_col].filter(item => item.id === ticket_id)
    const filteredTickets = ticketsList[current_col].filter(item => item.id !== ticket_id)
    ticketsList[current_col] = filteredTickets
    ticketsList[target_col].push(targetTicket[0])
    setTickesList({ create: ticketsList['create'], review: ticketsList['review'], approved: ticketsList['approved'] })

  }


  return (
    <div>

      <div className="px-15 mt-10">
        <Dialog>
          <form>
            <DialogTrigger render={<Button className="cursor-pointer">Add Ticket</Button>} />
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create A Campaign</DialogTitle>
                <DialogDescription>
                  Add campaign details and click create when done
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" placeholder="e.g Foodie Friday" />
                </Field>
                <Field>
                  <Select>
                    <Label htmlFor="username-1">Vertical</Label>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Vertical" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="light">Groceries</SelectItem>
                        <SelectItem value="dark">TakealotNow</SelectItem>
                        <SelectItem value="system">Food</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="username-1">Campaign Date</Label>
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        variant="outline"
                        data-empty={!date}
                        className="w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                      >
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        defaultMonth={date}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>
                <Field>
                  <Select>
                    <Label htmlFor="username-1">Asset Folder</Label>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Vertical" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="light">Groceries</SelectItem>
                        <SelectItem value="dark">TakealotNow</SelectItem>
                        <SelectItem value="system">Food</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="username-1">Upload Brief</Label>
                  <Input type="file" multiple></Input>
                  <div className="flex">
                  <Badge variant="secondary" className="">
                    Foodie_fridays.ppt
                    <XMarkIcon className="inline-end"/>
                    </Badge>  
                  </div>
                </Field>                
                <Field>
                  <Label htmlFor="username-1">Upload Assets</Label>
                  <Input type="file" multiple></Input>
                  <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className="">
                    Foodie_fridays.ppt
                    <XMarkIcon className="inline-end"/>
                    </Badge>
                       <Badge variant="secondary" className="">
                    Foodie_fridays.ppt
                    <XMarkIcon className="inline-end"/>
                    </Badge>
                       <Badge variant="secondary" className="">
                    Foodie_fridays.ppt
                    <XMarkIcon className="inline-end"/>
                    </Badge>
                       <Badge variant="secondary" className="">
                    Foodie_fridays.ppt
                    <XMarkIcon className="inline-end"/>
                    </Badge>
                       <Badge variant="secondary" className="">
                    Foodie_fridays.ppt
                    <XMarkIcon className="inline-end"/>
                    </Badge>
                       <Badge variant="secondary" className="">
                    Foodie_fridays.ppt
                    <XMarkIcon className="inline-end"/>
                    </Badge>  
                  </div>
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button type="submit">Create</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>

      </div>
      <div className="p-10 grid lg:grid-cols-3 grid-cols-1  gap-4 mb-30 w-full">
        {ticketsList && Object.entries(ticketsList).map(([column, item], index) => (
          <div key={index}>
            <CardHeader className="mb-5">
              <CardTitle className={`text-left w-[fit-content] px-4 bg-blue-50 ${column === 'create' && 'text-gray-500 bg-gray-50'} ${column === 'review' && 'text-blue-500 bg-blue-50'} ${column === 'approved' && 'text-emerald-500 bg-emerald-50'} flex items-center`}>
                {column === 'create' && <PlusCircleIcon className="size-5 inline mr-1" />}
                {column === 'review' && <ClockIcon className="size-5 inline mr-1" />}
                {column === 'approved' && <CheckCircleIcon className="size-5 inline mr-1" />}
                {column.charAt(0).toUpperCase() + column.slice(1)}
              </CardTitle>
            </CardHeader>
            <ScrollArea className="overlay-none h-[100vh] rounded-xl bg-gray-100">
              {item.map((ticket: any, index: any) => (
                //  <Draggable key={ticket.id} id={ticket.id} column={column} index={index}>
                <Card className="min-h-70 p-5 w-[90%] m-auto mt-5" key={ticket.id}>
                  <CardTitle>{ticket.campaign_name}
                    <DropdownMenu>
                      <DropdownMenuTrigger render={<button className="inline relative float-right"><EllipsisHorizontalIcon className="size-6 inline float-right cursor-pointer" /></button>}>

                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-full">
                        <DropdownMenuGroup>
                          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                          <DropdownMenuItem className="cursor-pointer">
                            <PencilIcon />
                            Edit
                          </DropdownMenuItem>

                          {column === 'create' ? <DropdownMenuItem className="cursor-pointer" onClick={() => handleUpdateTicket(ticket.id, column, 'review')}>
                            <EyeIcon />
                            review
                          </DropdownMenuItem> : column === 'review' ? <DropdownMenuItem className="cursor-pointer" onClick={() => handleUpdateTicket(ticket.id, column as Col, 'approved')}>
                            <CheckIcon />
                            approve
                          </DropdownMenuItem> : <DropdownMenuItem className="cursor-pointer" onClick={() => handleUpdateTicket(ticket.id, column as Col, 'review')}>
                            <CheckIcon />
                            Move to review
                          </DropdownMenuItem>}
                          <DropdownMenuItem className="cursor-pointer text-red-900">
                            <TrashIcon />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>


                  </CardTitle>
                  <CardContent className="p-0">
                    <p className="mb-3">Deployment Date: {ticket.deployment_date}</p>
                    <p className="mb-3">Vertical: {ticket.vertical}</p>
                    <p className="mb-3">Final Approvers: {ticket.approvers}</p>
                    <div className="mt-5 flex items-center">
                      <img src={ppt} alt="" className="w-6 h-6 inline" />
                      <p className="inline ml-2">{ticket.brief}</p>
                    </div>
                    <div className="mt-5 flex items-center">
                      <img src={googleDrive} alt="" className="w-6 h-6 inline" />
                      <p className="inline ml-2">Assets Folder</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </div>
        ))}
      </div>
    </div>
  )
}
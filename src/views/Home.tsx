
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
import { ScrollArea } from "@/components/ui/scroll-area"
import ppt from '@/assets/ppt.ico'
import googleDrive from '@/assets/googledrive.ico'
import { tickets,type TicketsList } from '@/constants/data'
import { Draggable } from "@/components/Draggable"
import { EllipsisHorizontalIcon, TrashIcon,PencilIcon,PencilSquareIcon,CheckIcon } from '@heroicons/react/24/outline'
import { useState } from "react"

type Col =  'review' | 'create' | 'approved'

export const Home = () => {
    const [ticketsList, setTickesList] = useState<TicketsList>(tickets)

    // const columns = Object.keys(tickets)
    const handleUpdateTicket = (ticket_id:number, current_col:Col, target_col:Col) => {
       const targetTicket = ticketsList[current_col].filter(item => item.id === ticket_id)
       const filteredTickets = ticketsList[current_col].filter(item => item.id !== ticket_id) 
       ticketsList[current_col] = filteredTickets
       ticketsList[target_col].push(targetTicket[0])
       setTickesList({create:ticketsList['create'],review:ticketsList['review'],approved:ticketsList['approved']})
   
    }

    
    return (
        <div className="p-10 grid grid-cols-3 gap-4 mb-30">
            {ticketsList && Object.entries(ticketsList).map(([column, item], index) => (
                <div key={index}>
                    <Card className="mb-5 bg-sky-300">
                        <CardHeader className="">
                            <CardTitle className="text-center">{column.charAt(0).toUpperCase() + column.slice(1)}</CardTitle>
                        </CardHeader>
                    </Card>
                    <ScrollArea className="border p-10 h-[100vh] rounded-xl">
                        {item.map((ticket:any, index:any) => (
                            //  <Draggable key={ticket.id} id={ticket.id} column={column} index={index}>
                            <Card className="min-h-70 p-5 w-[90%] m-auto mt-10" key={ticket.id}>
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
                                           
                                                  {column === 'create' ? <DropdownMenuItem className="cursor-pointer" onClick={() => handleUpdateTicket(ticket.id,column,'review')}>
                                                  <PencilSquareIcon />
                                                  Move to review
                                                </DropdownMenuItem> : <DropdownMenuItem className="cursor-pointer" onClick={() => handleUpdateTicket(ticket.id,column as Col,'approved')}>
                                                  <CheckIcon />
                                                  Move to approved
                                                </DropdownMenuItem>}
                                                     <DropdownMenuItem className="cursor-pointer">
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
                                    {/* <div className="grid grid-cols-4 mt-5">
                                        {ticket.uploads.map((upload_url:any, index:any) => (
                                            <div className="h-15" key={index}>
                                                <img src={upload_url} alt="" className="h-full w-auto object-cover" />
                                            </div>
                                        ))}

                                    </div> */}
                                </CardContent>
                            </Card>

                            // </Draggable> 
                        ))}
                    </ScrollArea>
                </div>
            ))}
            {/* {columns && columns.map((column:string,index:number) => (
                <div key={index}>
                      <Card className="mb-5 bg-sky-300">
                    <CardHeader className="">
                        <CardTitle className="text-center">{column.charAt(0).toUpperCase()+column.slice(1)}</CardTitle>
                    </CardHeader>
                </Card>
                <ScrollArea className="border p-10 h-[100vh] rounded-xl">
                    {tickets && tickets[column].map()}
                </ScrollArea>
                </div>
            ))} */}
            {/* <div>
                <Card className="mb-5 bg-sky-300">
                    <CardHeader className="">
                        <CardTitle className="text-center">Start</CardTitle>
                    </CardHeader>
                </Card>
                <ScrollArea className="border p-10 h-[100vh] rounded-xl">
                   
                    {tickets && tickets.start.map((ticket, index) => (
                        
                            <Card className="min-h-70 mb-5 p-5 w-[90%] m-auto mt-10" key={index}>
                                <CardTitle>{ticket.campaign_name}</CardTitle>
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
                                    <div className="grid grid-cols-4 gap-4 mt-5">
                                        {ticket.uploads.map((upload_url, index) => (
                                            <div className="border h-20" key={index}>
                                                <img src={upload_url} alt="" className="h-full w-full object-cover"/>
                                            </div>
                                        ))}

                                    </div>
                                </CardContent>
                            </Card>

                    ))
                    }
                </ScrollArea>
            </div>
            <div>
                <Card className="mb-5 bg-sky-300">
                    <CardHeader>
                        <CardTitle className="text-center">Assets Review</CardTitle>
                    </CardHeader>
                </Card>
             
                    <ScrollArea className="border p-10 h-[100vh] rounded-xl">

                    </ScrollArea>
              
            </div>
            <div>
                <Card className="mb-5 bg-sky-300">
                    <CardHeader>
                        <CardTitle className="text-center">Approved</CardTitle>
                    </CardHeader>
                </Card>
                <ScrollArea className="border p-10 h-[100vh] rounded-xl">

                </ScrollArea>
            </div> */}
        </div>
    )
}
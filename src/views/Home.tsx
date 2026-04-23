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
import { tickets } from '@/constants/data'
import { Draggable } from "@/components/Draggable"
import { EllipsisHorizontalIcon, TrashIcon,PencilIcon,PencilSquareIcon } from '@heroicons/react/24/outline'



export const Home = () => {
    const columns = Object.keys(tickets)
    console.log(columns)
    return (
        <div className="p-10 grid grid-cols-3 gap-4 mb-30">
            {tickets && Object.entries(tickets).map(([column, item], index) => (
                <div key={index}>
                    <Card className="mb-5 bg-sky-300">
                        <CardHeader className="">
                            <CardTitle className="text-center">{column.charAt(0).toUpperCase() + column.slice(1)}</CardTitle>
                        </CardHeader>
                    </Card>
                    <ScrollArea className="border p-10 h-[100vh] rounded-xl">
                        {item.map((ticket, index) => (
                            //  <Draggable key={ticket.id} id={ticket.id} column={column} index={index}>
                            <Card className="min-h-70 mb-5 p-5 w-[90%] m-auto mt-10" key={index}>
                                <CardTitle>{ticket.campaign_name}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger render={<EllipsisHorizontalIcon className="size-6 inline float-right cursor-pointer" />}>
                                      
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-full">
                                            <DropdownMenuGroup>
                                                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <PencilIcon />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">
                                                  <TrashIcon />
                                                  Delete
                                                </DropdownMenuItem>
                                                   <DropdownMenuItem className="cursor-pointer">
                                                  <PencilSquareIcon />
                                                  Move to review
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            {/* <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>Team</DropdownMenuItem>
                                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                                            </DropdownMenuGroup> */}
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
                                    <div className="grid grid-cols-4 mt-5">
                                        {ticket.uploads.map((upload_url, index) => (
                                            <div className="h-15" key={index}>
                                                <img src={upload_url} alt="" className="h-full w-auto object-cover" />
                                            </div>
                                        ))}

                                    </div>
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
import type { ReactNode } from "react"
import type React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {AppSidebar} from '@/components/Sidebar'

export const Layout = ({children}:{children: ReactNode}) => {
    return (
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
            {children}
            </main>   
          </SidebarProvider>        
    )
}
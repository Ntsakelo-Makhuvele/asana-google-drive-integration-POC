import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel
} from "@/components/ui/sidebar"
import { SidebarMenuList } from "@/constants/data"
 import {Link} from 'react-router-dom'


export const AppSidebar = () => {
  return (
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarHeader className="p-5">
          <p className="font-semibold text-lg">Taskly</p>
      </SidebarHeader>
      <SidebarContent className="P-5">
        <SidebarGroup>
             <SidebarMenu>
              {SidebarMenuList.main.map(item => (
                 <SidebarMenuItem key={item.id} className="flex items-center">
                  <SidebarMenuButton className="text-md mb-3">
                  <item.icon className="inline mr-1"/><span>{item.title}</span>
                  </SidebarMenuButton>
                 </SidebarMenuItem>
              ))}
             </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="p-5">
        <SidebarGroup>
          <SidebarGroupLabel className="text-md mb-3">Verticals</SidebarGroupLabel>
          <SidebarMenu>
        {SidebarMenuList.secondary.map(item => (
          <SidebarMenuItem>
            <SidebarMenuButton className="text-md mb-3">
                <span className={`bg-${item.variant} text-white text-sm text-center flex items-center p-2 rounded-sm`}>{item.title.charAt(0)}</span><span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        </SidebarMenu>  
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
export interface Ticket {
    id:number,
    campaign_name:string,
    deployment_date: string,
    vertical: string,
    approvers: string,
    brief: string,
    uploads: string[]

}

import {HomeIcon,WrenchIcon,EllipsisHorizontalCircleIcon} from '@heroicons/react/24/outline'

export interface TicketsList  {
    create: Ticket[],
    review: Ticket[],
    approved: Ticket[]
}

export const tickets: TicketsList = {
    'create': [
        {
          id:1,  
          campaign_name: 'Foodie Friday',
          deployment_date: '26/04/2026',
          vertical: 'Food',
          approvers: 'Food',
          brief: 'Foodie Friday.ppt',
          uploads: ['https://images.pexels.com/photos/6151203/pexels-photo-6151203.jpeg','https://images.pexels.com/photos/31450802/pexels-photo-31450802.jpeg']
        },
       {
        id:2,
        campaign_name:'Wohoo Mondays',
        deployment_date: '27/04/2026',
        vertical: 'groceries',
        approvers: 'groc',
        brief: 'groc.ppt',
        uploads: ['https://images.pexels.com/photos/16248164/pexels-photo-16248164.jpeg','https://images.pexels.com/photos/8900041/pexels-photo-8900041.jpeg']
       },
        {
        id:3,
        campaign_name:'Dolulu Wednesday',
        deployment_date: '28/04/2026',
        vertical: 'TakealotNow',
        approvers: 'TakealotNow',
        brief: 'takealot.ppt',
        uploads: ['https://images.pexels.com/photos/18071814/pexels-photo-18071814.jpeg','https://images.pexels.com/photos/30707661/pexels-photo-30707661.jpeg']
       } 
    ],
    'review':[],
    'approved': [],
}

export const SidebarMenuList = {
    main: [
        {
            id:1,
            title:'Home',
            icon: HomeIcon,
            link:'/'
        },
         {
            id:2,
            title:'Manage',
            icon: WrenchIcon,
            link:'/manage'
        },
        {
            id:3,
            title:'More',
            icon: EllipsisHorizontalCircleIcon,
            link:'/more'
        },
    ],
    secondary: [
        {
            id:4,
            title:'MarketPlace',
            link:'/marketplace',
            variant:'emerald-500'
        },
        {
            id:4,
            title:'TakealotNow',
            link:'/takealotnow',
            variant:'cyan-500'
        },
        {
            id:4,
            title:'Groceries',
            link:'/groceries',
            variant:'violet-500'
        },

    ]
}
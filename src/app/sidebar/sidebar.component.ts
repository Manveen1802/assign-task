import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthApiService } from '../auth/auth-api.service';


//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype?: string;
    iconPath?: string;
    children?: ChildrenItems[];
    onlyAdminAccess: boolean;
    roles: string[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab?: string;
    type?: string;
    iconPath?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    // {
    // path: '/admin/dashboard',
    //  title: 'Dashboard',
    // type: 'link',
    // iconPath:'./assets/icons/admin-icons/dashboard.svg',
    // onlyAdminAccess: false,
    //  roles: ["ADMIN"]
    // },
    {
    path: '/admin/dashboard',
     title: 'Dashboard',
    type: 'link',
    iconPath:'./assets/icons/admin-icons/dashboard.svg',
    onlyAdminAccess: false,
     roles: ["ADMIN"]
    },
    // {
    // path: '/landlord/dashboard',
    //  title: 'Dashboard',
    // type: 'link',
    // iconPath:'./assets/icons/admin-icons/dashboard.svg',
    // onlyAdminAccess: false,
    //  roles: ["LANDLORD"]
    // },
   
    // {
    //     path: '/admin/enquiry',
    //     title: 'Enquiry',
    //     type: 'link',
    //     iconPath: './assets/icons/admin-icons/homeIcon.svg',
    //     onlyAdminAccess: false,
    //     roles: ["ADMIN"]

    // },
    // {
    //     path: '/admin/community',
    //     title: 'Community',
    //     type: 'link',
    //     iconPath: './assets/icons/admin-icons/homeIcon.svg',
    //     onlyAdminAccess: false,
    //     roles: ["ADMIN"]
    // },
    {
        path: '/admin/community',
        title: 'Manage Community',
        type: 'link',
        iconPath: './assets/icons/admin-icons/homeIcon.svg',
        onlyAdminAccess: false,
        roles: ["ADMIN"]
    },
    {
        path: '/admin/free-gifts',
        title: 'Free Gifts',
        type: 'link',
        iconPath: './assets/icons/admin-icons/homeIcon.svg',
        onlyAdminAccess: false,
        roles: ["ADMIN"]
    },
    {
        path: '/admin/configure',
        title: 'Configuration',
        type: 'sub',
        collapse: 'configure',
        iconPath: './assets/icons/admin-icons/homeIcon.svg',
        onlyAdminAccess: false,
        roles: ["ADMIN"],
        children: [
            { path: '/admin/terms-of-service', title: "Terms of Services", iconPath: './assets/icons/admin-icons/approval.svg' },
            { path: '/admin/privacy-policy', title: "Privacy Policy", iconPath: './assets/icons/admin-icons/approval.svg', },
            { path: '/admin/dwolla-service', title: "Dwolla Terms of Services", iconPath: './assets/icons/admin-icons/approval.svg' },
            { path: '/admin/dwolla-privacy', title: "Dwolla Privacy Policy", iconPath: './assets/icons/admin-icons/approval.svg', },
        ]
 
    },
   
   
    // {
    //     path: '/admin/update-content',
    //     title: 'Update Content',
    //     type: 'link',
    //     iconPath: './assets/icons/admin-icons/homeIcon.svg',
    //     onlyAdminAccess: false,
    //     roles: ["ADMIN"]
    // },
    // {
    //     path: '/admin/free-gifts',
    //     title: 'Free Gifts',
    //     type: 'link',
    //     iconPath: './assets/icons/admin-icons/homeIcon.svg',
    //     onlyAdminAccess: false,
    //     roles: ["ADMIN"]
    // },
    // {
    //     path: '/admin/configure',
    //     title: 'configuration',
    //     type: 'link',
    //     iconPath: './assets/icons/admin-icons/homeIcon.svg',
    //     onlyAdminAccess: false,
    //     roles: ["ADMIN"]
    // },
    // {
    //     path: '/landlord/landlord-community',
    //      title: 'Community',
    //     type: 'link',
    //     iconPath:'./assets/icons/admin-icons/dashboard.svg',
    //     onlyAdminAccess: false,
    //      roles: ["ADMIN"]
    //     },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[] | undefined;
    personName = '';
    role = '';

    constructor(private authService: AuthService, private router: Router, private authApiService: AuthApiService) {
        // this.authApiService.getUserInfo().subscribe(res => {
        //     this.role = res?.data?.userRole;
        //     this.menuItems = ROUTES.filter(menuItem => {
        //         if (menuItem.roles.includes(this.role))
        //             return menuItem;
        //     }
        //     );
        // })
    }
    isNotMobileMenu() {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.authService.getUserName().subscribe(res => { this.personName = res });
        this.authService.getUserRole().subscribe(res => { this.role = res });
        // if (!this.personName) {
        //     this.personName = sessionStorage.getItem("name");
        //     this.role = sessionStorage.getItem("role");
        // }

        console.log(this.menuItems)
    }
    ngAfterViewInit() {
    }

    navigateToProfile() {
        this.router.navigateByUrl('/profile');
    }
    navigateToRegistered(){
        this.router.navigateByUrl('/landlord/registered');
    }
    logout() {
        this.authService.logout();
    }
}

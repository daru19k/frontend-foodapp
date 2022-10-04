import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    icon: string;
    role: string;
}

const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: '' },
    { state:'category', name:'Manage Category', icon:'category', role:'branchmanager'},
    { state: 'product', name: 'Manage Product', icon: 'inventory_2', role: 'branchmanager' }
];

@Injectable()
export class MenuItems {
    getMenuItem(): Menu[] {
        return MENUITEMS;
    }
}
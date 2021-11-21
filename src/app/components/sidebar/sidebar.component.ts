import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Tableau de Bord",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "Administrateurs",
    rtlTitle: "المشرفون (Admins)",
    icon: "icon-badge",
    class: ""
  },
  ,
  {
    path: "/icons",
    title: "Eleves",
    rtlTitle: "التلاميذ",
    icon: "icon-satisfied",
    class: ""
  },
  {
    path: "/maps",
    title: "Formateurs",
    rtlTitle: "المدربون",
    icon: "icon-pin",
    class: "" 
  },
  ,
  {
    path: "/maps",
    title: "Superviseurs",
    rtlTitle: "المشرفون (Superviseurs)",
    icon: "icon-pin",
    class: "" 
  },
  {
    path: "/notifications",
    title: "Formations",
    rtlTitle: "تمارين",
    icon: "icon-bell-55",
    class: ""
  },
  ,
  {
    path: "/notifications",
    title: "Applications",
    rtlTitle: "الطلبات",
    icon: "icon-bell-55",
    class: ""
  },
  ,
  {
    path: "/notifications",
    title: "Catégories",
    rtlTitle: "التصنيفات",
    icon: "icon-bell-55",
    class: ""
  },
  ,
  {
    path: "/notifications",
    title: "Sessions",
    rtlTitle: "الجلسات",
    icon: "icon-bell-55",
    class: ""
  },
  ,
  {
    path: "/notifications",
    title: "Suggestions",
    rtlTitle: "اقتراحات",
    icon: "icon-chat-33",
    class: ""
  },
  {
    path: "/user",
    title: "Inscriptions",
    rtlTitle: "التسجيلات",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Couleurs",
    rtlTitle: "الألوان",
    icon: "icon-palette",
    class: ""
  },
  {
    path: "/typography",
    title: "Matières",
    rtlTitle: "المواد",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/user",
    title: "Profil d'Utilisateur",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/rtl",
    title: "Basculer Vers Arabe",
    rtlTitle: "التبديل إلى اللغة الفرنسية",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

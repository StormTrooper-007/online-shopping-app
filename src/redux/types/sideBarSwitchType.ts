export enum SidebarActionType{
      OPENBAR = "OPENBAR"
}

export type OpenBar = {
      type: SidebarActionType.OPENBAR
}

export type SideBarSwitchAction = OpenBar    
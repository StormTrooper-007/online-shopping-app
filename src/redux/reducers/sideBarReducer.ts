import { SidebarActionType } from "../types/sideBarSwitchType";
import { SideBarSwitchAction } from "../types/sideBarSwitchType";

const initialState = {
      sidebar:false
}

type InitialState = {
      sidebar:boolean;
}

function sideBarReducer(
      state: InitialState = initialState,
      action: SideBarSwitchAction
    ) {
      switch (action.type) {
        case SidebarActionType.OPENBAR:
              return{
                    ...state,
                    sidebar:!state.sidebar
              }
              default:
                  
                  return state;
            }
      }


      export default sideBarReducer;
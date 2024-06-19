
import { APP_USER_DETAILS, MAIN_MENU_ITEMS } from "@/helpers/config";
import { getUserDetails } from "@/redux/action/authAction";
import { appStorage } from "@/utils/storage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const StartUp = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        
        const user_details = appStorage.get(APP_USER_DETAILS);
        
        if(user_details){
            dispatch(getUserDetails());
        }
    }, [])
  return (
    <></>
  )
}

import classNames from "classnames";
import { IconProps} from "phosphor-react";
import { useContext } from "react";
import { ShowComponentsContext } from "../../common/contexts/ShowComponents/ShowComponents";
import { useShowComponentsContext } from "../../common/contexts/ShowComponents/useShowComponentContext";
import { NavItems } from "../../common/types/NavItems";


interface MenuItemProps {
    icon: React.ReactElement<React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>>
    title: string
    showComponent: boolean
    buttonValue: NavItems
}

export function MenuItem({icon, title, buttonValue, showComponent}: MenuItemProps) {
  const {setShows} = useShowComponentsContext()
  
  return (
        <li>
          <label className={classNames("text-zinc flex flex-col items-center mm:text-xl sm:xl: font-semibold", 
            {
              'text-aquaBlue': showComponent
          }
          )}>
            <button onClick={() => setShows(buttonValue)}>
              {icon}
            </button>
              {title}
          </label>
        </li>  
  );
}

import classNames from "classnames";
import { IconProps} from "phosphor-react";
import { NavItems } from "../../common/types/NavItems";


interface MenuItemProps {
    icon: React.ReactElement<React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>>
    title: string
    showComponent: boolean
    setShowComponent: (type: NavItems) => void
    buttonValue: NavItems
}

export function MenuItem({icon, title, showComponent, setShowComponent, buttonValue}: MenuItemProps) {
  return (
        <li>
          <label className={classNames("text-zinc flex flex-col items-center mm:text-xl sm:xl: font-semibold", 
            {
              'text-aquaBlue': showComponent,
              'text-zinc-100': !showComponent
          }
          )}>
            <button onClick={() => setShowComponent(buttonValue)}>
              {icon}
            </button>
              {title}
          </label>
        </li>  
  );
}

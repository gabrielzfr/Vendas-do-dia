import { atom, useRecoilValue } from "recoil";
import { ISales } from "../interfaces/ISales";
import { SaleType } from "../types/SaleType";

const localStorageSales = localStorage.getItem('Sales')
let windowWidth = window.innerWidth

export const salesState = atom<ISales[]>({
    key: "salesState",
    default: localStorageSales ? JSON.parse(localStorageSales) as ISales[] : [],
})

export const selectedSaleTypeState = atom<SaleType>({
    key: "selectedSaleTypeState",
    default: 'Money'
})

export const showComponentsState = atom({
    key: 'showComponentsState',
    default: {
        SalesComponent: {
            isShow: true
        },
        AddSalesComponent: {
            isShow: windowWidth < 590
        },
        ReportComponent: {
            isShow: false
        }
    }
    }
)


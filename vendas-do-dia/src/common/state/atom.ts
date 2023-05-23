import { atom } from "recoil";
import { ISales } from "../interfaces/ISales";
import { SaleType } from "../types/SaleType";

const localStorageSales = localStorage.getItem('Sales')
const localStorageCashdesk = localStorage.getItem('Cashdesk')
const localStorageDeposit = localStorage.getItem('Deposit')
const localStorageWithdraw = localStorage.getItem('Withdraw')

let windowWidth = window.innerWidth

//Sales
export const salesState = atom<ISales[]>({
    key: "salesState",
    default: localStorageSales ? JSON.parse(localStorageSales) as ISales[] : [],
})

//Selected Sale
export const selectedSaleTypeState = atom<SaleType>({
    key: "selectedSaleTypeState",
    default: 'Money'
})

//Show Components
export const showComponentsState = atom({
    key: 'showComponentsState',
    default: {
        SalesComponent: {
            isShow: true
        },
        AddSalesComponent: {
            isShow: windowWidth > 590
        },
        ReportComponent: {
            isShow: false
        },
        CashDeskComponent: {
            isShow: false
        }
    }
    }
)

// Cashdesk 
export const CashDeskState = atom<number>({
    key: "CashDeskState",
    default: localStorageCashdesk ? JSON.parse(localStorageCashdesk) as number : 0
})

export const cashDeskWithdraw = atom<number>({
    key: "cashDeskWithdraw",
    default: localStorageWithdraw ? JSON.parse(localStorageWithdraw) : 0
})

export const cashDeskDeposit = atom<number>({
    key: "cashDeskDeposit",
    default: localStorageDeposit ? JSON.parse(localStorageDeposit) : 0
})

export const showCashDeskWithdraw = atom<boolean>({
    key: "showCashDeskWithdraw",
    default: false
})

export const showCashDeskDeposit = atom<boolean>({
    key: "showCashDeskDeposit",
    default: false
})

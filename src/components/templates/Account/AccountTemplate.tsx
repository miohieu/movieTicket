import { Tabs } from "components/ui/Tabs"
import { AccountInfo } from "./AccountInfo"

export const AccountTemplate = () => {
    return (
        <div>
            <Tabs tabPosition="left"
                items={[
                    {
                        key: "accountInfo",
                        label:"Thong tin tai khoan",
                        children:<AccountInfo/>
                    },
                    {
                        key: "bookingHistory",
                        label: <p>Lich su dat ve</p>
                    }
                ]} />
            </div>
    )
}


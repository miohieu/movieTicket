import { Tabs as TabsA, TabsProps as TabsPropsA } from "antd";

type TabsObject  = {
    (props: TabsPropsA):JSX.Element
}

export const Tabs :TabsObject= (props: TabsPropsA) => {
    return <TabsA {...props}/>
}


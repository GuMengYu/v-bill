import {assetsInfo, getCatList} from '@/api'
import {Account, Category} from '@/types';
import {proxy} from 'valtio'

const appState = proxy<{
    cats: Category[];
    accounts: Account[];
}>({
    cats: [
        {
            "id": "1",
            "name": "买菜",
            "isSystem": 1,
            "icon": "AcUnitRounded",
            "createTime": "2022-09-14T06:09:05.000Z",
            "updateTime": "2022-09-14T06:09:08.000Z",
            "type": 1
        },
        {
            "id": "2",
            "name": "学习",
            "isSystem": 1,
            "icon": "AccountBalanceRounded",
            "createTime": "2022-09-14T06:09:33.000Z",
            "updateTime": "2022-09-14T06:09:30.000Z",
            "type": 1
        },
        {
            "id": "3",
            "name": "家人",
            "isSystem": 1,
            "icon": "AgricultureRounded",
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "4",
            "name": "转出",
            "isSystem": 1,
            "icon": "AirplaneTicketRounded",
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": " 5",
            "name": "其他",
            "isSystem": 1,
            "icon": "BeachAccessRounded",
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "6",
            "name": "数码",
            "isSystem": 1,
            "icon": "BusinessCenterRounded",
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "7",
            "name": "红包",
            "isSystem": 1,
            "icon": "DirectionsBoatRounded",
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "8",
            "name": "话费",
            "isSystem": 1,
            "icon": "ElderlyWomanRounded",
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "9",
            "name": "房租",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "10",
            "name": "快递",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "11",
            "name": "零食水果",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "12",
            "name": "医疗",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "13",
            "name": "日用品",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "14",
            "name": "吃喝",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "15",
            "name": "数字应用",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "16",
            "name": "餐饮",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "17",
            "name": "交通",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "18",
            "name": "购物",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "19",
            "name": "娱乐",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
        {
            "id": "20",
            "name": "医教",
            "isSystem": 1,
            "icon": null,
            "createTime": "2022-09-16T06:50:54.000Z",
            "updateTime": "2022-09-16T06:50:57.000Z",
            "type": 1
        },
    ],
    accounts: [
        {
            "id": "0654a2cc-2854-4d25-9709-88a81f8b2c54",
            "name": "招商银行",
            "balanceMoney": 131212,
            "type": 1
        },
        {
            "id": "1",
            "name": "现金",
            "balanceMoney": 2131.5,
            "type": 1
        },
        {
            "id": "5b447063-6dcc-4dff-aa92-69dc46fdaed4",
            "name": "信用卡",
            "balanceMoney": -450,
            "type": 2
        },
        {
            "id": "81adb239-94a3-4704-b144-25ce6646ddad",
            "name": "银行卡",
            "balanceMoney": 80.82,
            "type": 1
        },
        {
            "id": "8c90c20b-640a-4b6b-aff0-c852775cde02",
            "name": "蚂蚁基金",
            "balanceMoney": 50000,
            "type": 3
        }
    ]
})


export async function syncApp() {
    const { data } = await getCatList()
    appState.cats = data?.cats ?? []
    const { data: assets } = await assetsInfo()
    appState.accounts = assets?.accounts ?? []
}
export {
    appState
} 
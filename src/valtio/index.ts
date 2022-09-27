import { getCatList } from '@/api'
import { proxy } from 'valtio'

const appState = proxy({
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
    {
        "id": "21",
        "name": "居家",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 1
    },
    {
        "id": "22",
        "name": "投资",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 1
    },
    {
        "id": "23",
        "name": "人情",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 1
    },
    {
        "id": "24",
        "name": "报销",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-14T06:09:05.000Z",
        "updateTime": "2022-09-14T06:09:08.000Z",
        "type": 0
    },
    {
        "id": "25",
        "name": "投资",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-14T06:09:33.000Z",
        "updateTime": "2022-09-14T06:09:30.000Z",
        "type": 0
    },
    {
        "id": "26",
        "name": "闲置",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "27",
        "name": "牌局",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "28",
        "name": "转入",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "29",
        "name": "收款",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "30",
        "name": "工资薪水",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "31",
        "name": "利息",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "32",
        "name": "兼职外快",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "33",
        "name": "营业收入",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "34",
        "name": "红包",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "35",
        "name": "补贴福利",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "36",
        "name": "奖金",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "37",
        "name": "基金",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "38",
        "name": "公积金",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "39",
        "name": "股票",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    },
    {
        "id": "40",
        "name": "其他",
        "isSystem": 1,
        "icon": null,
        "createTime": "2022-09-16T06:50:54.000Z",
        "updateTime": "2022-09-16T06:50:57.000Z",
        "type": 0
    }
],
})


export async function syncCats() {
  // const { data } = await getCatList()
  // const catlist = data?.cats ?? []
  // appState.cats = catlist
}
export {
  appState
} 
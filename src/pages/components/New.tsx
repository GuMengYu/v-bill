import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import FaceIcon from "@mui/icons-material/Face";
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import {Box, Chip, Divider, Drawer, Tab, Tabs} from "@mui/material";
import {useState, useMemo} from "react";
import {AMOUNTTYPE, Category} from "@/types";
import {allIconsMap, StyledSvgIcon} from '@/utils/icons'
import Keyboard from "../../components/Keyboard";
import {appState} from '@/valtio'
import {useSnapshot} from 'valtio'
import AccountsDrawer from './AccountsDrawer'
import DateTimePicker from "@/pages/components/DateTimePicker";

export default function NewBill({open = false, onClose,}: {
    open: boolean;
    onClose: () => void;
}) {
    const snap = useSnapshot(appState)
    const [recordType, setRecordType] = useState<AMOUNTTYPE>(AMOUNTTYPE.expenses);

    const [amount, setAmount] = useState("0.00");
    const [currentCat, setCurrentCat] = useState<Category | null>(snap.cats[0])
    const [accountsDrawer, setAccountDrawer] = useState(false)
    const [time, setTime] = useState(new Date())
    const [selectedAccount, setSelectedAccount] = useState(snap.accounts[0])
    const handleTap = (val: string) => {
        setAmount(val)
    };
    const currentIcon = useMemo(() => {
        return {
            component: currentCat?.icon ? allIconsMap[currentCat.icon].component : allIconsMap.defaultIcon.component,
            name: currentCat?.name
        }
    }, [currentCat])

    function handleCatSelect(cat: Category) {
        setCurrentCat(cat)
    }

    function CatList({cats, value}: { cats: Category[], value: string | null | undefined }) {
        return <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gridTemplateRows: 'auto',
                justifyItems: 'center',
                maxHeight: '112px',
                overflowY: 'auto',
            }}
        >
            {
                cats.map(cat => {
                    return <Cat cat={cat} key={cat.id} activated={cat.icon === value}></Cat>
                })
            }

        </Box>
    }

    function Cat({cat, activated = false}: { cat: Category, activated?: boolean }) {
        const icon = cat.icon ? allIconsMap[cat.icon] : allIconsMap.defaultIcon
        return <Box display="flex" sx={
            {
                flexDirection: 'column',
                alignItems: 'center',
                height: 56,
                // width: 50,
            }
        }>
            <IconButton sx={{
                bgcolor: activated ? 'primaryContainer.main' : 'inherit'
            }} onClick={handleCatSelect.bind(null, cat)}>
                <StyledSvgIcon
                    color={activated ? 'primary' : 'inherit'}
                    component={icon.component}
                    title={icon.importName}
                >
                </StyledSvgIcon>
            </IconButton>
            <Typography variant="caption">{cat.name}</Typography>
        </Box>
    }

    return (
        <Drawer
            anchor="bottom"
            open={open}
            onClose={onClose}
        >
            <AppBar
                elevation={0}
                sx={{
                    position: "relative",
                    bgcolor: "surface.main",
                    color: "onSurface.main",
                }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <CloseIcon/>
                    </IconButton>
                    {/* <Typography sx={{ flex: 1 }} component="div">
              新增明细
            </Typography>
            <IconButton edge="end" autoFocus color="inherit">
              <MoreVert />
            </IconButton> */}
                </Toolbar>
            </AppBar>
            <Box bgcolor="surface.main" flex={1}>
                <Tabs
                    variant="fullWidth"
                    value={recordType}
                    onChange={(e, v) => {
                        setRecordType(v);
                    }}
                >
                    <Tab label="支出" value={AMOUNTTYPE.expenses}/>
                    <Tab label="收入" value={AMOUNTTYPE.income}/>
                    <Tab label="转账" value={AMOUNTTYPE.transfer}/>
                </Tabs>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mx: 2,
                    mt: 2,
                    borderRadius: 2,
                }}>
                    <CurrencyYenIcon />
                    <Typography variant="h4" sx={{
                        textAlign: 'start',
                        ml: 1,
                        flex: '2',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        lineClamp: '1',
                        WebkitLineClamp: '1',
                    }}>{amount}</Typography>
                </Box>
                <Divider sx={{
                    mx: 2,
                    my: 1,
                }}/>
                <CatList cats={snap.cats} value={currentCat?.icon}/>

                <Box
                    sx={{
                        padding: 1,
                        my: 1,
                        width: 'calc(100% - 16px)'
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        gap: 1,
                        mb: 1,
                    }}>
                        <Chip icon={<FaceIcon/>} label={selectedAccount?.name} onClick={() => {
                            setAccountDrawer(true)
                        }}/>
                        <DateTimePicker value={time} onChange={(value) => {
                            value && setTime(value)
                        }}/>
                        {/*<Chip icon={<MarkChatUnreadIcon/>} label="备注"/>*/}
                    </Box>
                    <Keyboard onChange={handleTap} value={amount}/>
                </Box>
            </Box>
            <AccountsDrawer open={accountsDrawer} onClose={() => setAccountDrawer(false)}
                            onSelect={(account) => {
                                setSelectedAccount(account)
                            }}
            />

        </Drawer>
    );
}
import {
  AcUnitRounded,
  AccountBalanceRounded,
  AgricultureRounded,
  AirplaneTicketRounded,
  BeachAccessRounded,
  BusinessCenterRounded,
  DirectionsBoatRounded,
  ElderlyWomanRounded,
  PaymentRounded,
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
const mui: Record<string, unknown> = {
  AcUnitRounded,
  AccountBalanceRounded,
  AgricultureRounded,
  AirplaneTicketRounded,
  BeachAccessRounded,
  BusinessCenterRounded,
  DirectionsBoatRounded,
  ElderlyWomanRounded,
  defaultIcon: PaymentRounded
}
type iconMap = {
  importName: string
  name: string
  theme: 'Outlined' | 'Two tone' | 'Sharp' | 'Rounded' | 'Filled'
  component: any
}
const allIconsMap: Record<string, iconMap> = {};
const allIcons = Object.keys(mui)
  .sort()
  .map((importName) => {
    let theme;
    if (importName.indexOf('Outlined') !== -1) {
      theme = 'Outlined';
    } else if (importName.indexOf('TwoTone') !== -1) {
      theme = 'Two tone';
    } else if (importName.indexOf('Rounded') !== -1) {
      theme = 'Rounded';
    } else if (importName.indexOf('Sharp') !== -1) {
      theme = 'Sharp';
    } else {
      theme = 'Filled';
    }

    const name = importName.replace(/(Outlined|TwoTone|Rounded|Sharp)$/, '');
    // let searchable = name;
    // if (synonyms[searchable]) {
    //   searchable += ` ${synonyms[searchable]}`;
    // }
    // searchIndex.addAsync(importName, searchable);

    const icon = {
      importName,
      name,
      theme,
      component: mui[importName],
    };
    allIconsMap[importName] = icon;
    return icon;
  });

  const StyledSvgIcon = styled(SvgIcon)(({ theme , color}) => ({
    boxSizing: 'content-box',
    cursor: 'pointer',
    color: color,
    borderRadius: theme.shape.borderRadius,
    '&:focus': {
      outline: 'none'
    },
  }));
export {
  allIcons,
  allIconsMap,
  StyledSvgIcon,
}

import {
  AcUnitRounded,
  AccountBalanceRounded,
  AgricultureRounded,
  AirplaneTicketRounded,
  BeachAccessRounded,
  BusinessCenterRounded,
  DirectionsBoatRounded,
  ElderlyWomanRounded,
  RequestQuoteRounded,
} from '@mui/icons-material'
const mui: Record<string, unknown> = {
  AcUnitRounded,
  AccountBalanceRounded,
  AgricultureRounded,
  AirplaneTicketRounded,
  BeachAccessRounded,
  BusinessCenterRounded,
  DirectionsBoatRounded,
  ElderlyWomanRounded,
  RequestQuoteRounded,
}
const allIconsMap: Record<string, unknown> | { defaultIcon: unknown }  = {
  defaultIcon: {
    importName: 'RequestQuoteRounded',
    name: 'RequestQuote',
    theme: 'Rounded',
    component: mui['RequestQuoteRounded'],
  }
};
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

export {
  allIcons,
  allIconsMap,
}

/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */

import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { casas } from '../data/menuCasas';
import { styles } from '../themes/appThemes';
import { itemSeparator } from '../components/ItemSeparator';


export const CustomSectionListScreen = () => {
  return (
    <View style={ { ...styles.globalMargin, flex:1 } }>
        <SectionList
            sections={casas}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent= {() => itemSeparator()}
            SectionSeparatorComponent= {() => itemSeparator()}
            ListHeaderComponent={() => <HeaderTitle title="Section List"/> }
            ListFooterComponent={() => <HeaderTitle title={'Total de casas: ' + casas.length}/>}
            renderItem= {({item}) => <Text>{item}</Text> }
            stickySectionHeadersEnabled
            renderSectionHeader= {({section}) => (
                <View style={{backgroundColor:'white'}}>
                    <HeaderTitle title={section.casa}/>
                </View>
            )}
            renderSectionFooter= {({section}) => (
                <HeaderTitle title={ 'Total: ' + section.data.length }/>
            )}

            showsVerticalScrollIndicator={false}
        />
    </View>
  );
};

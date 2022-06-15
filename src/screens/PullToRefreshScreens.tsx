/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../themes/appThemes';

export const PullToRefreshScreens = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState('');

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('terminando de refresh');
            setRefreshing(false);
            setData('He terminado');
        }, 1500);
    };

  return (
    <ScrollView
        refreshControl={
            <RefreshControl
                refreshing= { refreshing }
                onRefresh= { onRefresh }
                progressViewOffset= {10}
                progressBackgroundColor= "#5856D6"
                colors={['blue', 'red', 'green']}
                tintColor="white"
                title="Refreshing"
            />
        }
    >
        <View style={styles.globalMargin} >
            <HeaderTitle title="Pull to Refresh"/>
            {
                <Text> data </Text>  && <HeaderTitle title={ data }/>
            }
        </View>
    </ScrollView>

  );
};

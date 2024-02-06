import React from 'react';
import {View} from 'react-native';
import Text from '@components/Text';
import useLocalize from '@hooks/useLocalize';
import useThemeStyles from '@hooks/useThemeStyles';
import {Styles} from '@styles/index';

type ReportDateIndicatorProps = {
    style: Styles;
    created: string;
};

function ReportDateIndicator({style = {}, created}: ReportDateIndicatorProps) {
    const {datetimeToCalendarTime} = useLocalize();
    const styles = useThemeStyles();
    return (
        <View style={[styles.justifyContentCenter, styles.alignItemsCenter, style]}>
            <View style={[styles.pv2, styles.ph6, styles.border, styles.chatItemDateIndicator]}>
                <Text style={[styles.textLabelSupporting, styles.lh16]}>{datetimeToCalendarTime(created, false)}</Text>
            </View>
        </View>
    );
}

export default ReportDateIndicator;

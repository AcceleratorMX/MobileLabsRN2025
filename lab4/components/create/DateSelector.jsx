import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import DatePicker from 'react-native-date-picker';
import {STYLES} from '../../styles';
import {COLORS} from '../../constants';
import {formatDate} from '../../utils/dateUtils';

const DateSelector = ({
                          date,
                          isDatePickerVisible,
                          setDatePickerVisibility,
                          handleConfirm,
                          handleCancel,
                      }) => (
    <>
        <TouchableOpacity
            style={STYLES.dateButton}
            onPress={() => setDatePickerVisibility(true)}
        >
            <FontAwesome5 name="calendar-alt" size={16} color={COLORS.ACCENT}/>
            <Text style={STYLES.dateText}>Обрати час: {formatDate(date)}</Text>
        </TouchableOpacity>
        <DatePicker
            modal
            open={isDatePickerVisible}
            date={date}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            minimumDate={new Date()}
            mode="datetime"
            locale="uk"
            theme="dark"
            accentColor={COLORS.ACCENT}
            textColor={COLORS.WHITE_COLOR}
            dividerColor="#444"
            title="Оберіть дату та час"
            confirmText="Підтвердити"
            cancelText="Скасувати"
        />
    </>
);

export default DateSelector;
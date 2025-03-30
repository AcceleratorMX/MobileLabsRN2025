import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

const CustomInput = ({ value, onChange, placeholder, error, secureTextEntry, keyboardType, autoCapitalize }) => (
    <View>
        <TextInput
            style={[profileStyles.input, error && profileStyles.inputError]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize || 'sentences'}
        />
        {error && <Text style={profileStyles.errorText}>{error}</Text>}
    </View>
);

export const Profile = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        lastName: '',
        firstName: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: '' });
        setSuccessMessage('');
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = ['email', 'password', 'confirmPassword', 'lastName', 'firstName'];

        requiredFields.forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = "Це поле обов'язкове!";
            }
        });

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Введіть коректну електронну пошту";
        }
        if (formData.password && formData.password.length < 6) {
            newErrors.password = "Пароль має бути не менше 6 символів";
        }
        if (formData.confirmPassword && formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Паролі не співпадають";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = () => {
        if (validateForm()) {
            setSuccessMessage('Реєстрація успішна!');
            setFormData({
                email: '',
                password: '',
                confirmPassword: '',
                lastName: '',
                firstName: '',
            });
        }
    };

    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.primaryFieldsContainer}>
                <CustomInput
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                    placeholder="Електронна пошта"
                    error={errors.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <CustomInput
                    value={formData.password}
                    onChange={(value) => handleInputChange('password', value)}
                    placeholder="Пароль"
                    error={errors.password}
                    secureTextEntry
                />
                <CustomInput
                    value={formData.confirmPassword}
                    onChange={(value) => handleInputChange('confirmPassword', value)}
                    placeholder="Пароль (ще раз)"
                    error={errors.confirmPassword}
                    secureTextEntry
                />
            </View>

            <View style={profileStyles.secondaryFieldsContainer}>
                <CustomInput
                    value={formData.lastName}
                    onChange={(value) => handleInputChange('lastName', value)}
                    placeholder="Прізвище"
                    error={errors.lastName}
                />
                <CustomInput
                    value={formData.firstName}
                    onChange={(value) => handleInputChange('firstName', value)}
                    placeholder="Ім'я"
                    error={errors.firstName}
                />
            </View>

            <TouchableOpacity style={profileStyles.button} onPress={handleRegister}>
                <Text style={profileStyles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>

            {successMessage && <Text style={profileStyles.successText}>{successMessage}</Text>}
        </View>
    );
};

const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    primaryFieldsContainer: {
        marginVertical: 20
    },
    secondaryFieldsContainer: {
        marginVertical: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#1a6dfd',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    successText: {
        color: 'green',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
});
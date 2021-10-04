import React, { FC, useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import IContact from '../IContact';
import { ContactDetailsProp } from '../NavigatorTypes';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const ContactDetailScreen: FC<{
    route: RouteProp<{ params: IContact }, 'params'>
}> = ({
    route
}) => {

        const navigation = useNavigation<ContactDetailsProp>();

        const [contact, setContact] = useState<IContact>();

        useEffect(() => {
            if (route.params) {
                setContact(route.params);
            } else {
                navigation.navigate('ContactsScreen');
            }
        }, [])

        return (
            <View style={styles.container}>
                <View style={styles.profile}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: contact?.picture.large }} />
                    </View>
                    <View>
                        <Text style={styles.profileName}>{contact?.name.first} {contact?.name.last}</Text>
                        <View style={styles.profilePhoneInfo}>
                            <Icon name='phone' size={17} color={'#FFFFFF'} />
                            <Text style={styles.profilePhone}>{contact?.cell}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.info}>
                    <Icon name='email' size={27} color={'#000000'} style={{marginRight: 17}} />
                    <View>
                        <Text style={styles.infoTitle}>Email</Text>
                        <Text style={styles.infoValue}>{contact?.email}</Text>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.info}>
                    <Icon name='phone' size={27} color={'#000000'} style={{marginRight: 17}} />
                    <View>
                        <Text style={styles.infoTitle}>Work</Text>
                        <Text style={styles.infoValue}>{contact?.phone}</Text>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.info}>
                    <Icon name='cellphone' size={27} color={'#000000'} style={{marginRight: 17}} />
                    <View>
                        <Text style={styles.infoTitle}>Personal</Text>
                        <Text style={styles.infoValue}>{contact?.cell}</Text>
                    </View>
                </View>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    profile: {
        paddingVertical: 70,
        backgroundColor: '#2B90D8'
    },
    profilePhoneInfo: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileName: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    profilePhone: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 4
    },
    info: {
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 3
    },
    infoValue: {
        fontSize: 18,
        color: '#2B90D8'
    },
    imageContainer: {
        marginBottom: 15,
        alignSelf: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    line: {
        height: 1,
        backgroundColor: '#474B4E',
        opacity: 0.2,
        alignSelf: 'center',
        width: '85%'
    }
});

export default ContactDetailScreen
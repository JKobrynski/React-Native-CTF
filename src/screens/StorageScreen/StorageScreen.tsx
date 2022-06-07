import React from 'react'
import { SafeAreaView, View, Alert } from 'react-native'
import ButtonComponent from '../../components/button/ButtonComponent'
import { StorageService } from '../../services/StorageService'
import { styles } from './StorageScreen.styles'

const StorageScreen: React.FC<any> = () => {

    const storeData = async () => {
        const data = [
            'Elliot Alderson', 'Darlene Alderson', 'Angela Moss', 'Tyrell Wellick', 'John Doe'
        ]
        await StorageService.storeDataObject('people',data) 
    }

    const readData = async () => {
        const data = await StorageService.getDatabject('people')
        Alert.alert('Storage data', JSON.stringify(data))
    }

    return <SafeAreaView style={styles.container}>
        <View>
            <ButtonComponent value={'Add Records to data base'} onPress={() => {storeData()}} />
            <ButtonComponent value={'Read Records from data base'} onPress={() => {readData()}} />
        </View>
    </SafeAreaView>
}

export default StorageScreen;
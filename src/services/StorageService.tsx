import { MMKV } from 'react-native-mmkv'
import Config from "react-native-config";

const MMKVStorage = new MMKV({
    id: 'ctf-app-storage',
    encryptionKey: Config.ENCRYPTION_KEY
})

const storeData = async (key: string, value: string) => {
    try {
        MMKVStorage.set(key, value)
    } catch (e) {
        errorMessage(`${e}`)
    }
}

const storeDataObject = async (key: string, value: string[]) => {
    try {
        const jsonValue = JSON.stringify(value)
        MMKVStorage.set(key, jsonValue)
    } catch (e) {
        errorMessage(`${e}`)
    }
}

const getData = async (key: string,) => {
    try {
        const value = MMKVStorage.getString(key)
        if (value !== null) {
            return value
        }
        return undefined
    } catch (e) {
        errorMessage(`${e}`)
    }
}

const getDatabject = async (key: string,) => {
    try {
        const jsonValue = MMKVStorage.getString(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        errorMessage(`${e}`)
    }
}


const errorMessage = (error: string): void => {
    console.warn(error)
}

export const StorageService = {
    getData,
    getDatabject,
    storeData,
    storeDataObject,
}
